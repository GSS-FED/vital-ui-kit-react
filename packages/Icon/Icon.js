// @flow

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
