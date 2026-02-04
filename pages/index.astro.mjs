import { c as createComponent, r as renderHead, a as renderScript, b as renderTemplate } from '../chunks/astro/server_BZsy-8Q_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>باغ آینده - Bagh-e Ayandeh</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>🌱 باغ آینده - Bagh-e Ayandeh</h1> <p class="subtitle" data-astro-cid-j7pv25f6>Click on any city to explore</p> <div id="map-container" data-astro-cid-j7pv25f6> <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <!-- Iran country outline (more realistic shape) --> <path class="country-outline" d="
          M 50,320
          L 60,280 L 80,250 L 110,220 L 150,195 L 200,180
          L 250,170 L 300,165 L 350,160 L 400,162 L 450,168
          L 500,178 L 540,192 L 575,210 L 610,235 L 640,265
          L 665,295 L 685,330 L 700,365 L 710,400 L 715,435
          L 710,470 L 695,500 L 670,525 L 635,545 L 590,560
          L 540,568 L 485,570 L 430,565 L 380,555 L 330,540
          L 285,520 L 245,495 L 210,470 L 180,440 L 155,410
          L 135,380 L 120,350 L 110,330 L 100,315
          L 80,310 L 65,315
          Z
        " data-astro-cid-j7pv25f6></path> <!-- Cities with more accurate positions --> <!-- Shiraz - Available (south-central) --> <g class="city-marker" data-city="shiraz" data-available="true" data-astro-cid-j7pv25f6> <circle class="city-circle city-circle-available" cx="400" cy="470" r="15" data-astro-cid-j7pv25f6></circle> <text class="city-label" x="400" y="500" data-astro-cid-j7pv25f6>Shiraz شیراز</text> </g> <!-- Tehran - Coming Soon (north-central) --> <g class="city-marker" data-city="tehran" data-available="false" data-astro-cid-j7pv25f6> <circle class="city-circle city-circle-soon" cx="380" cy="240" r="12" data-astro-cid-j7pv25f6></circle> <text class="city-label" x="380" y="265" data-astro-cid-j7pv25f6>Tehran تهران</text> </g> <!-- Isfahan - Coming Soon (central) --> <g class="city-marker" data-city="isfahan" data-available="false" data-astro-cid-j7pv25f6> <circle class="city-circle city-circle-soon" cx="390" cy="350" r="12" data-astro-cid-j7pv25f6></circle> <text class="city-label" x="390" y="375" data-astro-cid-j7pv25f6>Isfahan اصفهان</text> </g> <!-- Tabriz - Coming Soon (northwest) --> <g class="city-marker" data-city="tabriz" data-available="false" data-astro-cid-j7pv25f6> <circle class="city-circle city-circle-soon" cx="280" cy="200" r="12" data-astro-cid-j7pv25f6></circle> <text class="city-label" x="280" y="225" data-astro-cid-j7pv25f6>Tabriz تبریز</text> </g> <!-- Mashhad - Coming Soon (northeast) --> <g class="city-marker" data-city="mashhad" data-available="false" data-astro-cid-j7pv25f6> <circle class="city-circle city-circle-soon" cx="560" cy="250" r="12" data-astro-cid-j7pv25f6></circle> <text class="city-label" x="560" y="275" data-astro-cid-j7pv25f6>Mashhad مشهد</text> </g> </svg> </div> <div class="legend" data-astro-cid-j7pv25f6> <div class="legend-item" data-astro-cid-j7pv25f6> <div class="legend-circle legend-available" data-astro-cid-j7pv25f6></div> <span data-astro-cid-j7pv25f6>Available now</span> </div> <div class="legend-item" data-astro-cid-j7pv25f6> <div class="legend-circle legend-soon" data-astro-cid-j7pv25f6></div> <span data-astro-cid-j7pv25f6>Coming soon</span> </div> </div> </div> ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/index.astro", void 0);

const $$file = "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/index.astro";
const $$url = "/Bagh-e-Ayandeh";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
