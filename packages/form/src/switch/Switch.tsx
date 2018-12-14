/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';
import { Box, BoxProps, superBoxStyle } from '@vital-ui/react-utils';
import { defaultTheme } from '@vital-ui/react-theme';

type BtnProps = {
  round?: boolean;
  icon?: any;
  disabled?: boolean;
};

const Btn = styled('div')<BtnProps>`
  width: ${({ theme }) => theme.switch.buttonSize};
  height: ${({ theme }) => theme.switch.buttonSize};
  border-radius: ${props => (props.round ? '50%' : '4px')};
  background-color: #ffffff;
  display: block;
  box-shadow: 1px 0 0 1px rgba(196, 210, 235, 0.2);
  transition: all 120ms ease-in;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.form.borderColor};

  ${({ theme, icon }) =>
    icon &&
    css`
      width: 36px;
      height: 36px;
      position: absolute;
      top: -6px;
      left: -6px;
      text-align: center;
      line-height: 36px;
      font-size: 1.2rem;
      color: ${theme.switch.icon};
    `};

  ${superBoxStyle};
`;

Btn.defaultProps = {
  theme: defaultTheme,
};

const checkedStyle = css`
  &:checked {
    & + label {
      background-color: ${({ theme }) => theme.switch.checked};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.switch.checked};

      ${Btn} {
        transform: translate3d(30px, 0, 0);
        border-color: ${({ theme }) => theme.switch.checked};
        box-shadow: ${({ theme }) => theme.switch.shadow};
      }
    }
  }
`;

const disabledStyle = css`
  &:disabled {
    & + label {
      background-color: ${({ theme }) => theme.switch.disabled};
      cursor: not-allowed;
      point-events: none;

      ${Btn} {
        background-color: ${({ theme }) => theme.switch.disabled};
        box-shadow: none;
      }
    }
  }
`;

const Input = styled.input`
  display: none;

  ${checkedStyle};
  ${disabledStyle};
`;

Input.defaultProps = {
  theme: defaultTheme,
};

type LabelProps = { round?: boolean; disabled?: boolean };

const Label = styled('label')<LabelProps>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 53px;
  height: 24px;
  border-radius: ${props => (props.round ? '24px' : '4px')};
  background-color: ${({ theme }) => theme.switch.label.bg};
  padding: 1px;
  color: #fff;
  box-shadow: 0 0 0 1px
    ${({ theme }) => theme.switch.label.shadowColor};
  cursor: pointer;
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const Text = styled('div')<TextProps>`
  position: absolute;
  top: 3px;
  right: 8px;
  font-size: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  color: ${({ theme, checked }) =>
    checked
      ? theme.switch.label.checkedColor
      : theme.switch.label.color};
  text-align: center;
  transition: all 300ms ease-in;
  opacity: 1;
  pointer-events: none;
`;

Text.defaultProps = {
  theme: defaultTheme,
};

type TextProps = { checked?: boolean };

// @ts-ignore
const TextOff = styled(Text)<{ checked?: boolean }>`
  display: ${props => (props.checked ? 'none' : 'block')};
`;

// @ts-ignore
const TextOn = styled(Text)<{ checked?: boolean }>`
  display: ${props => (props.checked ? 'block' : 'none')};
  left: 8px;
`;

type State = {
  checked: boolean;
};

type Props = {
  defaultChecked?: boolean;
  round?: boolean;
  disabled?: boolean;
  iconLabelBack?: string;
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  off?: React.ReactNode;
  on?: React.ReactNode;
  icon?: React.ReactNode;
  buttonProps?: BoxProps;
  button?: React.ReactNode;
} & BoxProps;

/**
 * @render react
 * @name Switch
 * @description Toggle boolean value
 * @example
 * <Switch
 *  round
 * />
 */
export class Switch extends Component<Props, State> {
  static defaultProps = {
    round: false,
    disabled: false,
    iconBtn: undefined,
    iconLabelFront: undefined,
    iconLabelBack: undefined,
  };

  onCheck = () => {
    if (this.props.disabled) {
      return;
    }
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  };

  render() {
    const {
      round,
      disabled,
      style,
      className,
      checked,
      defaultChecked,
      iconLabelBack,
      onChange,
      off,
      on,
      icon,
      button,
      buttonProps,
      ...rest
    } = this.props;
    return (
      <Box
        display="inline-block"
        style={style}
        className={cn('vital__switch', className)}
        onClick={this.onCheck}
        {...rest}
      >
        <Input
          defaultChecked={defaultChecked}
          type="checkbox"
          checked={checked}
          onChange={() => {}}
          disabled={disabled}
        />
        <Label round={round} disabled={disabled}>
          <TextOff checked={checked}>{off}</TextOff>
          {button ? (
            button
          ) : (
            <Btn round={round} disabled={disabled} {...buttonProps}>
              {icon}
            </Btn>
          )}
          <TextOn checked={checked}>{on}</TextOn>
        </Label>
      </Box>
    );
  }
}
