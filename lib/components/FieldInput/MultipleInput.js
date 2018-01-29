/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import is from 'styled-is';
import styled from 'styled-components';
import Addon from '../../elements/Input/Addon';
import ButtonGroup from '../../elements/Button/';

const Root = styled.div`
  position: relative;
  display: table;
  width: 100%;
  border-collapse: separate;
`;

const LabelCell = styled.div`
  display: table-cell;
  vertical-align: middle;

  &:not(:first-child) > * {
    width: calc(100% + 2px);
    margin-left: -1px;
    margin-right: 0;
  }

  &:last-child > * {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:first-child > * {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:not(:first-child):not(:last-child) > * {
    border-radius: 0;
  }

  ${is('addon')`
    width: 1%;
    white-space: nowrap;
  `};

  ${is('buttons')`
    position: relative;
    font-size: 0;
    width: 1%;
    white-space: nowrap;
  `}
`;

type Props = {
  children: React.Node,
};

const MultipleInput = ({ children }: Props) => (
  <Root>
    {children.map((child, i) => (
      <LabelCell addon={child.type === Addon} buttons={child.type === ButtonGroup} key={i}>
        {child}
      </LabelCell>
    ))}
  </Root>
);

export default MultipleInput;
