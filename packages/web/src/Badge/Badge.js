/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import { trunTo } from '../utils/math';

const inverseStyle = ({ inverse }) => inverse &&`
  background-color: #ffffff;
  color: #00c3ff;
`

const Root = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #ffffff;
  background-color: #00c3ff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.725rem;

  ${inverseStyle}
`;

type Props = {
  /** Text on the badge */
  label: string | number,
  /** show 99+ if number is more than 100 */
  trunc?: boolean,
  inverse?: boolean,
};

/**
 * @render react
 * @name Badge
 * @description Vital UI Kit Badge Label
 * @example
 * <Badge label="99+" />
 */

const Badge = ({ label, trunc = true, inverse = false, ...props }: Props) => (
  <Root inverse={inverse} {...props}>
    {trunc ? trunTo(label) : label}
  </Root>
);

export default Badge;
