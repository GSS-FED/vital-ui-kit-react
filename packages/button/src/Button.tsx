/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import { Nature, ButtonSize, BuiltinSize } from './constant';

import styled, { css, ThemedStyledProps } from 'styled-components';
import { darken, lighten } from 'polished';
import { defaultTheme } from '@vital-ui/react-theme';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';

interface ButtonElementProps extends BoxProps {
  nature: Nature;
  size: ButtonSize;
  subtle?: boolean;
  selected?: boolean;
  flat?: boolean;
  light?: boolean;
  link?: boolean;
  dark?: boolean;
  underline?: boolean;
  circle?: boolean;
  builtinSize?: BuiltinSize;
}

type StyledButtonProps = ThemedStyledProps<ButtonElementProps, any>;

function builtInOrTheme(
  builtin: BuiltinSize | undefined,
  theme: any,
) {
  return builtin ? builtin : theme.button;
}

export const natureColor = (theme: any) => ({
  default: theme.colors.secondary700,
  primary: theme.colors.primary,
  success: theme.colors.success,
  info: theme.colors.info,
  alarm: theme.colors.alarm,
  warning: theme.colors.warning,
});

export const buttonBaseStyle = ({
  theme,
  size,
  nature,
  builtinSize,
}: StyledButtonProps) =>
  css`
    position: relative;
    background: ${theme.button.default.bg};
    color: ${natureColor(theme)[nature]};
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.borderColor};
    font-size: ${builtInOrTheme(builtinSize, theme)[size].fontSize};
    border-radius: ${builtInOrTheme(builtinSize, theme)[size]
      .borderRadius};
    padding: ${builtInOrTheme(builtinSize, theme)[size].padding};
    line-height: 1;
    font-weight: normal;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    &:hover {
      background: ${theme.button.default.hoverBg};
    }

    &:active {
      background: ${theme.button.default.activeBg};
    }
  `;

export const subtleStyle = ({
  subtle,
  selected,
  theme,
  nature,
}: StyledButtonProps) =>
  subtle &&
  css`
    background: ${selected ? theme.button.subtle.bg : 'transparent'};
    color: ${nature === 'default'
      ? theme.button.subtle.color
      : natureColor(theme)[nature]};
    border: 1px solid transparent;

    &:hover {
      background: ${theme.button.subtle.hoverBg};
    }
  `;

export const flatStyle = ({
  flat,
  nature,
  theme,
}: StyledButtonProps) =>
  flat &&
  css`
    background: ${nature === 'default'
      ? theme.button.flat.bg
      : natureColor(theme)[nature]};
    color: ${nature === 'default'
      ? natureColor(theme).default
      : theme.button.flat.color};
    border-color: ${nature === 'default'
      ? theme.button.flat.bg
      : natureColor(theme)[nature]};

    &:hover {
      background: ${nature === 'default'
        ? theme.button.flat.hoverBg
        : lighten(0.1, natureColor(theme)[nature])};
      border-color: ${nature === 'default'
        ? theme.borderColor
        : lighten(0.1, natureColor(theme)[nature])};
    }
    &:active {
      background: ${nature === 'default'
        ? theme.button.flat.activeBg
        : darken(0.12, natureColor(theme)[nature])};
      border-color: ${nature === 'default'
        ? theme.button.flat.activeBorderColor
        : darken(0.12, natureColor(theme)[nature])};
    }
  `;

export const lightStyle = ({
  light,
  theme,
  nature,
}: StyledButtonProps) =>
  light &&
  css`
    background: ${theme.button.light.bg};
    color: ${natureColor(theme)[nature]};

    &:hover {
      background: ${theme.button.light.hoverBg};
    }
    &:active {
      background: ${theme.button.light.activeBg};
    }
  `;

export const linkStyle = ({ link, theme }: StyledButtonProps) =>
  link &&
  css`
    background: ${theme.button.link.bg};
    color: ${theme.button.link.color};
    border: 1px solid transparent;

    &:hover {
      background: ${theme.button.link.hoverBg};
      color: ${theme.button.link.hoverColor};
    }
  `;

export const linkDarkStyle = ({
  link,
  dark,
  theme,
}: StyledButtonProps) =>
  link &&
  dark &&
  css`
    color: ${theme.button.link.darkColor};

    &:hover {
      color: ${theme.button.link.hoverDarkColor};
    }
  `;

const underlineStyle = ({ underline }: StyledButtonProps) =>
  underline &&
  css`
    &:hover {
      text-decoration: underline;
    }
  `;

export const circleStyle = ({ circle }: StyledButtonProps) =>
  circle &&
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 100%;
    width: 2.066rem;
    line-height: 2.066rem;
    height: 2.066rem;
  `;

export const Button = styled('button').attrs(props => ({
  type: 'button',
  className: cn('vital__button', props.className),
}))<ButtonProps>`
  /* Basic */
  ${
    // @ts-ignore
    buttonBaseStyle
  }
  /* subtle */
  ${subtleStyle}
  /* flat */
  ${flatStyle}
  /* light */
  ${lightStyle}
  /* link */
  ${linkStyle}
  ${linkDarkStyle}

  /* underline */
  ${underlineStyle}

  /* circle */
  ${circleStyle}

  ${superBoxStyle}

  &[disabled] {
    color: ${({ theme }) => theme.button.disabled.color};
    border-color: ${({ theme }) => theme.button.disabled.borderColor};
    background: ${({ theme }) => theme.button.disabled.bg};
    cursor: not-allowed;
    pointer-events: none;
  }
  ${props => props.theme.button.buttonStyle};
`;

Button.defaultProps = {
  theme: defaultTheme,
  children: '',
  nature: 'default' as Nature,
  size: 'medium' as ButtonSize,
  circle: false,
  light: false,
  flat: false,
  link: false,
  subtle: false,
  selected: false,
  disabled: false,
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BoxProps {
  builtinSize?: BuiltinSize;
  /** 6 nature state */
  nature?: Nature;
  /** Flat style */
  flat?: boolean;
  /** Subtle style */
  subtle?: boolean;
  /** Light style */
  light?: boolean;
  /** Link style */
  link?: boolean;
  /** Button size */
  size?: ButtonSize;
  /** Circle button */
  circle?: boolean;
  /** Selected state */
  selected?: boolean;
  dark?: boolean;
  underline?: boolean;
  disabled?: boolean;
}

/**
 * @render react
 * @name Button
 * @description Button component with group
 * @example
 * <ButtonGroup>
 *   <Button nature="default" size="xlarge">Default</Button>
 *   <Button nature="primary" size="large">Default</Button>
 *   <Button nature="success" size="medium">Default</Button>
 *   <Button nature="info" size="small">Default</Button>
 *   <Button nature="alarm" size="xsmall">Default</Button>
 *   <Button nature="warning">Default</Button>
 *   <Button flat>Default</Button>
 *   <Button subtle>Default</Button>
 *   <Button light>Default</Button>
 *   <Button link>Default</Button>
 * </ButtonGroup>
 */
