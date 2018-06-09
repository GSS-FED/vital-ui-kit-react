/** @flow */
import * as React from 'react';
import styled from 'styled-components';
import type { HeaderRowRendererParams } from './types';

const HeaderRow = styled.div`
  color: #456297;
  font-weight: 500;
  border-bottom: 1px solid #D8e3f6;
`;

export default function defaultHeaderRowRenderer({
  className,
  columns,
  style,
}: HeaderRowRendererParams) {  
  return (
    <HeaderRow className={className} role="row" style={style}>
      {columns}
    </HeaderRow>
  );
}
