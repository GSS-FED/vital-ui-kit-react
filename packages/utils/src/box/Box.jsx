// @flow
import * as React from 'react';
import styled from 'styled-components';

import { space, layout, type Space, type Layout } from '../style';

const Container = styled.div`
  ${p => p};
  ${space};
  ${layout};
`;

type Props = {
  children: React.Node,
  style?: CSSStyleDeclaration,
  className?: string,
};

const Box = ({
  className,
  children,
  style,
  ...props
}: Props & Space & Layout) => (
  <Container className={className} style={style} {...props}>
    {children}
  </Container>
);

Box.defaultProps = {
  /* eslint-disable react/default-props-match-prop-types */
  style: undefined,
  className: '',
};

export default Box;
