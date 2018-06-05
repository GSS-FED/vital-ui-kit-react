/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';

import TabItem from './TabItem';

const Root = styled.ul`
  display: inline-block;
`;

type Props = {
  children: TabItem,
};

const TabList = ({ children, ...props }: Props) => (
  <Root {...props}>{children}</Root>
);

export default TabList;
