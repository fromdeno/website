import { hy } from "../deps.ts";

const [head, title, meta, link] = hy.elements("head", "title", "meta", "link");

const Head = (
	{
		pagetitle = "@fromdeno - tools for deno",
		description = "Tools for deno developers from the deno community and members of The Devs network.",
		url = "https://fromdeno.org",
		img = "/assets/og-image.png",
		favicon = "/assets/fromdeno.svg",
	}: {
		pagetitle?: string;
		description?: string;
		url?: string;
		img?: string;
		favicon?: string;
	},
	...other: hy.Nodeish[]
) =>
	head(
		title(pagetitle),
		meta({ name: "title", content: pagetitle }),
		link({ rel: "icon", href: favicon }),
		meta({
			name: "description",
			content: description,
		}),
		// Open Graph / Facebook
		meta({ property: "og:type", content: "website" }),
		meta({ property: "og:url", content: url }),
		meta({ property: "og:title", content: pagetitle }),
		meta({
			property: "og:description",
			content: description,
		}),
		meta({
			property: "og:image",
			content: img,
		}),
		// Twitter
		meta({ property: "twitter:card", content: "summary_large_image" }),
		meta({ property: "twitter:url", content: url }),
		meta({
			property: "twitter:title",
			content: pagetitle,
		}),
		meta({
			property: "twitter:description",
			content: description,
		}),
		meta({
			property: "twitter:image",
			content: img,
		}),
		link({ rel: "stylesheet", href: "/style/fonts.css" }),
		link({ rel: "stylesheet", href: "/style/main.css" }),
		...other,
	);

export default Head;
