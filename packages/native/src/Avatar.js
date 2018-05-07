// @flow
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components/native';
import boxShadow from './helper/boxShadow';

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
}

const Avatar = ({ size = AVATAR_SIZE, src = 'https://randomuser.me/api/portraits/men/39.jpg', shadow = false, ...props }: Props) => (
  <Root shadow={shadow} size={size} {...props}>
    <Image source={{ uri: src }} size={size} />
  </Root>
);

export default Avatar;
