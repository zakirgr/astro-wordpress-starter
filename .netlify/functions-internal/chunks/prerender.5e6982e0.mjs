import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as addAttribute, u as unescapeHTML } from './astro.2a1b2a9d.mjs';
import { $ as $$PostCard, g as getAllUris, a as getNodeByURI, b as $$MainLayout } from './pages/index.astro.b6b1fa3e.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
/* empty css                          *//* empty css                             */
const $$Astro$2 = createAstro();
const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Archive;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="container py-5 astro-N4HNWONY">
 <h1 class="astro-N4HNWONY">${node.name} - Archive</h1>
 <div class="card-container astro-N4HNWONY">
 ${node.posts.nodes.map((post) => {
    return renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post, "class": "astro-N4HNWONY" })}`;
  })}
</div>
</div>`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/components/templates/Archive.astro");

const $$Astro$1 = createAstro();
const $$Single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Single;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="container py-5 astro-6EJVUPO2">
 <h1 class="astro-6EJVUPO2">${node.title}</h1>
  <div class="metaWrapper astro-6EJVUPO2">
    ${node.__typename === "Post" ? renderTemplate`<p class="post-details astro-6EJVUPO2">
           Posted on <time${addAttribute(node.date, "datetime")} class="astro-6EJVUPO2">${new Date(node.date).toLocaleDateString()}</time>
       </p>` : null}
     ${node.categories ? node.categories.nodes.map((category) => renderTemplate`<a class="btn btn-danger astro-6EJVUPO2"${addAttribute(category.uri, "href")}>${category.name}</a>`) : null}
  </div>
 <img class="featured-image astro-6EJVUPO2"${addAttribute(node.featuredImage?.node?.mediaItemUrl, "src")}${addAttribute(node.featuredImage?.node?.srcSet, "srcset")}${addAttribute(node.featuredImage?.node?.altText, "alt")} loading="lazy"${addAttribute(node.featuredImage?.node?.mediaDetails?.width, "width")}${addAttribute(node.featuredImage?.node?.mediaDetails?.height, "height")}>

 <article class="astro-6EJVUPO2">${unescapeHTML(node.content)}</article>
</div>`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/components/templates/Single.astro");

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  return await getAllUris();
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const uri = `/${Astro2.params.uri}/`;
  const data = await getNodeByURI(uri);
  const node = data.nodeByUri;
  function resolveContentTemplate(node2) {
    let template;
    switch (node2.__typename) {
      case "Post":
        template = $$Single;
        break;
      case "Page":
        template = $$Single;
        break;
      case "Category":
        template = $$Archive;
        break;
      case "Tag":
        template = $$Archive;
        break;
      default:
        template = $$Single;
    }
    return template;
  }
  const Template = resolveContentTemplate(node);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": node.title || node.name, "description": node.excerpt }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Template", Template, { "node": node })}
` })}`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/pages/[...uri].astro");

const $$file = "/Volumes/Zakir External HDD/babysafetravel/src/pages/[...uri].astro";
const $$url = "/[...uri]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
