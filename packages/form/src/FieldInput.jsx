// @flow

import * as React from 'react';
import styled from 'styled-components';

import Label from './components/Label';

const Root = styled.div`
  display: ${props => (props.inline ? 'table' : 'block')};
  margin-bottom: ${props => (props.inline ? '1.866rem' : '1.333rem')};
  position: relative;
  width: 100%;

  ${props =>
    props.inline &&
    `
    > span {
        display: table-cell;
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
  `};
`;

type Props = {
  label: string,
  align: 'left' | 'right',
  inline?: boolean,
  required?: boolean,
  children: React.Node,
};

/**
 * @render react
 * @name FieldInput
 * @desc Couple with input and label
 * @example
 * <FieldInput inline required label="email">
 *   ...
 * </FieldInput>
 */

const FieldInput = ({
  label,
  align,
  inline,
  required,
  children,
  ...props
}: Props) => (
  <Root inline={inline} {...props}>
    <Label text={label} required={required} align={align} />
    {children}
  </Root>
);

FieldInput.defaultProps = {
  inline: false,
  required: false,
};

export default FieldInput;
