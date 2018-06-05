// @flow
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

import React from 'react';
import { ImageStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import boxShadow from './helper/boxShadow';

const AVATAR_SIZE = 37;

const Root = styled.View`
  height: ${props => props.size};
  width: ${props => props.size};
  ${props =>
    props.shadow &&
    `
    ${boxShadow(-14, 8, 35, '#000', 0.34)}
  `};
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.size / 2};
`;

export type AvatarProps = {
  size?: number,
  src?: string,
  shadow: boolean,
  wrapperStyle?: ViewStyle,
  imageStyle?: ImageStyle,
};

const Avatar = ({
  size = AVATAR_SIZE,
  src = null,
  shadow = false,
  wrapperStyle,
  imageStyle,
  ...props
}: AvatarProps) => (
  <Root shadow={shadow} size={size} style={wrapperStyle} {...props}>
    <Image
      source={
        src ? { uri: src } : require('../assets/avatar-alien.png')
      }
      size={size}
      style={imageStyle}
    />
  </Root>
);

export default Avatar;
