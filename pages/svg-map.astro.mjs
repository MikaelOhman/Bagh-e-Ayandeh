import { c as createComponent, r as renderHead, a as renderScript, b as renderTemplate } from '../chunks/astro/server_BZsy-8Q_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$SvgMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-omtuvikh> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Iran Interactive Map</title>${renderHead()}</head> <body data-astro-cid-omtuvikh> <div class="container" data-astro-cid-omtuvikh> <h1 data-astro-cid-omtuvikh>🌱 باغ آینده - Bagh-e Ayandeh</h1> <p class="subtitle" data-astro-cid-omtuvikh>Click on any city to explore</p> <div id="map-container" data-astro-cid-omtuvikh> <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" data-astro-cid-omtuvikh> <!-- Iran country outline (simplified) --> <path class="country-outline" d="
          M 100,250 
          L 150,180 L 200,150 L 280,140 L 350,130 L 420,140 L 480,160 
          L 540,190 L 590,230 L 640,280 L 680,340 L 700,400 
          L 690,460 L 660,500 L 610,530 L 540,550 L 460,560 
          L 380,555 L 300,540 L 230,510 L 170,470 L 130,420 
          L 100,360 L 90,300 Z
        " data-astro-cid-omtuvikh></path> <!-- Cities --> <!-- Shiraz - Available --> <g class="city-marker" data-city="shiraz" data-available="true" data-astro-cid-omtuvikh> <circle class="city-circle city-circle-available" cx="380" cy="450" r="15" data-astro-cid-omtuvikh></circle> <text class="city-label" x="380" y="480" data-astro-cid-omtuvikh>Shiraz شیراز</text> </g> <!-- Tehran - Coming Soon --> <g class="city-marker" data-city="tehran" data-available="false" data-astro-cid-omtuvikh> <circle class="city-circle city-circle-soon" cx="390" cy="260" r="12" data-astro-cid-omtuvikh></circle> <text class="city-label" x="390" y="285" data-astro-cid-omtuvikh>Tehran تهران</text> </g> <!-- Isfahan - Coming Soon --> <g class="city-marker" data-city="isfahan" data-available="false" data-astro-cid-omtuvikh> <circle class="city-circle city-circle-soon" cx="410" cy="340" r="12" data-astro-cid-omtuvikh></circle> <text class="city-label" x="410" y="365" data-astro-cid-omtuvikh>Isfahan اصفهان</text> </g> <!-- Tabriz - Coming Soon --> <g class="city-marker" data-city="tabriz" data-available="false" data-astro-cid-omtuvikh> <circle class="city-circle city-circle-soon" cx="300" cy="190" r="12" data-astro-cid-omtuvikh></circle> <text class="city-label" x="300" y="215" data-astro-cid-omtuvikh>Tabriz تبریز</text> </g> <!-- Mashhad - Coming Soon --> <g class="city-marker" data-city="mashhad" data-available="false" data-astro-cid-omtuvikh> <circle class="city-circle city-circle-soon" cx="570" cy="250" r="12" data-astro-cid-omtuvikh></circle> <text class="city-label" x="570" y="275" data-astro-cid-omtuvikh>Mashhad مشهد</text> </g> </svg> </div> <div class="legend" data-astro-cid-omtuvikh> <div class="legend-item" data-astro-cid-omtuvikh> <div class="legend-circle legend-available" data-astro-cid-omtuvikh></div> <span data-astro-cid-omtuvikh>Available now</span> </div> <div class="legend-item" data-astro-cid-omtuvikh> <div class="legend-circle legend-soon" data-astro-cid-omtuvikh></div> <span data-astro-cid-omtuvikh>Coming soon</span> </div> </div> </div> <div id="info-popup" class="info-popup" data-astro-cid-omtuvikh></div> ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/svg-map.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/svg-map.astro", void 0);

const $$file = "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/svg-map.astro";
const $$url = "/Bagh-e-Ayandeh/svg-map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SvgMap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
