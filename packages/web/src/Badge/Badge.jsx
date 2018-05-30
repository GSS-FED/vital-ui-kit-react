/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import { trunTo } from '../utils/math';

const inverseOrNot = ({ inverse, theme }) => `
  background-color: ${inverse ? theme.badge.inverseBg : theme.bg};
  color: ${inverse ? theme.inverseColor : theme.color};
`;

const Root = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.725rem;

  ${inverseOrNot};
`;

type Props = {
  /** Text on the badge */
  label: string | number,
  /** Show 99+ if number is more than 100 */
  trunc?: boolean,
  /** nIverse style */
  inverse?: boolean,
};

/**
 * @render react
 * @name Badge
 * @description Vital UI Kit Badge Label
 * @example
 * <Badge label="99+" />
 */

const Badge = ({ label, trunc, inverse, ...props }: Props) => (
  <Root inverse={inverse} {...props}>
    {trunc ? trunTo(label) : label}
  </Root>
);

Badge.defaultProps = {
  trunc: true,
  inverse: false
};

export default Badge;
