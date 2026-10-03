import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 3D hero background: a glowing faceted core wrapped in a wireframe shell,
 * two orbit rings and a slow particle field. Follows the mouse, pauses when
 * off-screen, and renders a single still frame for reduced-motion users.
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return; // no WebGL: the CSS gradient background still shows
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.045);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    // Lights
    scene.add(new THREE.AmbientLight(0x1e293b, 1.2));
    const cyan = new THREE.PointLight(0x22d3ee, 60, 30);
    cyan.position.set(4, 3, 5);
    scene.add(cyan);
    const violet = new THREE.PointLight(0xa855f7, 55, 30);
    violet.position.set(-5, -2, 4);
    scene.add(violet);
    const rim = new THREE.DirectionalLight(0xffffff, 0.6);
    rim.position.set(0, 5, -5);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    // Core
    const coreGeo = new THREE.IcosahedronGeometry(1.55, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0e2a3a, metalness: 0.85, roughness: 0.22, flatShading: true,
      emissive: 0x0891b2, emissiveIntensity: 0.18,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Wireframe shell
    const shellGeo = new THREE.IcosahedronGeometry(2.25, 2);
    const shell = new THREE.LineSegments(
      new THREE.WireframeGeometry(shellGeo),
      new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.18 })
    );
    group.add(shell);

    // Shell vertices as glowing nodes
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', shellGeo.getAttribute('position').clone());
    const nodes = new THREE.Points(nodeGeo, new THREE.PointsMaterial({ color: 0x67e8f9, size: 0.05, transparent: true, opacity: 0.8 }));
    group.add(nodes);

    // Orbit rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.55 });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.1, 0.012, 8, 160), ringMat1);
    ring1.rotation.set(Math.PI / 2.4, 0.3, 0);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.01, 8, 180), ringMat2);
    ring2.rotation.set(Math.PI / 1.8, -0.5, 0.4);
    group.add(ring1, ring2);

    // Satellites riding the rings
    const satGeo = new THREE.SphereGeometry(0.07, 16, 16);
    const sat1 = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0x67e8f9 }));
    const sat2 = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0xc084fc }));
    ring1.add(sat1);
    ring2.add(sat2);

    // Particle field
    const COUNT = window.innerWidth < 768 ? 500 : 1100;
    const pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 6 + Math.random() * 16;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.6;
      pos[i * 3 + 2] = r * Math.cos(ph) - 6;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x94a3b8, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false }));
    scene.add(stars);

    // Layout: object sits right on wide screens, centered and smaller on phones
    const resize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const wide = w >= 1024;
      group.position.x = wide ? 3.1 : 0;
      group.position.y = wide ? 0 : 0.6;
      const s = wide ? 1 : w < 640 ? 0.62 : 0.8;
      group.scale.setScalar(s);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Mouse parallax
    const target = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    // Only animate while visible
    let visible = true;
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) loop(); }, { threshold: 0 });
    io.observe(mount);

    const clock = new THREE.Clock();
    let raf = 0;
    const draw = () => {
      const t = clock.getElapsedTime();
      core.rotation.x = t * 0.18;
      core.rotation.y = t * 0.24;
      shell.rotation.y = -t * 0.08;
      shell.rotation.z = t * 0.05;
      nodes.rotation.copy(shell.rotation);
      ring1.rotation.z = t * 0.35;
      ring2.rotation.z = -t * 0.25;
      sat1.position.set(Math.cos(t * 0.9) * 3.1, Math.sin(t * 0.9) * 3.1, 0);
      sat2.position.set(Math.cos(-t * 0.7 + 2) * 3.6, Math.sin(-t * 0.7 + 2) * 3.6, 0);
      stars.rotation.y = t * 0.012;
      coreMat.emissiveIntensity = 0.16 + Math.sin(t * 1.4) * 0.06;
      group.rotation.y += (target.x * 0.45 - group.rotation.y) * 0.04;
      group.rotation.x += (target.y * 0.3 - group.rotation.x) * 0.04;
      camera.position.x += (target.x * 0.4 - camera.position.x) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    const loop = () => {
      cancelAnimationFrame(raf);
      if (!visible) return;
      draw();
      raf = requestAnimationFrame(loop);
    };

    if (reduceMotion) {
      draw();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose()); else if (mat) mat.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 opacity-45 lg:opacity-100 [&>canvas]:w-full [&>canvas]:h-full" aria-hidden="true" />;
}
