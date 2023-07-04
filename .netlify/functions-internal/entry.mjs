import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import { g as deserializeManifest } from './chunks/astro.2a1b2a9d.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.f88d1d65.mjs');
const _page1  = () => import('./chunks/_...1ce3ddd3.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/[...uri].astro", _page1]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".hamburger\"),n=document.querySelector(\"nav\");e.addEventListener(\"click\",o);function o(){n.classList.toggle(\"show-nav\"),console.log(\"running\")}\n"}],"styles":[{"type":"external","src":"/_astro/index.6af1871e.css"},{"type":"external","src":"/_astro/_...uri_.feef6290.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Volumes/Zakir External HDD/babysafetravel/src/pages/[...uri].astro",{"propagation":"none","containsHead":true}],["/Volumes/Zakir External HDD/babysafetravel/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/[...uri].astro":"chunks/prerender.5e6982e0.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.f88d1d65.mjs","\u0000@astro-page:src/pages/[...uri]@_@astro":"chunks/_...1ce3ddd3.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.37632b2a.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_...uri_.feef6290.css","/_astro/_...uri_.0c7efe2b.css","/_astro/index.6af1871e.css","/favicon.svg","/styles/bootstrap4-bubblegum.min.css","/styles/custom.css"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
