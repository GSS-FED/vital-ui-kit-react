import * as tslib_1 from "tslib";
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { defaultTheme } from '@vital-ui/react-theme';
import { size as SIZE, natureColor } from './constant';

const Btn = styled.button(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  color: ", ";\n  cursor: pointer;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  line-height: 1;\n  font-weight: normal;\n  margin: 0;\n  outline: none;\n  padding: ", ";\n  box-sizing: border-box;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:active {\n    background: ", ";\n  }\n\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", "\n\n   ", "\n\n   ", "\n\n   ", "\n\n  &[disabled] {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n"], ["\n  position: relative;\n  background: ", ";\n  color: ", ";\n  cursor: pointer;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  line-height: 1;\n  font-weight: normal;\n  margin: 0;\n  outline: none;\n  padding: ", ";\n  box-sizing: border-box;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:active {\n    background: ", ";\n  }\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    "\n\n  ",
    "\n\n   ",
    "\n\n   ",
    "\n\n   ",
    "\n\n  &[disabled] {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n"])), (_a) => {
    const theme = _a.theme;
    return theme.button.default.bg;
}, (_a) => {
    const theme = _a.theme; const nature = _a.nature;
    return natureColor(theme)[nature];
}, (_a) => {
    const theme = _a.theme;
    return theme.borderColor;
}, (_a) => {
    const size = _a.size;
    return SIZE[size].fontSize;
}, (_a) => {
    const size = _a.size;
    return SIZE[size].borderRadius;
}, (_a) => {
    const size = _a.size;
    return SIZE[size].padding;
}, (_a) => {
    const size = _a.size;
    return SIZE[size].padding;
}, (_a) => {
    const theme = _a.theme;
    return theme.button.default.hoverBg;
}, (_a) => {
    const theme = _a.theme;
    return theme.button.default.activeBg;
}, (_a) => {
    const subtle = _a.subtle; const selected = _a.selected; const theme = _a.theme; const nature = _a.nature;
    return subtle && css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      background: ", ";\n      color: ", ";\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ", ";\n      }\n    "], ["\n      background: ",
        ";\n      color: ",
        ";\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ", ";\n      }\n    "])), selected
        ? theme.button.subtle.bg
        : 'transparent', nature === 'default'
        ? theme.button.subtle.color
        : natureColor(theme)[nature], theme.button.subtle.hoverBg);
}, (_a) => {
    const flat = _a.flat; const nature = _a.nature; const theme = _a.theme;
    return flat && css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n\n      &:hover {\n        background: ", ";\n        border-color: ", ";\n      }\n      &:active {\n        background: ", ";\n        border-color: ", ";\n      }\n    "], ["\n      background: ",
        ";\n      color: ",
        ";\n      border-color: ",
        ";\n\n      &:hover {\n        background: ",
        ";\n        border-color: ",
        ";\n      }\n      &:active {\n        background: ",
        ";\n        border-color: ",
        ";\n      }\n    "])), nature === 'default'
        ? theme.button.flat.bg
        : natureColor(theme)[nature], nature === 'default'
        ? natureColor(theme).default
        : theme.button.flat.color, nature === 'default'
        ? theme.button.flat.bg
        : natureColor(theme)[nature], nature === 'default'
        ? theme.button.flat.hoverBg
        : lighten(0.1, natureColor(theme)[nature]), nature === 'default'
        ? theme.borderColor
        : lighten(0.1, natureColor(theme)[nature]), nature === 'default'
        ? theme.button.flat.activeBg
        : darken(0.12, natureColor(theme)[nature]), nature === 'default'
        ? theme.button.flat.activeBorderColor
        : darken(0.12, natureColor(theme)[nature]));
}, (_a) => {
    const light = _a.light; const theme = _a.theme; const nature = _a.nature;
    return light && css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n      background: ", ";\n      color: ", ";\n\n      &:hover {\n        background: ", ";\n      }\n    "], ["\n      background: ", ";\n      color: ", ";\n\n      &:hover {\n        background: ", ";\n      }\n    "])), theme.button.light.bg, natureColor(theme)[nature], theme.button.light.hoverBg);
}, (_a) => {
    const link = _a.link; const theme = _a.theme;
    return link && css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n      background: ", ";\n      color: ", ";\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n    "], ["\n      background: ", ";\n      color: ", ";\n      border: 1px solid transparent;\n\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n    "])), theme.button.link.bg, theme.button.link.color, theme.button.link.hoverBg, theme.button.link.hoverColor);
}, (_a) => {
    const link = _a.link; const dark = _a.dark; const theme = _a.theme;
    return link &&
        dark && css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n       color: ", ";\n\n       &:hover {\n         color: ", ";\n       }\n     "], ["\n       color: ", ";\n\n       &:hover {\n         color: ", ";\n       }\n     "])), theme.button.link.darkColor, theme.button.link.hoverDarkColor);
}, (_a) => {
    const underline = _a.underline;
    return underline && css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n       &:hover {\n         text-decoration: underline;\n       }\n     "], ["\n       &:hover {\n         text-decoration: underline;\n       }\n     "])));
}, (_a) => {
    const circle = _a.circle;
    return circle && css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       padding: 0;\n       border-radius: 100%;\n       width: 2.066rem;\n       line-height: 2.066rem;\n       height: 2.066rem;\n     "], ["\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       padding: 0;\n       border-radius: 100%;\n       width: 2.066rem;\n       line-height: 2.066rem;\n       height: 2.066rem;\n     "])));
}, (_a) => {
    const theme = _a.theme;
    return theme.button.disabled.color;
}, (_a) => {
    const theme = _a.theme;
    return theme.button.disabled.borderColor;
}, (_a) => {
    const theme = _a.theme;
    return theme.button.disabled.bg;
});
Btn.defaultProps = {
    theme: defaultTheme,
};
export default Btn;
let templateObject_1; let templateObject_2; let templateObject_3; let templateObject_4; let templateObject_5; let templateObject_6; let templateObject_7; let templateObject_8;
// # sourceMappingURL=styled.js.map