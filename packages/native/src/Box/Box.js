// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from 'styled-components/native';

import { space, Space, flex, Flex } from './utils';

const Container = styled.View`
  ${space};
  ${flex};
`;

export type Props = Space & Flex;

const Box = ({ children, ...props }: Props) => (
  <Container {...props}>{children}</Container>
);

export default Box;
