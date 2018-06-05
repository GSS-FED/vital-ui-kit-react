// @flow
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import * as React from 'react';
import styled from 'styled-components/native';

const Background = styled.ImageBackground`
  flex: 1;
  width: null;
  height: null;
`;

const SafeAreaView = styled.SafeAreaView`
  background-color: transparent;
  flex: 1;
`;

export type ImageBackgroundProps = {
  children: React.ReactNode,
  src?: string,
  localRequire?: NodeRequire,
};

const ImageBackground = ({
  children,
  src,
  localRequire = require('../assets/bg.png'),
}: ImageBackgroundProps) => (
  <Background source={src ? { uri: src } : localRequire}>
    <SafeAreaView>{children}</SafeAreaView>
  </Background>
);

export default ImageBackground;
