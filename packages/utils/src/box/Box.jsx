// @flow
import * as React from 'react';
import styled from 'styled-components';

import { space, type Space } from '../style';

const Container = styled.div`
  ${space};
`;

type Props = {
  ...Space,
  children: React.Node,
  style?: CSSStyleDeclaration,
  className?: string,
};

const Box = ({ className, children, style, ...props }: Props) => (
  <Container className={className} style={style} {...props}>
    {children}
  </Container>
);

Box.defaultProps = {
  style: undefined,
  className: '',
};

export default Box;
