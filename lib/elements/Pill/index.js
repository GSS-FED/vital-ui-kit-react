// @flow

import React from 'react';
import styled from 'styled-components';

import Badge from '../Badge';

const Root = styled.div`
  background-color: ${props => (props.current ? '#2A4880' : 'transparent')};
  color: ${props => (props.current ? '#fff' : '#456296')};
  font-size: 1rem;
  position: relative;
  z-index: 5;
  display: block;
  padding: 6px 22px 7px;
  line-height: 1.3;
  border-radius: 2.16667rem;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  &:hover {
    background-color: #d8e2f5;
    color: #456296;
  }

  &:active {
    background-color: #c3d1eb;
    color: #456296;
  }
`;

type Props = {
  current?: boolean,
  text?: string,
  badge?: string,
  vertical?: boolean,
};

const Pill = ({ text, badge, vertical = false, current = false }: Props) => (
  <Root vertical={vertical} current={current}>
    {text}
    {badge && <Badge label={badge} />}
  </Root>
);

export default Pill;
