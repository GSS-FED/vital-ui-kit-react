// @flow
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  padding-left: 7;
  padding-right: 7;
  background-color: ${props => props.bg || '#D8D8D8'};
  border-radius: 7.5;
  height: 16;
`;

const Label = styled.Text`
  color: ${props => props.color || '#3D414A'};
  font-size: 12;
`;

export type BadgeProps = {
  label: string | number,
  bg?: string,
  color?: string,
};

const Badge = ({ label, bg, color, ...props }: BadgeProps) => (
  <Root bg={bg} {...props}>
    <Label color={color}>{label}</Label>
  </Root>
);

export default Badge;
