/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { transitionBase } from '@vital-ui/react-utils';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';
import { RadioContext } from './RadioContext';

interface RootProps extends BoxProps {
  disabled?: boolean;
}

const Root = styled<RootProps, 'label'>('label')`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin: 0 5px 10px 0;
  word-break: break-word;
  color: ${({ disabled, theme }) => theme.radio.color(disabled)};
  line-height: 1.3333rem;
  font-size: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

  :hover {
    input {
      box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
      border-color: ${({ theme }) => theme.form.focusBorderColor};
    }
  }
  ${superBoxStyle};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

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
    border-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.secondary400 : theme.colors.primary};

    &:after {
      opacity: 1;
      transform: scale(1);
      background: ${({ disabled, theme }) =>
        disabled ? theme.colors.secondary : theme.colors.primary};
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

Input.defaultProps = {
  theme: defaultTheme,
};

const Label = styled.span`
  padding-left: 4px;
`;

interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  defaultChecked?: boolean;
  /** default: `vital__radio` */
  className?: string;
  style?: React.CSSProperties;
  /** default: `vtail_radio-input` */
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
}

const Radio: React.SFC<RadioProps> = ({
  label,
  defaultChecked,
  style,
  className,
  inputClassName,
  inputStyle,
  value,
  onChange,
  ...props
}) => (
  <RadioContext.Consumer>
    {({ name, disabled, seletedValue, onChange: handleChange }) => (
      <Root
        style={style}
        className={cn('vital__radio')}
        disabled={disabled}
      >
        <Input
          className={cn('vital__radio-input', inputClassName)}
          style={inputStyle}
          disabled={disabled}
          type="radio"
          defaultChecked={defaultChecked}
          checked={value === seletedValue}
          name={name}
          onChange={
            handleChange ? () => handleChange(value) : onChange
          }
          {...props}
        />
        <Label>{label}</Label>
      </Root>
    )}
  </RadioContext.Consumer>
);

export default Radio;
