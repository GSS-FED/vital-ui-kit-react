/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node } from 'react';
import styled from 'styled-components';

import sharedStyled from '../ListGroup/styled';

const Root = styled.div`
  display: block;
  font-size: 1.2rem;
  ${props =>
    props.border
      ? sharedStyled.themeWithBorder
      : sharedStyled.themeWithoutBorder};
  border-left: ${props => props.border ? '1px solid #d8e3f6' : 'none'};
  border-right: ${props => props.border ? '1px solid #d8e3f6' : 'none'};
  padding: 0.928rem 2.856rem 0.928rem 1.428rem;
  line-height: 1.866rem;
`;

type Props = {
  children: Node,
  themed?: 'light' | 'dark',
  border?: boolean
};

const CollapseContent = ({ children, themed, border }: Props) => (
  <Root themed={themed} border={border}>
    {children}
  </Root>
);

export default CollapseContent;
