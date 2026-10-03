(function(){
var PHONE="(208) 555-0147", TEL="tel:+12085550147", CITY="Meridian, ID", REGION="Treasure Valley, Idaho";
var TOWNS=[["Boise","Ada County"],["Meridian","Ada County"],["Nampa","Canyon County"],["Eagle","Ada County"],["Kuna","Ada County"],["Star","Ada County"],["Caldwell","Canyon County"],["Garden City","Ada County"]];

var I={
 phone:'<path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/>',
 check:'<path fill="currentColor" d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6 11-11-1.4-1.4z"/>',
 home:'<path fill="currentColor" d="M12 3 1 11.5l1.2 1.6L4 11.7V21h16v-9.3l1.8 1.4 1.2-1.6zm6 16H6v-8.8l6-4.6 6 4.6z"/>',
 drop:'<path fill="currentColor" d="M12 2s7 7.6 7 12.5A7 7 0 0 1 5 14.5C5 9.6 12 2 12 2zm0 18a5 5 0 0 0 5-5h-2a3 3 0 0 1-3 3z"/>',
 storm:'<path fill="currentColor" d="M17.5 9a5.5 5.5 0 0 0-10.7-1.5A4.5 4.5 0 0 0 7.5 16.5h10a3.75 3.75 0 0 0 0-7.5z"/><circle fill="currentColor" cx="8" cy="20" r="1.4"/><circle fill="currentColor" cx="12.5" cy="21" r="1.4"/><circle fill="currentColor" cx="17" cy="20" r="1.4"/>',
 tool:'<path fill="currentColor" d="M21.7 18.6 13.4 10.3a5.5 5.5 0 0 0-7-7.1l3.5 3.5-2.8 2.8-3.6-3.5a5.5 5.5 0 0 0 7.1 7l8.3 8.3c.4.4 1 .4 1.4 0l1.4-1.4c.4-.3.4-1 0-1.3z"/>',
 clip:'<path fill="currentColor" d="M16 3h-1.2a3 3 0 0 0-5.6 0H8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM10.5 17 7.8 14.3l1.1-1.1 1.6 1.6 4.6-4.6 1.1 1.1z"/>',
 flame:'<path fill="currentColor" d="M13.5 1s1 3-1.5 6.5S7 12 7 15.5a5 5 0 0 0 10 0c0-2-1-3.5-1-3.5s-.5 2-2 2.5c0 0 1.5-5-.5-13.5z"/>',
 snow:'<path fill="currentColor" d="M11 2h2v4.2l2.6-2.6 1.4 1.4L13 9v2h2l4-4 1.4 1.4-2.6 2.6H22v2h-4.2l2.6 2.6L19 17l-4-4h-2v2l4 4-1.4 1.4-2.6-2.6V22h-2v-4.2l-2.6 2.6L7 19l4-4v-2H9l-4 4-1.4-1.4L6.2 13H2v-2h4.2L3.6 8.4 5 7l4 4h2V9L7 5l1.4-1.4L11 6.2z"/>',
 fan:'<path fill="currentColor" d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.5-9c4.5 0 4.6 3.5 2.2 4.7-1 .5-1.4 1.5-1.6 2.4.5.2.9.5 1.2 1 3.9-2.1 7.7-1.4 7.7 2.4 0 4.5-3.5 4.6-4.7 2.2-.5-1-1.5-1.4-2.4-1.6-.2.5-.5.9-1 1.2 2.1 3.9 1.4 7.7-2.4 7.7-4.5 0-4.6-3.5-2.2-4.7 1-.5 1.4-1.5 1.6-2.4-.5-.2-.9-.5-1.2-1C3.8 16 0 15.3 0 11.5c0-4.5 3.5-4.6 4.7-2.2.5 1 1.5 1.4 2.4 1.6.2-.5.5-.9 1-1.2C6 5.8 6.7 2 10.5 2z"/>',
 leaf:'<path fill="currentColor" d="M20 3S8 2 4.5 9.5C2 15 5 20 5 20l1.6-1.2C8 16 10 13 14 11c-3 2.5-5 5.5-6 8.5 0 0 6 1.5 10-3.5S20 3 20 3z"/>',
 tree:'<path fill="currentColor" d="M12 2 5 12h3l-4 6h7v4h2v-4h7l-4-6h3z"/>',
 spark:'<path fill="currentColor" d="M12 2l1.8 5.6L19.5 9l-5.7 1.6L12 16l-1.8-5.4L4.5 9l5.7-1.4zM19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/>',
 car:'<path fill="currentColor" d="M5 11 6.5 6.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2zm2.1 0h9.8l-1-3.2a1 1 0 0 0-1-.8H9.1a1 1 0 0 0-1 .8zM6.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>',
 shield:'<path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5zm-1.5 14L7 12.5l1.4-1.4 2.1 2.1 5.1-5.1L17 9.5z"/>',
 clock:'<path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.5 2.1-1 1.7L11 13V7h2z"/>',
 people:'<path fill="currentColor" d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9 13c-3.3 0-7 1.7-7 4v3h14v-3c0-2.3-3.7-4-7-4zm7 0c-.5 0-1 0-1.5.1 1.5 1 2.5 2.3 2.5 3.9v3h5v-3c0-2.3-3.1-4-6-4z"/>',
 pin:'<path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>'
};
function ic(n,c){return '<svg class="'+(c||'i')+'" viewBox="0 0 24 24" aria-hidden="true">'+I[n]+'</svg>';}

var T={
roofing:{label:"Roofing",name:"Northpine",sub:"Roofing & Gutters",logo:"home",accent:"#c8642b",
 h1:'Roof leak? <span>We\'ll be on it this week.</span>',lede:"Repairs, full replacements and gutters for Treasure Valley homes. Free inspection with a photo report of every problem we find.",
 checks:["Licensed & insured","10-year workmanship warranty","Insurance claim help"],
 stats:[["18 years","roofing in the valley"],["2,400+","roofs repaired or replaced"],["48 hrs","typical wait for an inspection"],["10 yr","workmanship warranty"]],
 need:["Leak or repair","Full roof replacement","Storm or hail damage","Gutters","Free inspection"],
 svc:[["drop","Leak repair","We trace the leak to its source, not just the stain, and fix it the same week.","Flashing, vents, valleys, chimneys",["Source tracing with moisture meter","Flashing and boot replacement","Interior stain check after repair"],"Free quote"],
  ["home","Roof replacement","Tear-off to final cleanup, usually done in one to two days.","30-year architectural shingles \u00b7 ice & water shield",["Full tear-off and deck inspection","Synthetic underlayment","Magnet sweep for nails"],"Free written quote"],
  ["storm","Storm & hail damage","We document the damage and walk you through the insurance claim.","Class 4 impact-rated shingles available",["Photo documentation","Meet your adjuster on site","Emergency tarping"],"Free storm inspection"],
  ["tool","Shingle repair","Missing or lifted shingles matched and replaced before they become a leak.","Color-matched to your existing roof",["Wind damage repair","Ridge cap replacement","Sealant and nail pops"],"Free quote"],
  ["drop","Gutters","Seamless gutters, guards and downspouts that move water away from your foundation.",'5" and 6" seamless aluminum',["Seamless gutter install","Gutter guards","Downspout extensions"],"Free quote"],
  ["clip","Free inspection","A 20-point check with photos of every issue, emailed to you the same day.","Great before buying or selling a home",["20-point checklist","Photo report by email","No obligation"],"Free"]],
 steps:[["Call or request a quote","Tell us what's going on. We book your free inspection, usually within 48 hours."],["Get your photo report","We send photos of every problem and a fixed written price. No pressure to decide."],["We fix it and clean up","Our own crew does the work, then runs a magnet sweep for nails before we leave."]],
 faq:[["Is the inspection really free?","Yes. We inspect, take photos and send a written report. You only pay if you go ahead."],["How long does a replacement take?","Most homes take one to two days, depending on size, pitch and weather."],["Do you work with insurance?","Yes. We document storm and hail damage with photos and can meet your adjuster."],["What warranty do I get?","A 10-year workmanship warranty from us, plus the shingle manufacturer's warranty."]],
 rev:[["They found the leak two other companies missed. Fixed in one visit and sent photos of everything.","Meridian"],["New roof done in a day and a half. The yard was cleaner when they left than when they arrived.","Boise"],["After the hail storm they handled the photos for our insurance claim. Made it easy.","Nampa"],["Showed up when they said they would and the price didn't change. That's rare.","Eagle"],["Replaced our gutters and fixed two soft spots on the roof in the same visit.","Kuna"],["Honest advice. They told us a repair would do instead of selling us a whole roof.","Caldwell"]],
 story:"Northpine started with one truck and a ladder. Eighteen years later we're still owner-run, and the owner still walks every roof before we quote it.",urgent:"Storm just hit?",urgentText:"Call any time. We'll tarp active leaks to stop more damage while you sort out the claim."},
plumbing:{label:"Plumbing",name:"Clearline",sub:"Plumbing & Drain",logo:"drop",accent:"#1f7fb8",
 h1:'Leak, clog or no hot water? <span>A plumber today.</span>',lede:"Same-day plumbing repairs for Treasure Valley homes. Upfront prices before we start, and we clean up after.",
 checks:["Licensed master plumber","Upfront flat-rate pricing","Same-day service"],
 stats:[["15 years","plumbing in the valley"],["9,000+","repairs completed"],["Same day","for most service calls"],["1 yr","warranty on all repairs"]],
 need:["Leak repair","Clogged drain","Water heater","Toilet or faucet","Sewer line"],
 svc:[["drop","Leak repair","Dripping pipes, slab leaks and burst lines found and fixed fast.","Electronic leak detection",["Pipe and fitting repair","Slab leak detection","Shut-off valve replacement"],"Free quote"],
  ["tool","Drain cleaning","Kitchen, bath and main-line clogs cleared without damaging your pipes.","Camera inspection available",["Snaking and hydro-jetting","Camera inspection","Root removal"],"Free quote"],
  ["flame","Water heaters","Repair or replace tank and tankless water heaters, often same day.","40\u201350 gal tank \u00b7 tankless",["Same-day replacement","Tankless conversions","Flush and maintenance"],"Free install quote"],
  ["home","Toilets & faucets","Running toilets, leaky faucets and new fixtures installed right.","Most fixture brands",["Toilet repair and install","Faucet replacement","Garbage disposals"],"Free quote"],
  ["clip","Sewer lines","Camera inspection and repair for backups and broken lines.","Trenchless options",["Camera inspection","Spot repairs","Trenchless replacement"],"Free estimate"],
  ["shield","Repipes & remodels","Whole-home repipes and plumbing for kitchen and bath remodels.","PEX and copper",["Whole-home repipe","Remodel rough-in","Permits handled"],"Free written quote"]],
 steps:[["Call or book online","Tell us the problem. Most calls get a plumber the same day."],["Get your price first","We diagnose and give a flat price before any work starts."],["Fixed and cleaned up","We protect your floors, fix it right and haul away old parts."]],
 faq:[["Do you charge a trip fee?","Our service call fee is waived if you go ahead with the repair."],["Do you work weekends?","Yes, and we keep a plumber on call for emergencies."],["Will I know the price first?","Always. You approve a flat price before we start."],["Are you licensed?","Yes. Licensed master plumber, fully insured."]],
 rev:[["Water heater died on a Sunday and they had a new one in by afternoon.","Meridian"],["Gave me the price before starting and it didn't change. Very clean work.","Boise"],["Cleared a main line clog other guys couldn't and showed me the camera footage.","Nampa"],["Fast, polite and fair. Fixed a slab leak without tearing up the whole floor.","Eagle"],["Replaced all our faucets in one visit. Great communication by text.","Star"],["Honest. Told me the toilet just needed a small part, not a new one.","Caldwell"]],
 story:"Clearline is a family-run plumbing company. The owner is a licensed master plumber who still takes service calls himself.",urgent:"Burst pipe or flooding?",urgentText:"Turn off the main water valve and call us now. We keep a plumber on call for emergencies."},
hvac:{label:"Heating & Air",name:"Coolpoint",sub:"Heating & Air",logo:"fan",accent:"#2b8a7e",
 h1:'No heat or no AC? <span>We fix it fast.</span>',lede:"Furnace, AC and heat pump repair and installs for Treasure Valley homes. Same-day service and honest options.",
 checks:["NATE-certified techs","Financing available","Same-day repairs"],
 stats:[["20 years","heating & cooling"],["6,500+","systems serviced"],["Same day","most repair calls"],["10 yr","parts warranty on installs"]],
 need:["AC repair","Furnace repair","New system","Maintenance tune-up","Heat pump"],
 svc:[["snow","AC repair","Warm air, strange noises or no cooling. We diagnose and fix most issues same day.","All major brands",["Refrigerant and leak checks","Capacitor and motor repair","Thermostat issues"],"Free quote"],
  ["flame","Furnace repair","Get the heat back on with fast, honest furnace repair.","Gas and electric",["Ignitor and flame sensor","Blower motors","Safety inspections"],"Free quote"],
  ["fan","Heat pumps","Efficient heating and cooling in one system, installed and serviced.","Ducted and ductless",["Heat pump install","Mini-split systems","Repair and service"],"Free install quote"],
  ["home","New systems","Right-sized AC and furnace installs with clear options at three price levels.","Load calculation included",["Good / better / best options","Financing available","Old unit removal"],"Free in-home quote"],
  ["clip","Tune-ups","Seasonal maintenance that prevents breakdowns and keeps bills down.","21-point check",["Spring AC tune-up","Fall furnace tune-up","Priority service plan"],"Free quote"],
  ["spark","Air quality","Filters, purifiers and humidifiers for cleaner, more comfortable air.","Whole-home systems",["Air purifiers","Humidifiers","Duct cleaning"],"Free assessment"]],
 steps:[["Call or book online","Tell us what's happening. Most repairs are booked same day."],["Clear options","We explain the problem and give you repair or replace options with prices."],["Comfort restored","We fix it, test it and make sure you're comfortable before we leave."]],
 faq:[["Do you service all brands?","Yes, we repair and maintain all major brands."],["Do you offer financing?","Yes, financing is available on new systems."],["How often should I get a tune-up?","Once a year for AC and once for heating is ideal."],["Repair or replace?","We show you both options with prices so you can choose."]],
 rev:[["AC quit during a heat wave and they had it running the same evening.","Meridian"],["Gave us three options for a new furnace with no pressure at all.","Boise"],["Tech explained everything and showed me the worn part.","Nampa"],["Fair price on a heat pump and the house has never been more comfortable.","Eagle"],["Booked online at night, tech was here next morning.","Kuna"],["They repaired it when another company wanted to sell us a whole new unit.","Star"]],
 story:"Coolpoint is a local, owner-run heating and air company. We only hire certified techs and we never push a new system when a repair will do.",urgent:"No heat in winter?",urgentText:"Call us now. No-heat calls go to the top of the list."},
landscaping:{label:"Landscaping",name:"Greenway",sub:"Lawn & Landscape",logo:"leaf",accent:"#4a8a2e",
 h1:'A yard you\'re proud of. <span>Without the weekend work.</span>',lede:"Weekly mowing, cleanups, sprinklers and landscape installs for Treasure Valley homes.",
 checks:["Fully insured crews","Weekly or one-time service","Free estimates"],
 stats:[["12 years","caring for local yards"],["600+","weekly lawn clients"],["7 days","to start most installs"],["100%","satisfaction guarantee"]],
 need:["Weekly mowing","Spring/fall cleanup","Sprinkler repair","Landscape install","Tree & shrub trimming"],
 svc:[["leaf","Weekly mowing","Mow, edge and blow every week so your lawn always looks sharp.","Same crew each visit",["Mow, edge, trim","Blow-off of walks","Seasonal scheduling"],"Free quote"],
  ["tree","Trimming & pruning","Shrubs and small trees shaped and kept healthy.","Hand-pruned",["Shrub shaping","Small tree pruning","Debris hauled away"],"Free estimate"],
  ["drop","Sprinklers","Repairs, start-ups and winterizations for your irrigation system.","All major systems",["Spring start-up","Head and valve repair","Fall blowout"],"Free quote"],
  ["home","Landscape installs","Rock, mulch, sod, plants and borders designed for Idaho's climate.","Water-wise designs",["Sod and seed","Rock and mulch beds","Planting plans"],"Free design consult"],
  ["storm","Seasonal cleanups","Leaves, debris and beds cleared for spring and fall.","One-time or yearly",["Leaf removal","Bed cleanup","Haul-away included"],"Free quote"],
  ["spark","Fertilizer & weed control","A green, thick lawn with fewer weeds all season.","6-step program",["Fertilizer program","Weed control","Aeration"],"Free lawn check"]],
 steps:[["Request an estimate","Tell us about your yard. We'll stop by and send a written price."],["Pick your plan","Weekly, monthly or one-time. No long contracts."],["Enjoy your yard","Same crew, same day each week, with photos after each visit if you want them."]],
 faq:[["Do I need a contract?","No. Weekly service is month to month."],["Do I need to be home?","No. Just make sure gates are unlocked."],["Do you haul away debris?","Yes, cleanup and haul-away are included."],["Do you work in rain?","Light rain yes; we reschedule for storms."]],
 rev:[["Our lawn has never looked this good and they're always on time.","Meridian"],["Same crew every week and they actually notice the details.","Boise"],["Fixed three sprinkler zones in one visit at a fair price.","Nampa"],["Turned our dirt backyard into something we actually use.","Eagle"],["Fall cleanup was fast and they hauled everything away.","Kuna"],["Easy to book, easy to pay, great results.","Star"]],
 story:"Greenway started as a two-person mowing crew. Today we care for hundreds of local yards and the owner still checks in on crews every week.",urgent:"Sprinkler leak?",urgentText:"Turn off the system at the controller and call us. We prioritize leaks."},
cleaning:{label:"House Cleaning",name:"Brightside",sub:"Home Cleaning",logo:"spark",accent:"#8a4fb0",
 h1:'Come home to a clean house. <span>Every time.</span>',lede:"Recurring, deep and move-out cleaning by background-checked teams. Easy online booking.",
 checks:["Background-checked cleaners","Supplies included","24-hour re-clean guarantee"],
 stats:[["9 years","cleaning local homes"],["1,200+","homes cleaned each month"],["24 hr","re-clean guarantee"],["5 min","to book online"]],
 need:["Recurring cleaning","Deep clean","Move-in / move-out","Office cleaning","One-time clean"],
 svc:[["spark","Recurring cleaning","Weekly, every other week or monthly. Same team, same checklist.","Supplies included",["Kitchens and baths","Dusting and floors","Beds and tidying"],"Free quote"],
  ["home","Deep cleaning","Top-to-bottom detail clean for homes that need extra attention.","Baseboards to ceiling fans",["Inside appliances","Baseboards and doors","Cabinet fronts"],"Free quote"],
  ["clip","Move-in / move-out","Get your deposit back or start fresh in a spotless home.","Inside cabinets & appliances",["Inside cabinets","Appliances","Walls spot-cleaned"],"Free quote"],
  ["people","Office cleaning","After-hours cleaning for small offices and shops.","Flexible scheduling",["Desks and common areas","Restrooms","Trash and floors"],"Free quote"],
  ["spark","Add-ons","Windows, fridge, oven, laundry and more.","Add to any visit",["Inside fridge and oven","Interior windows","Laundry folding"],"Free quote"],
  ["shield","Satisfaction guarantee","Missed a spot? We come back within 24 hours and fix it free.","No questions asked",["24-hour re-clean","Same team","Easy feedback"],"Included"]],
 steps:[["Book online or call","Pick a date and time. Get your price instantly."],["We clean","Background-checked team arrives with all supplies."],["Relax","Not perfect? We come back within 24 hours."]],
 faq:[["Do I need to be home?","No. Many clients give us a code or key."],["Do you bring supplies?","Yes, all supplies and equipment are included."],["Are cleaners vetted?","Yes, every cleaner is background-checked and insured."],["Can I skip a week?","Yes, just give us 48 hours notice."]],
 rev:[["Same team every time and they remember how we like things.","Meridian"],["Move-out clean got our full deposit back.","Boise"],["Booked online in two minutes. House looked amazing.","Nampa"],["They came back the next day to redo one bathroom with no fuss.","Eagle"],["Reliable and friendly. Worth every penny.","Kuna"],["Deep clean before the holidays was a lifesaver.","Star"]],
 story:"Brightside is a locally owned cleaning company. We pay our teams well, train them in-house and keep the same cleaners with the same homes.",urgent:"Moving this week?",urgentText:"Call us. We hold same-week slots for move-out cleans."},
detailing:{label:"Mobile Detailing",name:"Gloss",sub:"Mobile Detailing",logo:"car",accent:"#b8862b",
 h1:'Showroom shine. <span>In your driveway.</span>',lede:"Mobile car detailing at your home or office. Interior, exterior and ceramic coating.",
 checks:["We bring water & power","Fully insured","Satisfaction guaranteed"],
 stats:[["7 years","detailing locally"],["5,000+","vehicles detailed"],["2\u20134 hrs","most full details"],["5 yr","ceramic coating protection"]],
 need:["Full detail","Interior only","Exterior wash & wax","Ceramic coating","Fleet / business"],
 svc:[["car","Full detail","Inside and out, done at your home or office.","Most cars 3\u20134 hours",["Hand wash and clay bar","Interior shampoo","Tires and trim"],"Free quote"],
  ["spark","Interior detail","Seats, carpets and every surface deep-cleaned and protected.","Pet hair removal",["Shampoo and extraction","Leather clean and condition","Odor treatment"],"Free quote"],
  ["drop","Exterior wash & wax","Hand wash, decontamination and wax for a deep shine.","Hand wash only",["Foam pre-wash","Clay bar","Paste wax"],"Free quote"],
  ["shield","Ceramic coating","Long-lasting protection that keeps your paint glossy and easy to clean.","Up to 5 years",["Paint correction","Ceramic application","Glass coating"],"Free quote"],
  ["tool","Paint correction","Swirls and light scratches removed for a mirror finish.","1- and 2-step options",["Swirl removal","Scratch reduction","Headlight restoration"],"Free quote"],
  ["people","Fleet & business","Regular detailing for work trucks and company vehicles.","On-site at your lot",["Scheduled service","Volume pricing","Invoicing"],"Custom quote"]],
 steps:[["Book your time","Pick a package and a time. We come to you."],["We set up and detail","We bring our own water and power. You don't lift a finger."],["Drive away proud","Walk-around inspection before we leave."]],
 faq:[["Do you need my water or power?","No, we bring both."],["How long does it take?","Most full details take 3\u20134 hours."],["Do you do pet hair?","Yes, pet hair removal is available on any interior."],["What if it rains?","We reschedule at no charge."]],
 rev:[["Car looks better than when I bought it. Done in my driveway.","Meridian"],["Got all the dog hair out of my SUV. Amazing.","Boise"],["Ceramic coating still beads water months later.","Nampa"],["Detailed my truck while I worked. So convenient.","Eagle"],["On time, professional and the price was fair.","Kuna"],["Headlights look brand new.","Star"]],
 story:"Gloss is owner-operated. Every detail is done by trained detailers using pro-grade products, and the owner checks quality on every job.",urgent:"Selling your car?",urgentText:"A full detail can add real value. Ask about our pre-sale package."}
};
var ORDER=["roofing","plumbing","hvac","landscaping","cleaning","detailing"];
var PAGES=[["index.html","Home","home"],["services.html","Services","services"],["about.html","About","about"],["areas.html","Service Areas","areas"],["reviews.html","Reviews","reviews"],["contact.html","Contact","contact"]];

function getTrade(){
  var h=(location.hash||"").replace("#","");
  if(T[h]) return h;
  try{var s=localStorage.getItem("demoTrade"); if(T[s]) return s;}catch(e){}
  return "roofing";
}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");}

function header(t,k,page){
  var opts=ORDER.map(function(x){return '<option value="'+x+'"'+(x===k?' selected':'')+'>'+T[x].label+'</option>';}).join("");
  var nav=PAGES.map(function(p){return '<a href="'+p[0]+'#'+k+'"'+(p[2]===page?' aria-current="page"':'')+'>'+p[1]+'</a>';}).join("");
  return '<div class="demo"><div class="wrap"><span>Sample website by <b>Karan</b> \u00b7 fictional business</span>'+
   '<label for="tradeSel">See it for:</label><select id="tradeSel">'+opts+'</select></div></div>'+
   '<header class="top"><div class="wrap"><a class="brand" href="index.html#'+k+'">'+ic(t.logo,'')+'<span class="brand-name">'+t.name+'<small>'+t.sub+'</small></span></a>'+
   '<nav class="main" id="nav" aria-label="Main">'+nav+'</nav>'+
   '<div class="top-call"><span class="num">'+PHONE+'</span><a class="btn btn-call" href="'+TEL+'">'+ic('phone')+'Call now</a><button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav">Menu</button></div></div></header>';
}
var SKY='<svg class="sky" viewBox="0 0 1200 140" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 140V90l90-55 90 55V66l70-42 70 42v24l110-70 110 70V56l80-46 80 46v34l100-64 100 64V76l85-50 85 50v64z"/></svg>';
function pageHero(t,k,title,text,crumb){
  return '<section class="hero hero-page">'+SKY+'<div class="wrap"><span class="crumbs"><a href="index.html#'+k+'">Home</a> / '+crumb+'</span><h1>'+title+'</h1><p>'+text+'</p></div></section>';
}
function quoteForm(t,id,title){
  var o=t.need.map(function(n){return '<option>'+esc(n)+'</option>';}).join("");
  return '<form class="quote" id="'+id+'" novalidate><h2>'+title+'</h2><p class="sub">Takes 30 seconds. We reply the same business day.</p>'+
  '<div class="fields"><div class="row2"><div class="field"><label for="'+id+'-name">Name</label><input id="'+id+'-name" autocomplete="name" placeholder="Jamie Carter"></div>'+
  '<div class="field"><label for="'+id+'-phone">Phone</label><input id="'+id+'-phone" type="tel" autocomplete="tel" placeholder="(208) 555-0199"></div></div>'+
  '<div class="field"><label for="'+id+'-type">What do you need?</label><select id="'+id+'-type">'+o+'</select></div>'+
  '<div class="field"><label for="'+id+'-zip">ZIP code</label><input id="'+id+'-zip" inputmode="numeric" placeholder="83642"></div>'+
  '<div class="field"><label for="'+id+'-msg">Details (optional)</label><textarea id="'+id+'-msg" rows="2"></textarea></div>'+
  '<button class="btn btn-call" type="submit">Send my request</button><p class="fine">No spam. No obligation. We never share your number.</p></div>'+
  '<div class="sent" hidden><strong>Request received</strong>On a live site this goes straight to the owner\'s email and phone, so they can call you back fast.</div></form>';
}
function svcCards(t,n){return '<div class="grid3">'+t.svc.slice(0,n).map(function(s){return '<article class="card"><div class="ico">'+ic(s[0],'')+'</div><h3>'+s[1]+'</h3><p>'+s[2]+'</p><p class="spec">'+s[3]+'</p></article>';}).join("")+'</div>';}
function steps(t){return '<ol class="steps">'+t.steps.map(function(s){return '<li><h3>'+s[0]+'</h3><p>'+s[1]+'</p></li>';}).join("")+'</ol>';}
function revCards(t,n){return '<div class="grid3">'+t.rev.slice(0,n).map(function(r){return '<figure class="card rev"><span class="stars" aria-label="5 stars">\u2605\u2605\u2605\u2605\u2605</span><blockquote>'+r[0]+'</blockquote><figcaption><b>Sample review</b> \u00b7 '+r[1]+'</figcaption></figure>';}).join("")+'</div><p class="tag">On your site, this section shows your real Google reviews.</p>';}
function faq(t){return '<div class="faq">'+t.faq.map(function(f){return '<details><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>';}).join("")+'</div>';}
function finalBand(t,k){return '<section class="final"><div class="wrap"><div><h2>Ready when you are</h2><p class="num">'+PHONE+'</p></div><a class="btn" href="contact.html#'+k+'">Get a free quote</a></div></section>';}
function footer(t,k){
  var svc=t.svc.map(function(s){return '<li><a href="services.html#'+k+'">'+s[1]+'</a></li>';}).join("");
  var pg=PAGES.map(function(p){return '<li><a href="'+p[0]+'#'+k+'">'+p[1]+'</a></li>';}).join("");
  return '<footer><div class="wrap"><div><h4>'+t.name+' '+t.sub+'</h4><p>'+t.story+'</p><p style="margin-top:12px"><b>'+PHONE+'</b><br>'+CITY+' \u00b7 Mon\u2013Sat 7am\u20136pm</p></div><div><h4>Services</h4><ul>'+svc+'</ul></div><div><h4>Pages</h4><ul>'+pg+'</ul></div></div>'+
  '<div class="legal"><div class="wrap"><span>\u00a9 2026 '+t.name+' '+t.sub+' \u00b7 Fictional demo business</span><span>Website design by Karan</span></div></div></footer>'+
  '<div class="callbar"><a class="btn btn-call" href="'+TEL+'">'+ic('phone')+'Call</a><a class="btn btn-dark" href="contact.html#'+k+'">Free quote</a></div>';
}

function body(t,k,page){
  if(page==="home"){
    var checks=t.checks.map(function(c){return '<li>'+ic('check')+esc(c)+'</li>';}).join("");
    var stats=t.stats.map(function(s){return '<div><b>'+s[0]+'</b><span>'+s[1]+'</span></div>';}).join("");
    return '<section class="hero hero-home">'+SKY+'<div class="wrap"><div class="hero-copy"><span class="eyebrow">Boise \u00b7 Meridian \u00b7 Nampa</span><h1>'+t.h1+'</h1><p class="lede">'+t.lede+'</p>'+
     '<div class="ctas"><a class="btn btn-call" href="'+TEL+'">'+ic('phone')+PHONE+'</a><a class="btn btn-ghost" href="#q">Get a free quote</a></div>'+
     '<div class="rating"><span class="stars" aria-hidden="true">\u2605\u2605\u2605\u2605\u2605</span><span><b>4.9</b> from 212 Google reviews</span></div><ul class="checks">'+checks+'</ul></div>'+
     '<div id="q">'+quoteForm(t,'qh','Free quote')+'</div></div></section>'+
     '<div class="trust"><div class="wrap">'+stats+'</div></div>'+
     '<section class="block"><div class="wrap"><div class="head-row"><div class="head"><span class="eyebrow">Services</span><h2>What we do</h2><p>Every job starts with a clear, written price.</p></div><a class="more" href="services.html#'+k+'">All services \u2192</a></div>'+svcCards(t,6)+'</div></section>'+
     '<section class="block dark"><div class="wrap"><div class="head"><span class="eyebrow">How it works</span><h2>Simple from start to finish</h2><p>No pressure and no surprise charges.</p></div>'+steps(t)+'</div></section>'+
     '<section class="block"><div class="wrap"><div class="head-row"><div class="head"><span class="eyebrow">Reviews</span><h2>What customers say</h2></div><a class="more" href="reviews.html#'+k+'">All reviews \u2192</a></div>'+revCards(t,3)+'</div></section>'+
     '<section class="block tight"><div class="wrap split"><div class="head" style="margin:0"><span class="eyebrow">Questions</span><h2>Common questions</h2><p>Can\'t find your answer? Call '+PHONE+'.</p></div>'+faq(t)+'</div></section>';
  }
  if(page==="services"){
    var rows=t.svc.map(function(s){return '<article class="svc-row"><div class="ico">'+ic(s[0],'')+'</div><div><h3>'+s[1]+'</h3><p>'+s[2]+'</p><ul>'+s[4].map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul></div>'+
      '<aside><span class="eyebrow">Good to know</span><span style="color:var(--muted)">'+s[3]+'</span><a class="btn btn-call" href="contact.html#'+k+'">Get a free quote</a></aside></article>';}).join("");
    return pageHero(t,k,'Our services','Everything we offer and what\'s included. Every job gets a free written quote before work begins.','Services')+
     '<section class="block"><div class="wrap"><div class="svc-list">'+rows+'</div></div></section>'+
     '<section class="block dark"><div class="wrap"><div class="head"><span class="eyebrow">How it works</span><h2>What to expect</h2></div>'+steps(t)+'</div></section>';
  }
  if(page==="about"){
    var vals=[["shield","Licensed & insured","Fully licensed and insured, so you're protected on every job."],["clock","On time, every time","We show up when we say we will, and text you when we're on the way."],["people","Owner on every job","The owner reviews every quote and checks the finished work."]];
    return pageHero(t,k,'About '+t.name,'A local, owner-run business serving the Treasure Valley.','About')+
     '<section class="block"><div class="wrap split"><div class="prose"><span class="eyebrow">Our story</span><h2>Local, owner-run, and proud of it</h2><p>'+t.story+'</p><p>We\'re not a national chain or a call center. When you call, you reach our team here in '+CITY+', and the people who quote your job are the people who do it.</p><p>Most of our work comes from neighbors recommending us, and we work hard to keep it that way.</p></div>'+
     '<dl class="facts"><div><dt>Owner</dt><dd>Local, on every job</dd></div><div><dt>Years in business</dt><dd>'+t.stats[0][0]+'</dd></div><div><dt>Licensed</dt><dd>Yes \u00b7 Lic. #DEMO-0000</dd></div><div><dt>Insured</dt><dd>$2M general liability</dd></div><div><dt>Rating</dt><dd>4.9 \u2605 (212 reviews)</dd></div><div><dt>Based in</dt><dd>'+CITY+'</dd></div></dl></div></section>'+
     '<section class="block tight"><div class="wrap"><div class="head"><span class="eyebrow">What we stand for</span><h2>How we work</h2></div><div class="values">'+vals.map(function(v){return '<article class="card"><div class="ico">'+ic(v[0],'')+'</div><h3>'+v[1]+'</h3><p>'+v[2]+'</p></article>';}).join("")+'</div></div></section>';
  }
  if(page==="areas"){
    return pageHero(t,k,'Service areas','We serve homes and businesses across the '+REGION+' area, within about 30 miles of '+CITY.split(",")[0]+'.','Service Areas')+
     '<section class="block"><div class="wrap"><div class="head"><span class="eyebrow">Where we work</span><h2>Towns we serve</h2><p>Don\'t see your town? Call '+PHONE+' and ask. We often go farther.</p></div>'+
     '<ul class="towns">'+TOWNS.map(function(x){return '<li><b>'+ic('pin')+' '+x[0]+'</b><span>'+x[1]+'</span></li>';}).join("")+'</ul></div></section>'+
     '<section class="block tight"><div class="wrap split"><div class="note"><h3>'+t.urgent+'</h3><p>'+t.urgentText+'</p><a class="btn btn-call" href="'+TEL+'" style="align-self:start">'+ic('phone')+PHONE+'</a></div>'+
     '<div class="note"><h3>Same crew, every town</h3><p>Whether you\'re in Boise or Caldwell, you get the same team, the same pricing and the same guarantee.</p></div></div></section>';
  }
  if(page==="reviews"){
    return pageHero(t,k,'Customer reviews','What homeowners across the valley say about working with us.','Reviews')+
     '<section class="block"><div class="wrap"><div class="score"><span class="big">4.9</span><div><span class="stars">\u2605\u2605\u2605\u2605\u2605</span><p>Based on 212 Google reviews</p></div></div>'+revCards(t,6)+'</div></section>';
  }
  if(page==="contact"){
    return pageHero(t,k,'Get a free quote','Call, or send the form and we\'ll get back to you the same business day.','Contact')+
     '<section class="block"><div class="wrap contact"><div class="info"><div class="card"><span class="eyebrow">Call or text</span><b>'+PHONE+'</b><p>Fastest way to reach us.</p></div>'+
     '<div class="card"><span class="eyebrow">Hours</span><table class="hours"><tr><td>Mon\u2013Fri</td><td>7:00am \u2013 6:00pm</td></tr><tr><td>Saturday</td><td>8:00am \u2013 4:00pm</td></tr><tr><td>Sunday</td><td>Emergencies only</td></tr></table></div>'+
     '<div class="card"><span class="eyebrow">Office</span><p style="color:var(--ink)">'+CITY+' \u00b7 serving the whole '+REGION+' area</p></div></div>'+
     quoteForm(t,'qc','Request a quote')+'</div></section>'+
     '<section class="block tight"><div class="wrap"><div class="head"><span class="eyebrow">Questions</span><h2>Before you call</h2></div>'+faq(t)+'</div></section>';
  }
  return "";
}

function render(){
  var app=document.getElementById("app"); if(!app) return;
  var page=app.getAttribute("data-page")||"home", k=getTrade(), t=T[k];
  document.documentElement.style.setProperty("--accent",t.accent);
  var pname=(PAGES.filter(function(p){return p[2]===page;})[0]||PAGES[0])[1];
  document.title=t.name+" "+t.sub+(page==="home"?"":" \u00b7 "+pname);
  app.innerHTML=header(t,k,page)+'<main>'+body(t,k,page)+'</main>'+finalBand(t,k)+footer(t,k);
  var sel=document.getElementById("tradeSel");
  sel.addEventListener("change",function(){ try{localStorage.setItem("demoTrade",sel.value);}catch(e){} location.hash=sel.value; });
  var mb=document.getElementById("menuBtn"), nav=document.getElementById("nav");
  mb.addEventListener("click",function(){var o=nav.classList.toggle("open"); mb.setAttribute("aria-expanded",o?"true":"false");});
  Array.prototype.forEach.call(document.querySelectorAll("form.quote"),function(f){
    f.addEventListener("submit",function(e){
      e.preventDefault();
      var n=f.querySelector('input[autocomplete="name"]'), p=f.querySelector('input[type="tel"]');
      [n,p].forEach(function(x){x.classList.remove("bad");});
      var miss=[n,p].filter(function(x){return !x.value.trim();});
      if(miss.length){miss.forEach(function(x){x.classList.add("bad");}); miss[0].focus(); return;}
      f.querySelector(".fields").hidden=true; f.querySelector(".sent").hidden=false;
    });
  });
}
window.addEventListener("hashchange",function(){ var h=location.hash.replace("#",""); if(T[h]){ try{localStorage.setItem("demoTrade",h);}catch(e){} render(); window.scrollTo(0,0);} });
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",render); else render();
})();
