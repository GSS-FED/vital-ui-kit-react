// @flow
import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  flex-grow: 1;
  color: #7189b6;
  font-size: 0.93333rem;
  overflow-x: hidden;
`;

type Props = {
  children: React.Node,
  style: any,
};

const Container = ({ children, style, ...props }: Props) => (
  <Root style={style} {...props}>
    {children}
  </Root>
);

export default Container;
