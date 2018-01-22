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
  display: block;
  margin: 0 auto;
`;
const Path = styled.path`
  fill: ${props => props.color || '#000'};
`;

type Props = {
  name: string,
  size: number,
  color: string,
  onClick: () => void,
};

const Icon = ({ name, size = 16, color, onClick}: Props) => (
  <Svg width={size} height="1em" viewBox="0 0 1024 1024" onClick={onClick}>
    <Path d={getPath(name)} color={color} />
  </Svg>
);

export default Icon;
