# Changelog
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

