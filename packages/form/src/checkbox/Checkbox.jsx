/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { rgba } from 'polished';
import Icon from '@vital-ui/react-icon';
import { defaultTheme } from '@vital-ui/react-theme';
import cn from 'classnames';

import CheckboxGroup from './CheckboxGroup';

const Root = styled.label`
  font-size: 15px;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    > span:first-child {
      box-shadow: ${({ theme }) =>
        `0 0 0 2px ${rgba(theme.primary, 0.2)}`};
    }
  }
`;
const Label = styled.span`
  color: ${({ theme }) => theme.checkbox.label.color};
`;

const Box = styled.span`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 1.066rem;
  height: 1.066rem;
  border: ${({ theme }) => `1px solid ${theme.checkbox.borderColor}`};
  border-radius: ${props => (props.round ? '50%' : '2px')};
  background-color: ${({ checked, round, theme }) =>
    theme.checkbox.bg(checked && round)};
  transition: ${({ theme }) => theme.defaultTransition};
  margin: -2px 0.6em 0 0;
  vertical-align: middle;

  border-color: ${({ checked, theme }) =>
    checked ? theme.checkbox.checkedBorderColor : ''};
`;

const Input = styled.input`
  display: none;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')};
  pointer-events: none;
  transition: all 120ms ease-out;
`;

type State = {
  checked: boolean,
};

export type Props = {
  /** Boolean checked value of the checkbox */
  checked: boolean,
  /** Inital Check value */
  defaultChecked?: boolean,
  /** Disabled checkbox */
  disabled?: boolean,
  /** Round style */
  round?: boolean,
  /** Custom checkbox Icon */
  icon?: React.Node,
  /** Label text after the checkbox */
  label: string,
  /** Html name attribute */
  name: string,
  /** Function trigger when checkbox value changes */
  onChange: (props: any) => {},
  /** Theme */
  theme?: Object,
  /** Value of the checkbox, html value attribute */
  value: number | string,
  style?: CSSStyleDeclaration,
  /** default: `vital__checkbox` */
  className?: string,
};

function iconColor(round, disabled, theme = defaultTheme) {
  if (disabled) {
    return theme.checkbox.icon.disabledColor;
  }
  if (round) {
    return theme.checkbox.icon.roundColor;
  }
  return theme.checkbox.icon.color;
}

/** @render react
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

class Checkbox extends React.Component<Props, State> {
  static defaultProps = {
    defaultChecked: false,
    disabled: false,
    round: false,
    icon: undefined,
    theme: defaultTheme,
    style: undefined,
    className: '',
  };

  static Group = CheckboxGroup;

  state = {
    checked:
      'checked' in this.props
        ? this.props.checked
        : this.props.defaultChecked || false,
  };

  static getDerivedStateFromProps(props: Props) {
    if ('checked' in props) {
      return {
        checked: props.checked,
      };
    }
    return null;
  }

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { disabled, ...props } = this.props;
    if (disabled) return;
    this.props.onChange({
      target: {
        ...props,
        checked: e.target.checked,
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    });
  };

  render() {
    const {
      defaultChecked,
      disabled,
      icon,
      label,
      name,
      round,
      theme,
      value,
      style,
      className,
      ...props
    } = this.props;

    const customIcon = icon && typeof icon !== 'string';

    return (
      <Root
        style={style}
        className={cn('vital__checkbox', className)}
        {...props}
      >
        <Box
          checked={this.state.checked}
          disabled={disabled}
          round={round}
        >
          <IconWrapper
            checked={this.state.checked}
            disabled={disabled}
          >
            {customIcon || (
              <Icon
                name={icon || 'check'}
                size="12"
                color={iconColor(round, disabled, theme)}
              />
            )}
          </IconWrapper>
        </Box>
        <Label checked={this.state.checked} disabled={disabled}>
          <Input
            type="checkbox"
            disabled={disabled}
            checked={this.state.checked}
            defaultChecked={defaultChecked}
            name={name}
            value={value}
            onChange={() => this.handleChange}
          />
          {label}
        </Label>
      </Root>
    );
  }
}

export default withTheme(Checkbox);
