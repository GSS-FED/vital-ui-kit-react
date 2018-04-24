# Contributing Guide

## file structure
Vital UI Kit React is a monorepo, we use [Lerna](https://github.com/lerna/lerna) for package management.
- **packages** contains all element with `package.json`, we aim to divide scope of module which is easy to use and can be import individually.
- **www** contains our doc website (under developing).

## Workflow

After cloning UI Kit, please do yarn to install the dependencies, using `yarn run bootstrap`. Note that `node` requires version > 8.

### Developing with Storybook
After install the dependencies
- `yarn run storybook` will run storybook in development mode.
- `yarn run build-storybook` runs build static of storybook.

### Build and Publish

We use [rollup](https://github.com/rollup/rollup) for bundling packages. It will build three formats: **es**, **commonjs**, commonjs with **minify**. All config leave in `rollup.config.js`.

Run `yarn run build` will handle this process.

We follow [semantic versioning](https://semver.org/) and publish via `lerna`. Run `yarn run publish` and beware it should be stable in `production` branch.
