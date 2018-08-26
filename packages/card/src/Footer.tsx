/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import styled from 'styled-components';

const Root = styled.div`
  table-layout: fixed;
  display: table;
  width: 100%;
  flex-grow: 0;
  border-top: ${({ theme }) => theme.border};
  min-height: 50px;
  overflow: hidden;
  vertical-align: middle;
  text-align: right;
  box-sizing: border-box;
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  /** default is `vital__card-footer` */
  className?: string;
};

const Footer = ({ children, style, className, ...props }: Props) => (
  <Root style={style} className={cn('vital__card-footer')} {...props}>
    {children}
  </Root>
);

export default Footer;
