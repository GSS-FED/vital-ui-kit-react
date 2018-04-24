/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import { trunTo } from '../utils/math';

const Root = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #ffffff;
  background-color: #00c3ff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.725rem;
`;

type Props = {
  /** Text on the badge */
  label: string | number,
  children?: React.Node,
  /**  */
  trunc?: boolean,
};

/**
 * @render react
 * @name Badge
 * @description Vital UI Kit Badge Label
 * @example
 * <Badge label="99+" />
 */

const Badge = ({ label, children, trunc, ...props }: Props) => (
  <Root {...props}>
    {trunc ? trunTo(label) : label}
    {children}
  </Root>
);

export default Badge;
