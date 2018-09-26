/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import { BoxProps, superBoxStyle } from '@vital-ui/react-utils';

const ButtonWrapper = styled<BoxProps, 'div'>('div')`
  position: relative;
  height: 50px;
  display: table-cell;
  vertical-align: middle;

  &:not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: ${({ theme }) => theme.borderColor};
    }
  }
  ${superBoxStyle};
`;

const Button = styled.button<{ primary: boolean }>`
  padding: 0 10px;
  margin: 0;
  border: 0;
  border-radius: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.button.bg};
  transition: all 120ms ease-in;
  line-height: 50px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ primary, theme }) => theme.card.button.color(primary)};

  &:hover {
    background-color: ${({ theme }) => theme.card.button.hover};
  }
`;

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  /** default: `vital__card-footer-button-wapper` */
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
  /** default `vital__card-footer-button` */
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;
};

const FooterButton = ({
  children,
  primary = false,
  onClick,
  wrapperStyle,
  wrapperClassName,
  buttonClassName,
  buttonStyle,
  ...props
}: Props) => (
  <ButtonWrapper
    style={wrapperStyle}
    className={cn(
      'vital__card-footer-button-wapper',
      wrapperClassName,
    )}
    onClick={onClick}
    {...props}
  >
    <Button
      style={buttonStyle}
      className={cn('vital__card-footer-button', buttonClassName)}
      primary={primary}
    >
      {children}
    </Button>
  </ButtonWrapper>
);

ButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

Button.defaultProps = {
  theme: defaultTheme,
};

export default FooterButton;
