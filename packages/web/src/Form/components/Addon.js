// @flow

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding: 0.46633rem 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  height: 1.93267rem;
  color: ${({ theme }) => theme.primaryList[5]};
  text-align: center;
  background-color: ${({ theme }) => theme.primaryList[1]};
  border: ${({ theme }) => `1px solid ${theme.primaryList[3]}`};
  border-radius: 4px;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
`;

type Props = {
  children: React.ReactNode
};

const Addon = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

export default Addon;
