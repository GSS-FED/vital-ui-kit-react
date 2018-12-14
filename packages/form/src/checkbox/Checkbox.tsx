/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { CheckIcon } from './CheckIcon';
import { defaultTheme } from '@vital-ui/react-theme';
import cn from 'classnames';
import { CheckboxContext } from './CheckboxContext';

const Root = styled.label`
  font-size: 15px;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    > span:first-child {
      box-shadow: ${({ theme }) =>
        `0 0 0 2px ${rgba(theme.colors.primary, 0.2)}`};
    }
  }
`;

Root.defaultProps = {
  theme: defaultTheme,
};

const Label = styled.span`
  color: ${({ theme }) => theme.checkbox.label.color};
`;

Label.defaultProps = {
  theme: defaultTheme,
};

interface CheckWrapper {
  checked?: boolean;
  round?: boolean;
}

const CheckWrapper = styled('span')<CheckWrapper>`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 1.066rem;
  height: 1.066rem;
  border: ${({ theme }) => `1px solid ${theme.checkbox.borderColor}`};
  border-radius: ${props => (props.round ? '50%' : '2px')};
  background-color: ${({ checked, round, theme }) =>
    checked
      ? theme.checkbox.checkedBg
      : round
      ? theme.checkbox.roundBg
      : theme.checkbox.bg};
  transition: ${({ theme }) => theme.defaultTransition};
  margin: -2px 0.6em 0 0;
  vertical-align: middle;

  border-color: ${({ checked, theme }) =>
    checked ? theme.checkbox.checkedBorderColor : ''};
`;

CheckWrapper.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  display: none;
`;

interface IconWrapperProps {
  checked?: boolean;
  round?: boolean;
  disabled?: boolean;
}

const IconWrapper = styled('div')<IconWrapperProps>`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')};
  pointer-events: none;
  transition: all 120ms ease-out;
  color: ${({ round, disabled, theme }) =>
    iconColor(round, disabled, theme)};
`;

IconWrapper.defaultProps = {
  theme: defaultTheme,
};

export interface CheckboxProps {
  /** Boolean checked value of the checkbox */
  checked?: boolean;
  /** Inital Check value */
  defaultChecked?: boolean;
  /** Disabled checkbox */
  disabled?: boolean;
  /** Round style */
  round?: boolean;
  /** Custom checkbox Icon */
  icon?: React.ReactNode | ((props: any) => React.ReactNode);
  /** Label text after the checkbox */
  label?: string;
  /** Html name attribute */
  name?: string;
  /** Function trigger when checkbox value changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onValueChange?: (value: boolean) => void;
  /** Theme */
  theme?: any;
  style?: React.CSSProperties;
  /** default: `vital__checkbox` */
  className?: string;
}

function iconColor(
  round?: boolean,
  disabled?: boolean,
  theme: any = defaultTheme,
) {
  if (disabled) {
    return theme.checkbox.icon.disabledColor;
  }
  if (round) {
    return theme.checkbox.icon.roundColor;
  }
  return theme.checkbox.icon.color;
}

/**
 * @render react
 * @name Checkbox
 * @description Checkbox components with group
 * @example
 * <Checkbox.Group>
 *  <Checkbox
 *    round
 *    label="checkbox 1"
 *  />
 *  <Checkbox
 *    round
 *    label="checkbox 2"
 *  />
 *  <Checkbox
 *    round
 *    label="checkbox 3"
 *  />
 * </Checkbox.Group>
 */
export class Checkbox extends React.Component<CheckboxProps> {
  static defaultProps = {
    disabled: false,
    round: false,
    icon: undefined,
    theme: defaultTheme,
    style: undefined,
    className: '',
  };

  render() {
    const {
      defaultChecked,
      disabled = false,
      icon,
      label,
      name,
      round = false,
      theme,
      style,
      className,
      onChange,
      onValueChange,
      ...props
    } = this.props;

    return (
      <CheckboxContext.Consumer>
        {({
          round: contextRound,
          disabled: contextDisabled,
          icon: contextIcon,
        }) => (
          <Root
            style={style}
            className={cn('vital__checkbox', className)}
            {...props}
          >
            <CheckWrapper
              checked={this.props.checked}
              round={contextRound || round}
            >
              <IconWrapper checked={this.props.checked}>
                {contextIcon || icon || <CheckIcon />}
              </IconWrapper>
            </CheckWrapper>
            <Label>
              <Input
                type="checkbox"
                disabled={contextDisabled || disabled}
                checked={this.props.checked}
                defaultChecked={defaultChecked}
                name={name}
                onChange={e => {
                  if (onChange) {
                    onChange(e);
                  }
                  if (onValueChange) {
                    onValueChange(!this.props.checked);
                  }
                }}
              />
              {label}
            </Label>
          </Root>
        )}
      </CheckboxContext.Consumer>
    );
  }
}
