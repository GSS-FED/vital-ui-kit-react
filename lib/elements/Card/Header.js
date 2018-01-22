// @flow

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #d8e3f6;
  color: #456297;
  font-size: 1.25rem;
  min-height: 50px;
`;

type Props = {
  children: React.Node,
  // image:
};

const Header = ({ children }: Props) => <Root>{children}</Root>;

export default Header;
