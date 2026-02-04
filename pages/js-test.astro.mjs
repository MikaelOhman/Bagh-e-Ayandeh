import { c as createComponent, r as renderHead, a as renderScript, b as renderTemplate } from '../chunks/astro/server_BZsy-8Q_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$JsTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-uy6d3iya> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>JS Test</title>${renderHead()}</head> <body data-astro-cid-uy6d3iya> <h1 data-astro-cid-uy6d3iya>JavaScript Test</h1> <div class="box" data-astro-cid-uy6d3iya> <h2 data-astro-cid-uy6d3iya>Test 1: Static HTML</h2> <p data-astro-cid-uy6d3iya>✓ If you see this, HTML works!</p> </div> <div class="box" data-astro-cid-uy6d3iya> <h2 data-astro-cid-uy6d3iya>Test 2: Inline JavaScript</h2> <p id="inline-test" data-astro-cid-uy6d3iya>❌ JavaScript not running</p> </div> <div class="box" data-astro-cid-uy6d3iya> <h2 data-astro-cid-uy6d3iya>Test 3: External Script (CDN)</h2> <p id="cdn-test" data-astro-cid-uy6d3iya>❌ CDN script not loaded</p> </div> <div class="box" data-astro-cid-uy6d3iya> <h2 data-astro-cid-uy6d3iya>Test 4: Console Output</h2> <p data-astro-cid-uy6d3iya>Open browser console (F12) to see logs</p> </div> ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/js-test.astro?astro&type=script&index=0&lang.ts")} <!-- Test 3: External CDN script --> ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/js-test.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/js-test.astro?astro&type=script&index=2&lang.ts")} ${renderScript($$result, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/js-test.astro?astro&type=script&index=3&lang.ts")} </body> </html>`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/js-test.astro", void 0);

const $$file = "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/js-test.astro";
const $$url = "/Bagh-e-Ayandeh/js-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JsTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
