// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { TextStyle } from 'react-native';
import styled from 'styled-components/native';

const Root = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
`;

const Title = styled.Text`
  color: #808999;
  font-size: ${props => props.theme.font.headline.fontSize};
  font-weight: ${props => props.theme.font.headline.fontWeight};
`;

export type Props = {
  title: string,
  titleStyle?: TextStyle,
  action?: React.ReactNode,
};

const CardHeader = ({ title, titleStyle = {}, action }: Props) => (
  <Root>
    <Title style={titleStyle}>{title}</Title>
    {action && action}
  </Root>
);

export default CardHeader;
