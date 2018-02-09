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

const IconWrapper = styled.span`
  height: ${props => props.size};
  width: ${props => props.size};
  color: currentColor;
  overflow: hidden;
  display: inline-block;
  line-height: 1;
`;

const Svg = styled.svg`
  display: inline-block;
  font-size: ${props => props.size};
  overflow: hidden;
  vertical-align: bottom;
  transition-property: none;
`;
const Path = styled.path`
  fill: ${props => props.color || 'currentColor'};
`;

type Props = {
  name: string,
  size: string,
  color: string,
  onClick?: () => void,
};

const Icon = ({ name, size = '16px', color, onClick, ...props }: Props) => (
  <IconWrapper size={size} role="img" aria-label={name} {...props} >
    <Svg
      size={size}
      fill="currentColor"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      onClick={onClick}
      >
      <Path d={getPath(name)} color={color} />
    </Svg>
  </IconWrapper>
);

export default Icon;
