// @flow

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.label`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin: 0 5px 10px 0;
  word-break: break-word;
  color: ${props => props.isDisabled ? '#95ACD4' : '#456297'};
  line-height: 1.3333rem;
  font-size: 1rem;
  cursor: ${props => props.isDisabled? 'not-allowed' : 'pointer'};;
  pointer-events: ${props => props.isDisabled? 'none' : 'auto'};

  :hover {
    input {
      box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
      border-color: #0e86fe;
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
  border: 1px solid #c4d2eb;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all 120ms ease-out;
  cursor: pointer;

  &:checked {
    border-color: ${props => props.isDisabled ? '#C4D2EB' : '#0e86fe'};

    &:after {
      opacity: 1;
      transform: scale(1);
      background: ${props => props.isDisabled ? '#95ACD4' : '#0e86fe'};
    }
  }

  &:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    top: calc((15px - 9px)/2);
    left: calc((15px - 9px)/2);
    border-radius: 50%;
    background: transparent;
    opacity: 0;
    pointer-events: none;
    transform: scale(0);
    transition: all 120ms ease-out;
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
  onChange: () => void,
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
    <Label isDisabled={isDisabled}>{label}</Label>
  </Root>
);

export default Radio;
