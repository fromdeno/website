import { hy, fs } from "./deps.ts";
import Home from "./pages/home.ts";

const watching = Deno.args.includes("--watch") || Deno.args.includes("-w");

function main() {
	Deno.stdout.writeSync(new TextEncoder().encode("\x1Bc"));

	console.log("Recreating build folder");
	try {
		Deno.removeSync("build", { recursive: true });
	} catch {
		/* Ignore if exists */
	}

	console.log("Copying public/* -> build/");
	fs.copySync("public", "build");

	console.log("Building site...");
	Deno.writeTextFileSync("build/index.html", hy.renderHTML(Home));

	if (watching) console.log("Watching for changes");
	else console.log("Done");
}

// deno-lint-ignore no-explicit-any
const debounce = <F extends (...args: any) => any>(f: F, ms = 100) => {
	let timeoutId: number;
	return () => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(f, ms);
	};
};

const drun = debounce(() =>
	Deno.run({
		cmd: "deno --unstable run --allow-read --allow-write ./src/build.ts".split(
			" ",
		),
	}),
);

if (watching) {
	await drun();
	for await (const _ of Deno.watchFs("src", { recursive: true })) {
		await drun();
	}
} else await main();
