/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { Component } from 'react';
import styled, { withTheme, css } from 'styled-components';
import cn from 'classnames';
import Icon from '@vital-ui/react-icon';
import { defaultTheme } from '@vital-ui/react-theme';

const Root = styled.div``;

const Input = styled.input`
  display: none;

  &:checked {
    & + label {
      background-color: ${({ theme }) => theme.form.switch.checked};
      box-shadow: 0 0 0 1px
        ${({ theme }) => theme.form.switch.checked};

      div {
        transform: translate3d(30px, 0, 0);
        border-color: ${({ theme }) => theme.form.switch.checked};
        box-shadow: 0 0 0 3px rgba(14, 134, 254, 0.3);
      }
    }
  }

  &:disabled {
    & + label {
      background-color: ${({ theme }) => theme.form.switch.disabled};
      cursor: not-allowed;
      point-events: none;

      div {
        background-color: ${({ theme }) =>
          theme.form.switch.disabled};
        box-shadow: none;
      }
    }
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const Label = styled.label`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 53px;
  height: 24px;
  border-radius: ${props => (props.isRound ? '24px' : '4px')};
  background-color: ${({ theme }) => theme.form.switch.label.bg};
  padding: 1px;
  box-shadow: 0 0 0 1px
    ${({ theme }) => theme.form.switch.label.shadowColor};
  cursor: pointer;
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const Btn = styled.div`
  width: 22px;
  height: 22px;
  border-radius: ${props => (props.isRound ? '50%' : '4px')};
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
      color: ${theme.form.switch.icon};
    `};
`;

Btn.defaultProps = {
  theme: defaultTheme,
};

const Text = styled.div`
  position: absolute;
  top: 3px;
  right: 8px;
  font-size: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.form.switch.label.color};
  text-align: center;
  transition: all 300ms ease-in;
  opacity: 1;
  pointer-events: none;
`;

Text.defaultProps = {
  theme: defaultTheme,
};

const TextOff = styled(Text)`
  display: ${props => (props.checked ? 'none' : 'block')};
`;

const TextOn = styled(Text)`
  display: ${props => (props.checked ? 'block' : 'none')};
  left: -20px;
`;

type State = {
  checked: boolean,
};

type Props = {
  defaultChecked?: boolean,
  isRound?: boolean,
  disabled?: boolean,
  iconBtn?: string,
  iconLabelFront?: string,
  iconLabelBack?: string,
  theme: Object,
  className?: string,
  style?: CSSStyleDeclaration,
};

/**
 * @render react
 * @name Switch
 * @description Toggle boolean value
 * @example
 * <Switch
 *  isRound
 * />
 */
class Switch extends Component<Props, State> {
  static defaultProps = {
    defaultChecked: false,
    isRound: false,
    disabled: false,
    iconBtn: null,
    iconLabelFront: null,
    iconLabelBack: null,
    style: undefined,
    className: '',
  };

  state = {
    checked: this.props.defaultChecked || false,
  };

  onCheck = () => {
    if (this.props.disabled) return;
    this.setState(prevState => ({ checked: !prevState.checked }));
  };

  render() {
    const {
      isRound,
      disabled,
      iconBtn,
      iconLabelFront,
      iconLabelBack,
      theme,
      style,
      className,
    } = this.props;
    return (
      <Root
        style={style}
        className={cn('vital__switch', className)}
        onClick={this.onCheck}
      >
        <Input
          type="checkbox"
          checked={this.state.checked}
          disabled={disabled}
        />
        <Label isRound={isRound} disabled={disabled}>
          {iconLabelFront && (
            <TextOn checked={this.state.checked}>
              <Icon name={iconLabelFront} color={theme.white} />
            </TextOn>
          )}
          {iconLabelBack && (
            <TextOff checked={this.state.checked}>
              <Icon
                name={iconLabelBack}
                color={theme.form.switch.icon}
              />
            </TextOff>
          )}
          <Btn icon={iconBtn} isRound={isRound} disabled={disabled}>
            {iconBtn && (
              <Icon
                color={
                  this.state.checked
                    ? theme.form.switch.checked
                    : theme.form.switch.icon
                }
                name={iconBtn}
                size="17"
              />
            )}
          </Btn>
        </Label>
      </Root>
    );
  }
}

export default withTheme(Switch);
