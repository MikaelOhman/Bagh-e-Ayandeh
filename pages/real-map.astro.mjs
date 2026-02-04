import { c as createComponent, r as renderHead, a as renderScript, b as renderTemplate } from '../chunks/astro/server_BZsy-8Q_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$RealMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-exmoljo7> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Real Iran Map - Leaflet Local</title><!-- Local Leaflet CSS --><link rel="stylesheet" href="/Bagh-e-Ayandeh/leaflet/leaflet.css">${renderHead()}</head> <body data-astro-cid-exmoljo7> <div id="map" data-astro-cid-exmoljo7></div> <!-- Local Leaflet JS --> ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/real-map.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/real-map.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/real-map.astro", void 0);

const $$file = "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/real-map.astro";
const $$url = "/Bagh-e-Ayandeh/real-map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RealMap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
