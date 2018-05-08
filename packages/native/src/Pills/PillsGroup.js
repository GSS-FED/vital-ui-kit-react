// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  flex-direction: row;
`;

type Props = {
  marginBetween?: number,
  children: React.Node,
};

const PillsGroup = ({ marginBetween = 6, children, ...props }: Props) => (
  <Root marginBetween={marginBetween} {...props}>
    {React.Children.map(children, child => React.cloneElement(child, { style: { marginRight: marginBetween } }))}
  </Root>
);

export default PillsGroup;
