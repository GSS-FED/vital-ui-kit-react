/** @flow */
import * as React from 'react';
import styled from 'styled-components';
import type { HeaderRowRendererParams } from './types';

const Header = styled.div`
  color: #456297;
  font-weight: 500;
`;

export default function defaultHeaderRowRenderer({
  className,
  columns,
  style,
}: HeaderRowRendererParams) {  
  return (
    <Header className={className} role="row" style={style}>
      {columns}
    </Header>
  );
}
