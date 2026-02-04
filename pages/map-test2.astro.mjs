import { c as createComponent, r as renderHead, a as renderScript, b as renderTemplate } from '../chunks/astro/server_BZsy-8Q_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$MapTest2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-wvyklmdv> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Map Test 2 - Mapbox</title><!-- Mapbox GL CSS --><link href="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-wvyklmdv> <div id="map" data-astro-cid-wvyklmdv></div> <!-- Mapbox GL JS --> ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test2.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test2.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test2.astro", void 0);

const $$file = "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/map-test2.astro";
const $$url = "/Bagh-e-Ayandeh/map-test2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MapTest2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
