import { c as createComponent, r as renderHead, a as renderScript, b as renderTemplate } from '../chunks/astro/server_BZsy-8Q_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$MapTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-cwlltfvy> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Map Test - Iran</title><!-- Leaflet CSS --><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">${renderHead()}</head> <body data-astro-cid-cwlltfvy> <div id="map" data-astro-cid-cwlltfvy></div> <!-- Leaflet JS --> ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test.astro", void 0);

const $$file = "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test.astro";
const $$url = "/Bagh-e-Ayandeh/map-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MapTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
