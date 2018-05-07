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

type Props = {
  children: React.Node,
}

const ImageBackground = ({ children }: Props) => (
  <Background
    source={require('../assets/bg.png')}
  >
    <SafeAreaView>
      {children}
    </SafeAreaView>
  </Background>
);

export default ImageBackground;
