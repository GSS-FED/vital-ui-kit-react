// @flow

import * as React from 'react';
import styled from 'styled-components';
import is from 'styled-is';

import { Label } from '../../';

const Root = styled.div`
  display: ${props => props.inline ? 'table' : 'block'};
  margin-bottom: ${props => props.inline ? '1.866rem' : '1.333rem'};
  position: relative;
  width: 100%;

  ${is('inline')`
     > * {
       display: table-cell;
     }

     > span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 1%;
      min-width: 8rem;
      padding-right: 1.2rem;
      line-height: 1;
      vertical-align: top;
      padding-top: calc(0.46633rem + 2px);
     }
  `}
`;

type Props = {
  label: string,
  align: string,
  inline?: boolean,
  isRequired?: boolean,
  children: React.Node,
}

const FieldInput = ({ label, align, inline, isRequired, children }: Props) => (
  <Root inline={inline}>
    <Label text={label} isRequired={isRequired} align={align} />
    {children}
  </Root>
);

export default FieldInput;
