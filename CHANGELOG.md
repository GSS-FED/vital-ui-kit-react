# Changelog
## 0.8.7 (2018-08-26)

#### Major
* `@vital-ui-lab/chart`, `avatar`, `badge`, `button`, `card`, `form`, `icon`, `layout`, `list`, `menu`, `modal`, `pagination`, `pill`, `table`, `tabs`, `theme`, `tooltip`, `utils`, `web`
  * [#268](https://github.com/GSS-FED/vital-ui-kit-react/pull/268) Flow -> Typescript ([@ericyip](https://github.com/ericyip))

  Flow -> Typescript
  Publish: v0.8.7

  #### :boom: Breaking Change
  - All packages named export.

  #### :rocket: Enhancement
  - avatar: new builtInDefaultAvatar props
  - modal: rework

  #### :house: Internal
  - Flatten storybook to root dir
  - Add Dockerfile, switch storybook static site from netlify to now

  #### :bug: Bug Fix
  - Fix #261. Select attr warning
  - Close #264. Remove Icomoon Icon package.


#### Committers: 1
- Eric Yip ([@ericyip](https://github.com/ericyip))
## 0.8.5 (2018-07-30)

#### :rocket: Enhancement
* `utils`, `web`
  * [#253](https://github.com/GSS-FED/vital-ui-kit-react/pull/253) intergraded styled-system ([@ericyip](https://github.com/ericyip))

#### Committers: 1
- Eric Yip ([@ericyip](https://github.com/ericyip))

## 0.8.4 (2018-07-30)

#### :rocket: Enhancement
* `list`, `theme`, `web`
  * [#250](https://github.com/GSS-FED/vital-ui-kit-react/pull/250) ListItem and theme update ([@ericyip](https://github.com/ericyip))

#### :bug: Bug Fix
* `icon`
  * [#230](https://github.com/GSS-FED/vital-ui-kit-react/pull/230) Fix Icon cursor bug ([@ericyip](https://github.com/ericyip))

#### Committers: 1
- Eric Yip ([@ericyip](https://github.com/ericyip))

## 0.8.3 (2018-07-11)

#### :rocket: Enhancement
* `menu`
  * [#233](https://github.com/GSS-FED/vital-ui-kit-react/pull/233) Menu height extends ([@ericyip](https://github.com/ericyip))
* `utils`
  * [#232](https://github.com/GSS-FED/vital-ui-kit-react/pull/232) Layout utils ([@ericyip](https://github.com/ericyip))

#### :house: Internal
* `pill`, `web`
  * [#231](https://github.com/GSS-FED/vital-ui-kit-react/pull/231) Upgrade ReactPriorityNav v0.2 ([@ericyip](https://github.com/ericyip))
* `avatar`
  * [#228](https://github.com/GSS-FED/vital-ui-kit-react/pull/228) Transform assets to data-uri on build ([@ericyip](https://github.com/ericyip))

#### Committers: 1
- Eric Yip ([@ericyip](https://github.com/ericyip))

## 0.8.2 (2018-07-05)

#### :rocket: Enhancement
* `@vital-ui-lab/chart`, `form`, `icon`, `table`, `web`
  * [#219](https://github.com/GSS-FED/vital-ui-kit-react/pull/219) Form Select integrate with downshift ([@ericyip](https://github.com/ericyip))

#### :bug: Bug Fix
* `form`, `web`
  * [#220](https://github.com/GSS-FED/vital-ui-kit-react/pull/220) Fix export name MultiSelect ([@ericyip](https://github.com/ericyip))

#### :house: Internal
* `table`
  * [#203](https://github.com/GSS-FED/vital-ui-kit-react/pull/203) Lint check setup ([@ericyip](https://github.com/ericyip))
* Other
  * [#200](https://github.com/GSS-FED/vital-ui-kit-react/pull/200) Turn off some eslint rules might conflict with Prettier ([@cjies](https://github.com/cjies))

#### :boom: Breaking Change
* `@vital-ui-lab/chart`, `form`, `icon`, `table`, `web`
  * [#219](https://github.com/GSS-FED/vital-ui-kit-react/pull/219) Form Select integrate with downshift ([@ericyip](https://github.com/ericyip))

#### Committers: 3
- CJies ([@cjies](https://github.com/cjies))
- Eric Yip ([@ericyip](https://github.com/ericyip))
- Timo Aho ([@Zeukkari](https://github.com/Zeukkari))
## 0.8.1 (2018-06-21)
#### :bug: Bug Fix
* `icon`
  * [#192](https://github.com/GSS-FED/vital-ui-kit-react/pull/192) Fix icon provider in order to work without it ([@ericyip](https://github.com/ericyip))

#### Committers: 1
- Eric Yip ([@ericyip](https://github.com/ericyip))

## 0.8.0 (2018-06-20)

#### :boom: Breaking Change
* `Card.Container` will be removed. use `Card.Content`  instead.
* `ThemeProvider` to `VitalProvider`. 💥

    #### Sperate all component to packages
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
     * [#190](https://github.com/GSS-FED/vital-ui-kit-react/pull/190) v0.8 rename to @vital-ui/react-*. ([@ericyip](https://github.com/ericyip))

#### :rocket: Enhancement
* new `withDeprecatedWarning` component, use for deprecation warnings. 🗡
* Add default className: `.vital__*-*` to all components. e.g. `.vital_avatar-image` 💃
* `checkbox`: new custom checkbox option.
   * [#190](https://github.com/GSS-FED/vital-ui-kit-react/pull/190) v0.8 rename to @vital-ui/react-*. ([@ericyip](https://github.com/ericyip))
* Theme
  *  `ThemeProvider` has renamed to `VitalProvider` in `@vital-ui/react`, It's the same but provide new api: `theme` and `componentTheme`.
  * Theme now accepts `variables` and `componentTheme`, should rename provider props from `theme` to `variables`.
  * Fix #162. pass defaultTheme to each packages that use `theme` and `styled-components` `defaultProps`, so It won't break if install individually without `ThemeProvider`.

#### :house: Internal
* Remove babel-root-import plugin. in favor of `babel-plugin-module-resolver`
* Fix flow mapper to local packages.
* Add `Lerna` scripts
* Remove custom `react-scripts`.
   * [#190](https://github.com/GSS-FED/vital-ui-kit-react/pull/190) v0.8 rename to @vital-ui/react-*. ([@ericyip](https://github.com/ericyip))

#### Committers: 1
- Eric Yip ([ericyip](https://github.com/ericyip))


## 0.5.2 (2018-06-14)

#### :rocket: Enhancement
* `playground`, `web`
  * [#175](https://github.com/GSS-FED/vital-ui-kit-react/pull/175) Table and Checkbox. ([@ericyip](https://github.com/ericyip))

#### :boom: Breaking Change
* `playground`, `web`
  * [#154](https://github.com/GSS-FED/vital-ui-kit-react/pull/154) Refactor Table and Playground packages. ([@ericyip](https://github.com/ericyip))

      Adds `react-virtualized` to `peerDependencies`.

#### Committers: 1
- Eric Yip ([ericyip](https://github.com/ericyip))

## 0.5.1 (2018-06-07)

#### :rocket: Enhancement
* `web`
  * [#151](https://github.com/GSS-FED/vital-ui-kit-react/pull/151) Add Theme story. ([@ericyip](https://github.com/ericyip))

#### :house: Internal
* `web`
  * [#161](https://github.com/GSS-FED/vital-ui-kit-react/pull/161) Add rollup for common js build. ([@ericyip](https://github.com/ericyip))
  * [#155](https://github.com/GSS-FED/vital-ui-kit-react/pull/155) Separate storyshots. ([@cjies](https://github.com/cjies))

#### :rocket: Enhancement
* `web`
  * [#151](https://github.com/GSS-FED/vital-ui-kit-react/pull/151) Add Theme story and export defaultComponentsTheme ([@ericyip](https://github.com/ericyip))

#### Committers: 2
- CJies ([cjies](https://github.com/cjies))
- Eric Yip ([ericyip](https://github.com/ericyip))

