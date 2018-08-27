/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { defaultTheme } from '@vital-ui/react-theme';
import { size as SIZE } from './constant';

export type Nature =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'alarm'
  | 'warning';

export type Size = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

type StyledButtonProps = {
  nature: Nature;
  size: Size;
  subtle?: boolean;
  selected?: boolean;
  flat?: boolean;
  light?: boolean;
  link?: boolean;
  dark?: boolean;
  underline?: boolean;
  circle?: boolean;
};

export const natureColor = (theme: typeof defaultTheme) => ({
  default: theme.colors.secondary700,
  primary: theme.colors.primary,
  success: theme.colors.success,
  info: theme.colors.info,
  alarm: theme.colors.alarm,
  warning: theme.colors.warning,
});

const ButtonElement = styled<StyledButtonProps, 'button'>('button')`
  position: relative;
  background: ${({ theme }) => theme.button.default.bg};
  color: ${({ theme, nature }) => natureColor(theme)[nature]};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.borderColor};
  font-size: ${({ size }) => SIZE[size].fontSize};
  border-radius: ${({ size }) => SIZE[size].borderRadius};
  padding: ${({ size }) => SIZE[size].padding};
  line-height: 1;
  font-weight: normal;
  margin: 0;
  outline: none;
  padding: ${({ size }) => SIZE[size].padding};
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.button.default.hoverBg};
  }

  &:active {
    background: ${({ theme }) => theme.button.default.activeBg};
  }

  ${({ subtle, selected, theme, nature }) =>
    subtle &&
    css`
      background: ${selected
        ? theme.button.subtle.bg
        : 'transparent'};
      color: ${nature === 'default'
        ? theme.button.subtle.color
        : natureColor(theme)[nature]};
      border: 1px solid transparent;

      &:hover {
        background: ${theme.button.subtle.hoverBg};
      }
    `};

  ${({ flat, nature, theme }) =>
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
    `};

  ${({ light, theme, nature }) =>
    light &&
    css`
      background: ${theme.button.light.bg};
      color: ${natureColor(theme)[nature]};

      &:hover {
        background: ${theme.button.light.hoverBg};
      }
    `}

  ${({ link, theme }) =>
    link &&
    css`
      background: ${theme.button.link.bg};
      color: ${theme.button.link.color};
      border: 1px solid transparent;

      &:hover {
        background: ${theme.button.link.hoverBg};
        color: ${theme.button.link.hoverColor};
      }
    `}

   ${({ link, dark, theme }) =>
     link &&
     dark &&
     css`
       color: ${theme.button.link.darkColor};

       &:hover {
         color: ${theme.button.link.hoverDarkColor};
       }
     `}

   ${({ underline }) =>
     underline &&
     css`
       &:hover {
         text-decoration: underline;
       }
     `}

   ${({ circle }) =>
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
     `}

  &[disabled] {
    color: ${({ theme }) => theme.button.disabled.color};
    border-color: ${({ theme }) => theme.button.disabled.borderColor};
    background-color: ${({ theme }) => theme.button.disabled.bg};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

ButtonElement.defaultProps = {
  theme: defaultTheme,
};

export interface ButtonProps {
  /** `vital_button` */
  className?: string;
  /** The content of the button */
  children?: React.ReactNode;
  /** on click event */
  onClick?: () => void;
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
  size?: Size;
  /** Circle button */
  circle?: boolean;
  /** Selected state */
  selected?: boolean;
  style?: React.CSSProperties;
  dark?: boolean;
  underline?: boolean;
  disabled?: boolean;
}

/* tslint:disable-next-line */
const noop = () => {};

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

export class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    children: '',
    nature: 'default' as Nature,
    size: 'medium' as Size,
    circle: false,
    light: false,
    flat: false,
    link: false,
    subtle: false,
    selected: false,
    onClick: noop,
    style: undefined,
    className: '',
    disabled: false,
  };

  render() {
    const {
      children,
      className,
      style,
      onClick,
      nature = 'default',
      size = 'medium',
      ...props
    } = this.props;
    return (
      <ButtonElement
        className={cn('vital__button', className)}
        style={style}
        onClick={onClick}
        nature={nature}
        size={size}
        {...props}
      >
        {children}
      </ButtonElement>
    );
  }
}
