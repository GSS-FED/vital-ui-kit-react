# Contributing Guide

## Requiement
`node > 8`

`yarn > 1.5.1`

## File structure
Vital UI Kit React is a monorepo, we use [Lerna](https://github.com/lerna/lerna) for package management.

**packages** divided `web` and `native`.

## Workflow

After cloning UI Kit, please do yarn to install the dependencies, using `yarn run bootstrap`.

### Developing with Storybook
After install the dependencies
- `yarn run storybook:web` will run storybook in development mode.

### Build and Publish

Run `yarn run build` will handle all process.

We follow [semantic versioning](https://semver.org/) and publish via `lerna`. Run `yarn run publish` and beware it should be stable in `master` branch.
