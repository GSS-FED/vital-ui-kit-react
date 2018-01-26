import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  display: table;
  border-collapse: separate;
`;

const LabelCell = styled.div`
  display: table-cell;
  vertical-align: top;

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
`;

type Props = {
  firstInput: React.Node,
  secondInput: React.Node,
};

const MultipleInput = ({ firstInput, secondInput }: Props) => (
  <Root>
    <LabelCell>{firstInput}</LabelCell>
    <LabelCell>{secondInput}</LabelCell>
  </Root>
);

export default MultipleInput;
