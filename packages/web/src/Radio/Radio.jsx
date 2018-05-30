/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { transitionBase } from '../utils';

const Root = styled.label`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin: 0 5px 10px 0;
  word-break: break-word;
  color: ${({ isDisabled, theme }) =>
    theme.radio.color(isDisabled)};
  line-height: 1.3333rem;
  font-size: 1rem;
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.isDisabled ? 'none' : 'auto')};

  :hover {
    input {
      box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
      border-color: ${({ theme }) => theme.form.focusBorderColor};
    }
  }
`;

const Input = styled.input`
  vertical-align: middle;
  appearance: none;
  outline: none;
  position: relative;
  box-sizing: content-box;
  margin: -2px 0 0 0;
  width: 15px;
  height: 15px;
  border: 1px solid ${({ theme }) => theme.form.borderColor};
  border-radius: 50%;
  background-color: #ffffff;
  ${transitionBase};
  cursor: pointer;

  &:checked {
    border-color: ${({ isDisabled, theme }) =>
      isDisabled ? theme.primary400 : theme.secondary};

    &:after {
      opacity: 1;
      transform: scale(1);
      background: ${({ isDisabled, theme }) =>
        isDisabled ? theme.primary : theme.secondary};
    }
  }

  &:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    top: calc((15px - 9px) / 2);
    left: calc((15px - 9px) / 2);
    border-radius: 50%;
    background: transparent;
    opacity: 0;
    pointer-events: none;
    transform: scale(0);
    ${transitionBase};
  }
`;

const Label = styled.span`
  padding-left: 4px;
`;

type Props = {
  label: string,
  name: string,
  value: string,
  defaultChecked?: boolean,
  isDisabled?: boolean,
  onChange: () => void
};

const Radio = ({
  isDisabled,
  label,
  value,
  defaultChecked,
  name,
  onChange,
  ...props
}: Props) => (
  <Root isDisabled={isDisabled}>
    <Input
      isDisabled={isDisabled}
      type="radio"
      defaultChecked={defaultChecked}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
    <Label isDisabled={isDisabled}>
      {label}
    </Label>
  </Root>
);

Radio.defaultProps = {
  defaultChecked: false,
  isDisabled: false
};

export default Radio;
