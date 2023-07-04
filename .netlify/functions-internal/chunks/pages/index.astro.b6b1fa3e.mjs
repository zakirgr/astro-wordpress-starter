import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.2a1b2a9d.mjs';
/* empty css                           *//* empty css                              */
const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<section class="jumbotron bg-danger text-white radius-0 mb-0 astro-BBE6DXRZ">
    <h1 class="display-1 text-chicle text-light  astro-BBE6DXRZ">Baby Safe Travel</h1>
    <p class="lead text-light astro-BBE6DXRZ">Learn everything you need to know about vacationing with a young family!</p>
</section>`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/components/Hero.astro");

const $$Astro$4 = createAstro();
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="card astro-IYIQI2SO">
    <a class="post-link astro-IYIQI2SO"${addAttribute(post.uri, "href")}${addAttribute(post.title, "aria-label")}>
    <img class="card-img-top astro-IYIQI2SO"${addAttribute(post?.featuredImage?.node?.mediaItemUrl, "src")}${addAttribute(post?.featuredImage?.node?.altText, "alt")}${addAttribute(post?.featuredImage?.node?.srcSet, "srcset")} loading="lazy"${addAttribute(post?.featuredImage?.node?.mediaDetails?.width, "width")}${addAttribute(post?.featuredImage?.node?.mediaDetails?.height, "height")}>
    </a>
    <div class="card-body astro-IYIQI2SO">
      <div class="metaWrapper astro-IYIQI2SO">
        ${post.categories.nodes.map((category) => {
    return renderTemplate`<a class="btn btn-danger astro-IYIQI2SO"${addAttribute(category.uri, "href")}>${category.name}</a>`;
  })}
          <span class="astro-IYIQI2SO"><time${addAttribute(post.date, "datetime")} class="astro-IYIQI2SO">${new Date(post.date).toLocaleDateString()}</time></span>
      </div>
      <h4 class="card-title astro-IYIQI2SO"><a class="post-link astro-IYIQI2SO"${addAttribute(post.uri, "href")}${addAttribute(post.title, "aria-label")}>${post.title}</a></h4>
      <p class="card-text astro-IYIQI2SO">${unescapeHTML(post.excerpt)}</p>
    </div>

</div>`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/components/PostCard.astro");

const $$Astro$3 = createAstro();
const $$SiteNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SiteNav;
  const { menu, generalSettings } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-4LUNWX2E">
    <div class="astro-4LUNWX2E"><a href="/" class="text-chicle site-name astro-4LUNWX2E">${generalSettings.title}</a></div>
    <div class="hamburger astro-4LUNWX2E">&#9776;</div>
    <nav class="astro-4LUNWX2E">
        <ul class="astro-4LUNWX2E">
        ${menu.menuItems.nodes.map((menuItem) => {
    return renderTemplate`<li class="astro-4LUNWX2E">
                        <a${addAttribute(menuItem.uri || "/", "href")} class="astro-4LUNWX2E">${menuItem.label}</a>
                    </li>`;
  })}
        </ul>
    </nav>
</header>`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/components/SiteNav.astro");

const $$Astro$2 = createAstro();
const $$SiteFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SiteFooter;
  return renderTemplate`
${maybeRenderHead($$result)}<hr class="astro-GCN2MC3V">
<footer class="astro-GCN2MC3V">
    <p class="astro-GCN2MC3V">Made with ❤️ by <a href="https://globerunner.com/" target="_blank" class="astro-GCN2MC3V">Globerunner</a></p>
</footer>`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/components/SiteFooter.astro");

async function navQuery(){
    const siteNavQueryRes = await fetch("https://babysafetrastg.wpengine.com/graphql", {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                menus(where: {location: PRIMARY}) {
                  nodes {
                    name
                    menuItems {
                        nodes {
                            uri
                            url
                            order
                            label
                        }
                    }
                  }
                }
                generalSettings {
                    title
                    url
                    description
                }
            }
            `
        })
    });
    const{ data } = await siteNavQueryRes.json();
    return data;
}

async function homePagePostsQuery(){
    const response = await fetch("https://babysafetrastg.wpengine.com/graphql", {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                posts {
                  nodes {
                    date
                    uri
                    title
                    commentCount
                    excerpt
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        srcSet
                        sourceUrl
                        altText
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            `
        })
    });
    const{ data } = await response.json();
    return data;
}


async function getNodeByURI(uri){
    const response = await fetch("https://babysafetrastg.wpengine.com/graphql", {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `query GetNodeByURI($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Post {
                    id
                    title
                    date
                    uri
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        srcSet
                        sourceUrl
                        altText
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                  ... on Page {
                    id
                    title
                    uri
                    date
                    content
                  }
                  ... on Category {
                    id
                    name
                    posts {
                      nodes {
                        date
                        title
                        excerpt
                        uri
                        categories {
                          nodes {
                            name
                            uri
                          }
                        }
                        featuredImage {
                          node {
                            srcSet
                            sourceUrl
                            altText
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: {
                uri: uri
            }
        })
    });
    const{ data } = await response.json();
    return data;
}

async function getAllUris(){
  const response = await fetch("https://babysafetrastg.wpengine.com/graphql", {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `query GetAllUris {
            terms {
              nodes {
                uri
              }
            }
            posts(first: 100) {
              nodes {
                uri
              }
            }
            pages(first: 100) {
              nodes {
                uri
              }
            }
          }
          `
      })
  });
  const{ data } = await response.json();
  const uris = Object.values(data)
    .reduce(function(acc, currentValue){
      return acc.concat(currentValue.nodes)
    }, [])
    .filter(node => node.uri !== null)
    .map(node => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
      return {params: {
        uri: trimmedURI
      }}
    });

  return uris;

}

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { menus, generalSettings } = await navQuery();
  const primaryMenu = menus.nodes[0];
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-OUAMJN2I">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${`${title} | ${generalSettings.title}`}</title>
		<meta name="description"${addAttribute(description, "content")}>

    <link rel="stylesheet" href="/styles/bootstrap4-bubblegum.min.css">
    <link rel="stylesheet" href="/styles/custom.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chicle&family=Open+Sans&display=swap" rel="stylesheet">

	${renderHead($$result)}</head>
	<body class="astro-OUAMJN2I">
		<main class="astro-OUAMJN2I">
			${renderComponent($$result, "SiteNav", $$SiteNav, { "menu": primaryMenu, "generalSettings": generalSettings, "class": "astro-OUAMJN2I" })}
			<hr class="astro-OUAMJN2I">
    </main>
		${renderSlot($$result, $$slots["default"])}
		${renderComponent($$result, "SiteFooter", $$SiteFooter, { "class": "astro-OUAMJN2I" })}
	</body></html>`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/layouts/MainLayout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await homePagePostsQuery();
  const posts = data.posts.nodes;
  Astro2.response.headers.set("Cache-Control", "max-age=600, must-revalidate");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home Page", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		${renderComponent($$result2, "Hero", $$Hero, { "class": "astro-J7PV25F6" })}
    <div class="container py-5 astro-J7PV25F6">
		<h2 class="astro-J7PV25F6">Recent Posts</h2>
    <div class="card-container astro-J7PV25F6">
		${posts.map((post) => {
    return renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "class": "astro-J7PV25F6" })}`;
  })}
    </div>
    </div>
	</main>
` })}`;
}, "/Volumes/Zakir External HDD/babysafetravel/src/pages/index.astro");

const $$file = "/Volumes/Zakir External HDD/babysafetravel/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PostCard as $, getNodeByURI as a, $$MainLayout as b, getAllUris as g, index as i };
