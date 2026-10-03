export const WA_NUMBER = '918887244823';
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Karan, I found your portfolio and I'd like to discuss a project.")}`;

export const SERVICE_OPTIONS = [
  'Business Website',
  'Local Business Website (Trades & Services)',
  'Web Application',
  'Mobile App',
  'E-Commerce Store',
  'AI Agent / Chatbot',
  'AI Voice Agent',
  'AI Workflow Automation',
  'Ongoing Tech Partnership',
  'Other / Not sure yet',
];

const EVENT = 'contact:prefill';

/** Pre-select a service (and optional note) in the contact form, then scroll to it. */
export function goToContact(service?: string, note?: string) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { service, note } }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function onContactPrefill(cb: (d: { service?: string; note?: string }) => void) {
  const h = (e: Event) => cb((e as CustomEvent).detail || {});
  window.addEventListener(EVENT, h);
  return () => window.removeEventListener(EVENT, h);
}
