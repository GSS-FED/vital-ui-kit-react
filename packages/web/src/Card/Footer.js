/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  table-layout: fixed;
  display: table;
  width: 100%;
  flex-grow: 0;
  border-top: ${({ theme }) => `1px solid ${theme.primaryList[2]}`};
  min-height: 50px;
  overflow: hidden;
  vertical-align: middle;
  text-align: right;
  box-sizing: border-box;
`;

type Props = {
  children: React.ReactNode
};

const Footer = ({ children, ...props }: Props) => (
  <Root {...props}>
    {children}
  </Root>
);

export default Footer;
