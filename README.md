<div align="center">
  <img height="100" src="assets/fromdeno.svg">
  <h1 align="center">@fromdeno</h1>
</div>

Because Deno is incompatible with Node.js, libraries need two variants in order to target both runtimes.

Deno provides the superior developer experience: it requires no explicit transpilation step, and ships with zero-conf tooling that works well together.

We prefer to write code targeting Deno, and use tools to create the Node.js  variant, rather than vice-versa.

We set out to write these tools.

## [`deno.ns`]

Enables using some Deno APIs on Node.js, by providing a shim for the `Deno` namespace.

## [`deno2node`]

End-to-end tested tool that accepts a `tsconfig.json` describing a Deno project and:

1. Makes relative imports Node-friendly,
2. Optionally shims Deno globals not available in Node.js,
3. Allows to provide Node.js variant for some files if all else fails,
4. Outputs `.js`, `.d.ts` and `.d.ts.map`, just like TypeScript.


[`deno.ns`]: https://github.com/fromdeno/deno.ns
[`deno2node`]: https://github.com/wojpawlik/deno2node
