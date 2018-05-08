// @flow

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding: 0.46633rem 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  height: 1.93267rem;
  color: #7189b6;
  text-align: center;
  background-color: #eef2fc;
  border: 1px solid #c4d2eb;
  border-radius: 4px;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
`;

type Props = {
  children: React.ReactNode,
};

const Addon = ({ children }: Props) => <Root>{children}</Root>;

export default Addon;
