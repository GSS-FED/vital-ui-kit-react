// @flow

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #ffffff;
  background-color: #00c3ff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.725rem;
`;

type Props = {
  label: string,
  children?: React.Node,
};

const Badge = ({ label, children, ...props }: Props) => (
  <Root {...props}>
    {label}
    {children}
  </Root>
);

export default Badge;
