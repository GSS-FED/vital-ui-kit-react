// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from 'styled-components/native';

const Root = styled.TouchableOpacity`
  padding-left: 13;
  padding-right: 13;
  height: ${props => props.height || 'auto'};
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.active ? props.theme.tintColor : '#fff'};
  border-radius: 50;
  border-width: ${props => (props.active ? 0 : 0.5)};
  border-color: #fff;
`;

const Text = styled.Text`
  color: ${props => (props.active ? '#fff' : props.theme.tintColor)};
  font-size: 16;
`;

export type ButtonProps = {
  title: string,
  active?: boolean,
  onPress: () => void,
};

const Button = ({
  title,
  active,
  onPress,
  ...props
}: ButtonProps) => (
  <Root active={active} onPress={onPress} {...props}>
    <Text active={active}>{title}</Text>
  </Root>
);

export default Button;
