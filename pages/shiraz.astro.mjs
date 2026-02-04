import { d as createAstro, c as createComponent, e as addAttribute, r as renderHead, f as renderSlot, b as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BZsy-8Q_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mikaelohman.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "A vision of hope for a free Iran", lang = "fa" } = Astro2.props;
  const isRTL = lang === "fa";
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(isRTL ? "rtl" : "ltr", "dir")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gradient-to-br from-persian-green-50 via-persian-turquoise-50 to-persian-gold-50"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Shiraz = createComponent(($$result, $$props, $$slots) => {
  const content = {
    fa: {
      title: "\u0634\u06CC\u0631\u0627\u0632",
      subtitle: "\u0634\u0647\u0631 \u0628\u0627\u063A\u200C\u0647\u0627\u060C \u0634\u0639\u0631 \u0648 \u0641\u0631\u0647\u0646\u06AF",
      intro: "\u0634\u06CC\u0631\u0627\u0632\u060C \u0632\u0627\u062F\u06AF\u0627\u0647 \u062D\u0627\u0641\u0638 \u0648 \u0633\u0639\u062F\u06CC\u060C \u0634\u0647\u0631 \u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0648 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F. \u0627\u06CC\u0646\u062C\u0627 \u0627\u0632 \u0634\u06CC\u0631\u0627\u0632 \u0634\u0631\u0648\u0639 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645 - \u0634\u0647\u0631\u06CC \u06A9\u0647 \u0641\u0631\u0647\u0646\u06AF \u063A\u0646\u06CC \u062F\u0627\u0631\u062F \u0627\u0645\u0627 \u0628\u0627 \u0686\u0627\u0644\u0634\u200C\u0647\u0627\u06CC \u0622\u0628 \u0648 \u0647\u0648\u0627\u06CC \u062E\u0634\u06A9 \u0631\u0648\u0628\u0631\u0648\u0633\u062A.",
      home: "\u062E\u0627\u0646\u0647",
      climate: "\u0622\u0628 \u0648 \u0647\u0648\u0627",
      climateDesc: "\u0634\u06CC\u0631\u0627\u0632 \u0622\u0628 \u0648 \u0647\u0648\u0627\u06CC \u0646\u06CC\u0645\u0647\u200C\u062E\u0634\u06A9 \u062F\u0627\u0631\u062F \u0628\u0627 \u062A\u0627\u0628\u0633\u062A\u0627\u0646\u200C\u0647\u0627\u06CC \u06AF\u0631\u0645 \u0648 \u0632\u0645\u0633\u062A\u0627\u0646\u200C\u0647\u0627\u06CC \u0645\u0639\u062A\u062F\u0644.",
      temp: "\u062F\u0645\u0627",
      rainfall: "\u0628\u0627\u0631\u0646\u062F\u06AF\u06CC",
      solutions: "\u0631\u0627\u0647\u200C\u062D\u0644\u200C\u0647\u0627\u06CC \u0622\u0628",
      qanat: "\u0628\u0627\u0632\u0633\u0627\u0632\u06CC \u0642\u0646\u0627\u062A\u200C\u0647\u0627",
      qanatDesc: "\u0642\u0646\u0627\u062A\u200C\u0647\u0627\u06CC \u062A\u0627\u0631\u06CC\u062E\u06CC \u0634\u06CC\u0631\u0627\u0632 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0628\u0627\u0632\u0633\u0627\u0632\u06CC \u0634\u0648\u0646\u062F \u062A\u0627 \u0622\u0628 \u067E\u0627\u06CC\u062F\u0627\u0631 \u062A\u0623\u0645\u06CC\u0646 \u06A9\u0646\u0646\u062F.",
      qanatCost: "\u0647\u0632\u06CC\u0646\u0647: 50-100 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646",
      qanatTime: "\u0632\u0645\u0627\u0646: 1-2 \u0633\u0627\u0644",
      drip: "\u0622\u0628\u06CC\u0627\u0631\u06CC \u0642\u0637\u0631\u0647\u200C\u0627\u06CC",
      dripDesc: "\u0633\u06CC\u0633\u062A\u0645\u200C\u0647\u0627\u06CC \u0622\u0628\u06CC\u0627\u0631\u06CC \u0642\u0637\u0631\u0647\u200C\u0627\u06CC \u0645\u062F\u0631\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0645\u0635\u0631\u0641 \u0622\u0628 \u0631\u0627 \u062A\u0627 60% \u06A9\u0627\u0647\u0634 \u062F\u0647\u0646\u062F.",
      dripCost: "\u0647\u0632\u06CC\u0646\u0647: 5-10 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646/\u0647\u06A9\u062A\u0627\u0631",
      dripTime: "\u0632\u0645\u0627\u0646: 3-6 \u0645\u0627\u0647",
      culture: "\u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC",
      hafez: "\u0622\u0631\u0627\u0645\u06AF\u0627\u0647 \u062D\u0627\u0641\u0638",
      saadi: "\u0622\u0631\u0627\u0645\u06AF\u0627\u0647 \u0633\u0639\u062F\u06CC",
      eram: "\u0628\u0627\u063A \u0627\u0631\u0645",
      persepolis: "\u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
      footer: "\u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0628\u0627 \u0639\u0634\u0642 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646 \u{1F1EE}\u{1F1F7}\u2764\uFE0F"
    },
    en: {
      title: "Shiraz",
      subtitle: "City of Gardens, Poetry & Culture",
      intro: "Shiraz, birthplace of Hafez and Saadi, home of Persian gardens and Persepolis. We start here - a city with rich culture but facing dry climate challenges.",
      home: "Home",
      climate: "Climate",
      climateDesc: "Shiraz has a semi-arid climate with hot summers and mild winters.",
      temp: "Temperature",
      rainfall: "Rainfall",
      solutions: "Water Solutions",
      qanat: "Qanat Restoration",
      qanatDesc: "Historic qanats in Shiraz can be restored to provide sustainable water supply.",
      qanatCost: "Cost: $50-100k per qanat",
      qanatTime: "Timeline: 1-2 years",
      drip: "Drip Irrigation",
      dripDesc: "Modern drip irrigation systems can reduce water consumption by up to 60%.",
      dripCost: "Cost: $5-10k per hectare",
      dripTime: "Timeline: 3-6 months",
      culture: "Cultural Heritage",
      hafez: "Hafez Tomb",
      saadi: "Saadi Tomb",
      eram: "Eram Garden",
      persepolis: "Persepolis",
      footer: "A family project with love for Iran \u{1F1EE}\u{1F1F7}\u2764\uFE0F"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0634\u06CC\u0631\u0627\u0632 - Shiraz | Bagh-e Ayandeh" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="min-h-screen" x-data="{ lang: 'fa' }"> <!-- Navigation --> <nav class="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <div class="flex items-center space-x-8" :class="{ 'space-x-reverse': lang === 'fa' }"> <a href="/"> <h1 class="text-2xl font-bold bg-gradient-to-r from-persian-green-600 via-persian-turquoise-600 to-persian-gold-600 bg-clip-text text-transparent cursor-pointer"> <span x-show="lang === 'fa'">\u0628\u0627\u063A \u0622\u06CC\u0646\u062F\u0647</span> <span x-show="lang === 'en'">Bagh-e Ayandeh</span> </h1> </a> <span class="text-sm text-gray-600"> <span x-show="lang === 'fa'">Future Garden</span> <span x-show="lang === 'en'">\u0628\u0627\u063A \u0622\u06CC\u0646\u062F\u0647</span> </span> </div> <div class="flex items-center space-x-6" :class="{ 'space-x-reverse': lang === 'fa' }"> <a href="/" class="text-gray-700 hover:text-persian-turquoise-600 transition"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </a> <button @click="lang = lang === 'fa' ? 'en' : 'fa'; document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr')" class="px-4 py-2 text-sm bg-persian-gold-500 text-white rounded-lg hover:bg-persian-gold-600 transition"> <span x-show="lang === 'fa'">EN</span> <span x-show="lang === 'en'">\u0641\u0627</span> </button> </div> </div> </div> </nav> <!-- Hero --> <section class="relative py-20 px-4 bg-gradient-to-br from-persian-turquoise-100 to-persian-green-100"> <div class="max-w-6xl mx-auto text-center"> <div class="text-7xl mb-6">\u{1F3DB}\uFE0F</div> <h1 class="text-5xl md:text-7xl font-bold mb-6 text-persian-green-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h1> <p class="text-2xl md:text-3xl text-gray-700 mb-8"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> <p class="text-lg text-gray-600 max-w-3xl mx-auto" :class="{ 'text-right': lang === 'fa', 'text-left': lang === 'en' }"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> </div> </section> <!-- Climate --> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <h2 class="text-4xl font-bold mb-8 text-center text-gray-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h2> <p class="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto" :class="{ 'text-right': lang === 'fa', 'text-left': lang === 'en' }"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white rounded-xl shadow-lg p-8"> <h3 class="text-2xl font-bold mb-4 text-persian-turquoise-700">
\u{1F321}\uFE0F <span x-show="lang === 'fa'">`, `</span><span x-show="lang === 'en'">`, `</span> </h3> <ul class="space-y-2 text-gray-700"> <li><span x-show="lang === 'fa'">\u2022 \u062A\u0627\u0628\u0633\u062A\u0627\u0646: 25-40\xB0C</span><span x-show="lang === 'en'">\u2022 Summer: 25-40\xB0C</span></li> <li><span x-show="lang === 'fa'">\u2022 \u0632\u0645\u0633\u062A\u0627\u0646: 0-15\xB0C</span><span x-show="lang === 'en'">\u2022 Winter: 0-15\xB0C</span></li> </ul> </div> <div class="bg-white rounded-xl shadow-lg p-8"> <h3 class="text-2xl font-bold mb-4 text-persian-green-700">
\u{1F327}\uFE0F <span x-show="lang === 'fa'">`, `</span><span x-show="lang === 'en'">`, `</span> </h3> <ul class="space-y-2 text-gray-700"> <li><span x-show="lang === 'fa'">\u2022 \u0633\u0627\u0644\u0627\u0646\u0647: ~350 \u0645\u06CC\u0644\u06CC\u200C\u0645\u062A\u0631</span><span x-show="lang === 'en'">\u2022 Annual: ~350mm</span></li> <li><span x-show="lang === 'fa'">\u2022 \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0632\u0645\u0633\u062A\u0627\u0646 \u0648 \u0628\u0647\u0627\u0631</span><span x-show="lang === 'en'">\u2022 Mostly winter & spring</span></li> </ul> </div> </div> </div> </section> <!-- Water Solutions --> <section class="py-16 px-4 bg-persian-green-50"> <div class="max-w-6xl mx-auto"> <h2 class="text-4xl font-bold mb-12 text-center text-gray-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h2> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white rounded-2xl shadow-lg p-8"> <div class="text-5xl mb-4">\u{1F3DC}\uFE0F</div> <h3 class="text-2xl font-bold mb-4 text-persian-turquoise-700"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h3> <p class="text-gray-600 mb-6" :class="{ 'text-right': lang === 'fa', 'text-left': lang === 'en' }"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> <div class="space-y-2"> <p class="text-sm text-gray-500"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> <p class="text-sm text-gray-500"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> </div> </div> <div class="bg-white rounded-2xl shadow-lg p-8"> <div class="text-5xl mb-4">\u{1F4A7}</div> <h3 class="text-2xl font-bold mb-4 text-persian-green-700"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h3> <p class="text-gray-600 mb-6" :class="{ 'text-right': lang === 'fa', 'text-left': lang === 'en' }"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> <div class="space-y-2"> <p class="text-sm text-gray-500"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> <p class="text-sm text-gray-500"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </p> </div> </div> </div> </div> </section> <!-- Cultural Heritage --> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <h2 class="text-4xl font-bold mb-12 text-center text-gray-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> <div class="bg-persian-gold-50 rounded-xl p-6 text-center"> <div class="text-4xl mb-3">\u{1F4D6}</div> <h3 class="text-xl font-bold text-persian-gold-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h3> </div> <div class="bg-persian-turquoise-50 rounded-xl p-6 text-center"> <div class="text-4xl mb-3">\u{1F339}</div> <h3 class="text-xl font-bold text-persian-turquoise-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h3> </div> <div class="bg-persian-green-50 rounded-xl p-6 text-center"> <div class="text-4xl mb-3">\u{1F333}</div> <h3 class="text-xl font-bold text-persian-green-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h3> </div> <div class="bg-persian-gold-50 rounded-xl p-6 text-center"> <div class="text-4xl mb-3">\u{1F3DB}\uFE0F</div> <h3 class="text-xl font-bold text-persian-gold-800"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, `</span> </h3> </div> </div> </div> </section> <!-- Footer --> <footer class="bg-gray-900 text-white py-12 px-4"> <div class="max-w-6xl mx-auto text-center"> <h3 class="text-2xl font-bold mb-4">\u0628\u0627\u063A \u0622\u06CC\u0646\u062F\u0647 - Bagh-e Ayandeh</h3> <p class="text-gray-400 mb-6"> <span x-show="lang === 'fa'">`, `</span> <span x-show="lang === 'en'">`, '</span> </p> <p class="text-sm text-gray-500">Open source \u2022 Built with hope \u2022 For a free Iran</p> </div> </footer> </div>  <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer><\/script> '])), maybeRenderHead(), content.fa.home, content.en.home, content.fa.title, content.en.title, content.fa.subtitle, content.en.subtitle, content.fa.intro, content.en.intro, content.fa.climate, content.en.climate, content.fa.climateDesc, content.en.climateDesc, content.fa.temp, content.en.temp, content.fa.rainfall, content.en.rainfall, content.fa.solutions, content.en.solutions, content.fa.qanat, content.en.qanat, content.fa.qanatDesc, content.en.qanatDesc, content.fa.qanatCost, content.en.qanatCost, content.fa.qanatTime, content.en.qanatTime, content.fa.drip, content.en.drip, content.fa.dripDesc, content.en.dripDesc, content.fa.dripCost, content.en.dripCost, content.fa.dripTime, content.en.dripTime, content.fa.culture, content.en.culture, content.fa.hafez, content.en.hafez, content.fa.saadi, content.en.saadi, content.fa.eram, content.en.eram, content.fa.persepolis, content.en.persepolis, content.fa.footer, content.en.footer) })}`;
}, "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/shiraz.astro", void 0);

const $$file = "/home/mike/.openclaw/workspace-family/bagh-e-ayandeh/src/pages/shiraz.astro";
const $$url = "/Bagh-e-Ayandeh/shiraz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Shiraz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
