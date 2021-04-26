# mypkg-lerna-container

This is the top-level package in an example managed by [lerna](https://www.npmjs.com/package/lerna).

- Do not try to publish this package.
- Lerna will not manage dependecies in this package.

## Continuous Integration Testing

``` shell
npm ci
npm run test
```

Because the packages are all listed as `devDependencies`, there's no need of the `lerna boostrap` before running tests (typically in a ci). The downside is that you have to:

``` shell
rm -r packages/*/node_modules node_modules
lerna bootstrap
rm -r node_modules/\@mypkg/
npm run test
```

to be sure that the packages have the required (dev) dependencies (analogous to the [disadvantages with hoisting](https://github.com/lerna/lerna/blob/main/doc/hoist.md#disadvantages-with-hoisting)). Keeping `lerna` external (e.g. global) makes `npm ci` faster but makes this development process more complex.
