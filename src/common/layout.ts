import { hy } from "../deps.ts";
import Head from "./head.ts";
import Menu from "./menu.ts";

const [html, body] = hy.elements("html", "body");

const Layout = (props: Parameters<typeof Head>[0], layoutBody: hy.Nodeish) =>
	html(Head(props), body(Menu(), layoutBody));

export default Layout;
