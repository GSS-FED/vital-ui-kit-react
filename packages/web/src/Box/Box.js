// @flow
import React from 'react';
import styled from 'styled-components';

import { space, type Space } from '../utils/';

const Container = styled.div`
  ${space};
`;

const Box = ({ children, ...props }: Space) => (
  <Container {...props}>{children}</Container>
);

export default Box;
