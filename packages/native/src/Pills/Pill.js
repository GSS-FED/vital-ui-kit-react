// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components/native';
import PillGroup from './PillsGroup';

const Root = styled.View`
  background-color: ${props => props.bg || '#122031'};
  padding-left: 8;
  padding-right: 8;
  border-radius: 8;
`;

const Label = styled.Text`
  color: ${props => props.color || '#fff'};
  font-size: 16;
`;

export type PillProps = {
  label: string,
  bg?: string,
  color?: string,
};

const Pill = ({ label, bg, color, ...props }: PillProps) => (
  <Root bg={bg} {...props}>
    <Label color={color}>{label}</Label>
  </Root>
);

Pill.Group = PillGroup;

export default Pill;
