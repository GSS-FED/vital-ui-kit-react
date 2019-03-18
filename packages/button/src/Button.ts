/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import { defaultTheme } from '@vital-ui/react-theme';
import { BoxProps } from '@vital-ui/react-utils';
import cn from 'classnames';
import styled from 'styled-components';
import { BuiltinSize, ButtonSize, Nature } from './constant';
import { natureColor } from './utils';
import { boxStyle } from '@vital-ui/react-utils';

function builtInOrTheme(
  builtin: BuiltinSize | undefined,
  theme: any,
) {
  return builtin ? builtin : theme.button;
}

export interface ButtonProps extends BoxProps {
  builtinSize?: BuiltinSize;
  /** 6 nature state */
  nature?: Nature;
  /** Button size */
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = styled('button').attrs(props => ({
  type: 'button',
  className: cn('vital__button', props.className),
  theme: defaultTheme,
  nature: 'default' as Nature,
  size: 'medium' as ButtonSize,
  selected: false,
  disabled: false,
}))<ButtonProps>`
  position: relative;
  background: ${props => props.theme.button.default.bg};
  color: ${({ theme, nature }) => natureColor(theme)[nature]};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.borderColor};
  font-size: ${({ builtinSize, theme, size }) =>
    builtInOrTheme(builtinSize, theme)[size].fontSize};
  border-radius: ${({ builtinSize, theme, size }) =>
    builtInOrTheme(builtinSize, theme)[size].borderRadius};
  padding: ${({ builtinSize, theme, size }) =>
    builtInOrTheme(builtinSize, theme)[size].padding};
  line-height: 1;
  font-weight: normal;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: ${props => props.theme.button.default.hoverBg};
  }

  &:active {
    background: ${props => props.theme.button.default.activeBg};
  }

  &[disabled] {
    color: ${({ theme }) => theme.button.disabled.color};
    border-color: ${({ theme }) => theme.button.disabled.borderColor};
    background: ${({ theme }) => theme.button.disabled.bg};
    cursor: not-allowed;
    pointer-events: none;
  }

  ${boxStyle};
  ${props => props.theme.button.buttonStyle};
`;
