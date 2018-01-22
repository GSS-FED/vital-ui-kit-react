// @flow
import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  flex-grow: 1;
  color: #7189b6;
`;

type Props = {
  children: React.Node,
};

const Container = ({ children }: Props) => <Root>{children}</Root>;

export default Container;
