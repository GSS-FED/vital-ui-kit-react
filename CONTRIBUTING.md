# Contributing Guide

## Requiement
`node > 8`

`yarn > 1.5.1`

## File structure
Vital UI Kit React is a monorepo, we use [Lerna](https://github.com/lerna/lerna) for package management.

**packages**

```
@vital-ui/react-avatar
@vital-ui/react-badge
@vital-ui/react-button
@vital-ui/react-card
@vital-ui/react-form
@vital-ui/react-icon
@vital-ui/react-layout
@vital-ui/react-list
@vital-ui/react-menu
@vital-ui/react-modal
@vital-ui/react-pagination
@vital-ui/react-pill
@vital-ui/react-table
@vital-ui/react-tabs
@vital-ui/react-theme
@vital-ui/react-tooltip
@vital-ui/react-utils
// this one contains all packages
@vital-ui/react
```

## Workflow

After cloning UI Kit, please do yarn to install the dependencies, using `yarn run bootstrap`.

### Developing with Storybook
After install the dependencies
- `yarn run storybook` will run `playground` storybook, and all packages will be watched.
- All stories are located in `playground/stories`.

#### Add new package
- Create a package like others.
- Add it to playground, run `lerna add @vital-ui/your-new-package --scope @gssfed/playground`

### Test
- `yarn run test:web`

### Build and Publish

Run `yarn run build` will handle all process.

We follow [semantic versioning](https://semver.org/) and publish via `lerna`. Run `yarn run publish` and beware it should be stable in `master` branch.
