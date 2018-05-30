// @flow

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding: 0.46633rem 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  height: 1.93267rem;
  color: ${({ theme }) => theme.labelColor};
  text-align: center;
  background-color: ${({ theme }) => theme.form.addon.bg};
  border: ${({ theme }) => `1px solid ${theme.form.borderColor}`};
  border-radius: 4px;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
`;

type Props = {
  children: React.Node
};

const Addon = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

export default Addon;
