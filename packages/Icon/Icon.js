/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React from 'react';
import styled from 'styled-components';

import './style.css';

const I = styled.i`
  color: ${props => props.color};
  font-size: ${props => `${props.size}px`};
`;

type Props = {
  className: string,
  size: number,
  color: string,
  onClick?: () => void
};

/**
 * @render react
 * @name Icon
 * @description Icon based on icomoon file, `icon-` prefix
 * @example
 * <Icon
 *  size="12"
 *  color="#FED"
 *  className="icon-wifi"
 * />
 */
const Icon = ({ className, size = 16, color, onClick, ...props }: Props) => (
  <I
    size={size}
    color={color}
    onClick={onClick}
    {...props}
    className={className}
  />
);

export default Icon;
