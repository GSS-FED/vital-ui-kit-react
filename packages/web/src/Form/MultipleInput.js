/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import styled from 'styled-components';
import Addon from './components/Addon';

const Root = styled.div`
  position: relative;
  display: table;
  width: 100%;
  border-collapse: separate;
`;

const LabelCell = styled.div`
  display: table-cell;
  vertical-align: middle;

  > * {
    width: calc(100% + 2px);
  }

  &:not(:first-child) > * {
    margin-left: -1px;
    margin-right: 0;
  }

  &:last-child {
    * {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &:first-child {
    * {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  &:not(:first-child):not(:last-child) {
    * {
      border-radius: 0;
    }
  }

  ${props => props.addon && `
    width: 1%;
    white-space: nowrap;
  `};
`;

type Props = {
  children: React.ReactNode,
};

const MultipleInput = ({ children }: Props) => (
  <Root>
    {children.map((child, i) => (
      <LabelCell
        addon={child.type === Addon}
        key={i}>
        {child}
      </LabelCell>
    ))}
  </Root>
);

export default MultipleInput;
