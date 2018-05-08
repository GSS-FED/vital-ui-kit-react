// @flow
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { ImageStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import boxShadow from './helper/boxShadow';
import defaultAvatar from '../assets/avatar-alien.png';

const AVATAR_SIZE = 37;

const Root = styled.View`
  height: ${props => props.size};
  width: ${props => props.size};
  ${'' /* border-radius: ${props => props.borderRadius}; */}
  ${props => props.shadow && `
    ${boxShadow(-14, 8, 35, '#000', 0.34)}
  `}
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.size / 2};
`;

type Props = {
  size?: number,
  src?: string,
  shadow: boolean,
  wrapperStyle: ViewStyle,
  imageStyle: ImageStyle,
}

const Avatar = ({ size = AVATAR_SIZE, src = defaultAvatar, shadow = false, wrapperStyle, imageStyle, ...props }: Props) => (
  <Root shadow={shadow} size={size} style={wrapperStyle} {...props}>
    <Image source={{ uri: src }} size={size} style={imageStyle} />
  </Root>
);

export default Avatar;
