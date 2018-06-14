/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { rgba } from 'polished';

import CheckboxGroup from './CheckboxGroup';
import Icon from '../Icon';

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
  border-radius: ${props => (props.isRound ? '50%' : '2px')};
  background-color: ${({ isChecked, isRound, theme }) =>
    theme.checkbox.bg(isChecked && isRound)};
  transition: ${({ theme }) => theme.defaultTransition};
  margin: -2px 0.6em 0 0;
  vertical-align: middle;

  border-color: ${({ isChecked, theme }) =>
    isChecked ? theme.checkbox.checkedBorderColor : ''};
`;

const Input = styled.input`
  display: none;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
  transform: ${({ isChecked }) =>
    isChecked ? 'scale(1)' : 'scale(0)'};
  pointer-events: none;
  transition: all 120ms ease-out;
`;

type State = {
  checked: boolean,
};

export type Props = {
  /** Checkbox is checked at start if true */
  defaultChecked?: boolean,
  /** is Checked ? */
  checked: boolean,
  /** Disabled checkbox */
  isDisabled?: boolean,
  /** Round style */
  isRound?: boolean,
  /** Label text after the checkbox */
  label: string,
  /** Html name attribute */
  name: string,
  /** Value of the checkbox, html value attribute */
  value: number | string,
  /** Function trigger when checkbox value changes */
  onChange: (props: any) => {},
  /** Theme */
  theme: Object,
};

function iconColor(isRound, isDisabled, theme) {
  if (isDisabled) {
    return theme.checkbox.icon.disabledColor;
  }
  if (isRound) {
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
 *    isRound
 *    label="checkbox 1"
 *  />
 *  <Checkbox
 *    isRound
 *    label="checkbox 2"
 *  />
 *  <Checkbox
 *    isRound
 *    label="checkbox 3"
 *  />
 * </Checkbox.Group>
 */

class Checkbox extends Component<Props, State> {
  static defaultProps = {
    defaultChecked: false,
    isDisabled: false,
    isRound: false,
    onChange: () => {},
  };

  static Group = CheckboxGroup;

  state = {
    checked:
      'checked' in this.props
        ? this.props.checked
        : this.props.defaultChecked || false,
  };

  static getDerivedStateFromProps(props) {
    if ('checked' in props) {
      return {
        checked: props.checked,
      };
    }
    return null;
  }

  handleChange = e => {
    const { isDisabled, ...props } = this.props;
    if (isDisabled) return;
    this.props.onChange({
      target: {
        ...props,
        checked: e.target.checked,
      },
      stopPopagation() {
        e.stopPopagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    });
  };

  render() {
    const {
      label,
      defaultChecked,
      name,
      value,
      isDisabled,
      isRound,
      theme,
    } = this.props;
    return (
      <Root {...this.props}>
        <Box
          isChecked={this.state.checked}
          isDisabled={isDisabled}
          isRound={isRound}
        >
          <IconWrapper
            isChecked={this.state.checked}
            isDisabled={isDisabled}
          >
            <Icon
              name="check"
              size="12"
              color={iconColor(isRound, isDisabled, theme)}
            />
          </IconWrapper>
        </Box>
        <Label isChecked={this.state.checked} isDisabled={isDisabled}>
          <Input
            type="checkbox"
            disabled={isDisabled}
            checked={this.state.checked}
            defaultChecked={defaultChecked}
            name={name}
            value={value}
            // onChange={() => this.handleChange}
          />
          {label}
        </Label>
      </Root>
    );
  }
}

export default withTheme(Checkbox);
