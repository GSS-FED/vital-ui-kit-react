// @flow

import React from 'react';
import styled from 'styled-components';

import iconPath from './selection';

import '../../styles/global.css';

const DEFAULT_SIZE = 1024;

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
  ${'' /* height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`}; */}
  color: currentColor;
  overflow: hidden;
  display: inline-block;
  line-height: 1;
`;

const Svg = styled.svg`
  display: inline-block;
  font-size: ${props => `${props.size}px`};
  ${'' /* overflow: hidden; */}
  vertical-align: middle;
  ${'' /* transition-property: none; */}
  ${'' /* transform-origin: 0 0; */}
`;

const GElement = styled.g`
  transform: ${props => `scale(${props.size / DEFAULT_SIZE}, ${props.size / DEFAULT_SIZE})`};
  transform-origin: 0px 0px 0px;
`;

const Path = styled.path`
  fill: ${props => props.color || 'currentColor'};
`;

type Props = {
  name: string,
  size: number,
  color: string,
  onClick?: () => void,
};

const Icon = ({ name, size = 16, color, onClick, ...props }: Props) => (
  <IconWrapper size={size} role="img" aria-label={name} {...props} >
    <Svg
      size={size}
      fill="currentColor"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      onClick={onClick}
      >
      {/* <GElement size={size}> */}
      <Path d={getPath(name)} color={color} />
      {/* </GElement> */}
    </Svg>
  </IconWrapper>
);

export default Icon;
