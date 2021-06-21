import { hy } from "../deps.ts";

const [header, div, img, ul, li, a] = hy.elements(
	"header",
	"div",
	"img",
	"ul",
	"li",
	"a",
);

const menuItems = [
	{
		name: "About",
		path: "/",
		external: false,
	},
	{
		name: "Projects",
		path: "#projects",
		external: false,
	},
	{
		name: "Registry",
		path: "/explore",
		external: false,
	},
	{
		name: "Support us",
		path: "#support",
		external: false,
	},
];

const Menu = () =>
	header(
		div(
			{ class: "container" },
			a(
				{ href: "/" },
				img({ class: "logo", src: "/assets/fromdeno.svg" }),
			),
			ul(
				{ class: "menu" },
				...menuItems.map(item => li(a({ href: item.path }, item.name))),
			),
		),
	);

export default Menu;
