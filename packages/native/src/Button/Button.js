// @flow

import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  padding-left: 13;
  padding-right: 13;
  height: ${props => props.height || 30};
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.active ? 'blue' : '#fff'};
  border-radius: 50;
  border-width: ${props => (props.active ? 0 : 0.5)};
  border-color: '#fff';
`;

const Text = styled.Text`
  color: ${props => (props.active ? '#fff' : '#000')};
  font-size: 14;
`;

type Props = {
  label: string,
  active?: boolean,
  onPress: () => void
};

const Button = ({ label, active, onPress }: Props) => (
  <Root active={active} onPress={onPress}>
    <Text active={active}>{label}</Text>
  </Root>
);

export default Button;
