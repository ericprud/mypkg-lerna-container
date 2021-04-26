# mypkg-lerna-container

This is the top-level package in an example managed by [lerna](https://www.npmjs.com/package/lerna).

- Do not try to publish this package.
- Lerna will not manage dependecies in this package.

## Continuous Integration Testing

``` shell
npm ci
lerna bootstrap
npm run test
```

Because e.g. `@mypkg/two` depends on `@mypgk/one`, you must run `lerna bootstrap` to create the necessary symlinks like `packages/node_modules/two/@mypkg/one` -> `../../../one`. An alternative that does not require `lerna boostrap` is in the `ci-no-bootstrap` branch.
