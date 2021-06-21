import { hy } from "../deps.ts";
import Layout from "../common/layout.ts";

const [main, div, img, h1, h2, h3, p, span, a] = hy.elements(
	"main",
	"div",
	"img",
	"h1",
	"h2",
	"h3",
	"p",
	"span",
	"a",
);

const Card = (title: hy.Nodeish, desc: hy.Nodeish) =>
	div({ class: "card" }, h3(title), p(desc));

const Home = Layout(
	{},
	main(
		{ class: "container hero" },
		div(
			{ class: "hero-subcontainer" },
			img({ class: "hero-logo", src: "/assets/fromdeno.svg" }),
			div(
				h1("fromdeno"),
				p(
					"An open source org building tools to bridge the gap from Deno to Node.js.",
				),
			),
		),
		div(
			{ class: "hero-subcontainer hero-features" },
			h2("Build for Deno without restrictions"),
			div(
				{ class: "hero-cards" },
				Card(
					"Author for Deno, compile for Node",
					"Use tooling to compile modules for Node.js instead of maintaining two versions of libraries.",
				),
				Card(
					"Host your Deno modules yourself",
					"Use our simple, performant self-hosted registry to host your own modules on your domain!",
				),
				Card(
					"Join the community",
					span(
						"We’re on our",
						a(
							{ href: "https://t.me/fromdeno" },
							" Telegram group ",
						),
						"up for a discussion at any time. Leave us a message!",
					),
				),
			),
		),
	),
);

export default Home;
