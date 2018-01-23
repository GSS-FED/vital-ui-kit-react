// @flow

import React from 'react';
import styled from 'styled-components';

import iconPath from './selection';

function getPath(iconName) {
  const icon = iconPath.icons.find(i => i.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  }
  // eslint-disable-next-line
  console.warn(`icon ${iconName} does not exist.`);
  return '';
}

const Svg = styled.svg`
  display: inline-block;
`;
const Path = styled.path`
  fill: ${props => props.color || '#000'};
`;

type Props = {
  name: string,
  size: number,
  color: string,
  style?: any,
  onClick?: () => void,
};

const Icon = ({ name, size = 16, color, onClick, style, ...props }: Props) => (
  <Svg
    fill='currentColor'
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    onClick={onClick}
    style={style}
    {...props}
  >
    <Path d={getPath(name)} color={color} />
  </Svg>
);

export default Icon;
