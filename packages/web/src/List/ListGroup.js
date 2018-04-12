/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node } from 'react';
import styled from 'styled-components';

import sharedStyle from '../ListGroup/styled';

const Root = styled.ul`
  list-style: none;
  word-break: break-word;
  word-wrap: break-word;
  overflow: hidden;
  border-radius: ${props => (props.collapse ? '4px' : 0)};
  ${props =>
    props.border
      ? sharedStyle.themeWithBorder
      : sharedStyle.themeWithoutBorder};
`;

type Props = {
  children: Array<Node>,
  themed: 'light' | 'dark'
};

const List = ({ children, ...props }: Props) => (
  <Root {...props}>{children}</Root>
);

export default List;
