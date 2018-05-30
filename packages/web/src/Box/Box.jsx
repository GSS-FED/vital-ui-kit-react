// @flow
import * as React from 'react';
import styled from 'styled-components';

import { space, type Space } from '../utils';

const Container = styled.div`
  ${space};
`;

type Props = {
  ...Space,
  children: React.Node,
  style?: CSSStyleDeclaration
};

const Box = ({ children, style, ...props }: Props) => (
  <Container style={style} {...props}>
    {children}
  </Container>
);

Box.defaultProps = {
  style: null
};

export default Box;
