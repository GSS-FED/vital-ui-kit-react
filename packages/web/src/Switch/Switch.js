/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../Icon';

const Root = styled.div``;

const Input = styled.input`
  display: none;

  &:checked {
    & + label {
      background-color: ${({ theme }) => theme.secondary[4]};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.secondary[4]};

      div {
        transform: translate3d(30px, 0, 0);
        border-color: ${({ theme }) => theme.secondary[4]};
        box-shadow: 0 0 0 3px rgba(14, 134, 254, 0.3);
      }
    }
  }

  &:disabled {
    & + label {
      background-color: ${({ theme }) => theme.primarylist[1]};
      cursor: not-allowed;
      point-events: none;

      div {
        background-color: ${({ theme }) => theme.primarylist[1]};
        box-shadow: none;
      }
    }
  }
`;

const Label = styled.label`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 53px;
  height: 24px;
  border-radius: ${props => (props.isRound ? '24px' : '4px')};
  background-color: ${({ theme }) => theme.primarylist[1]};
  padding: 1px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.primarylist[3]};
  cursor: pointer;
`;

const Btn = styled.div`
  width: 22px;
  height: 22px;
  border-radius: ${props => (props.isRound ? '50%' : '4px')};
  background-color: #ffffff;
  display: block;
  box-shadow: 1px 0 0 1px rgba(196, 210, 235, 0.2);
  transition: all 120ms ease-in;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.primarylist[3]};

  ${props =>
    props.icon &&
    `
    width: 36px;
    height: 36px;
    position: absolute;
    top: -6px;
    left: -6px;
    text-align: center;
    line-height: 36px;
    font-size: 1.2rem;
    color: ${props.theme.primarylist[3]};
  `};
`;

const Text = styled.div`
  position: absolute;
  top: 3px;
  right: 8px;
  font-size: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.primarylist[3]};
  text-align: center;
  transition: all 300ms ease-in;
  opacity: 1;
  pointer-events: none;
`;

const TextOff = styled(Text)`
  display: ${props => (props.isChecked ? 'none' : 'block')};
`;

const TextOn = styled(Text)`
  display: ${props => (props.isChecked ? 'block' : 'none')};
  left: -20px;
`;

type State = {
  isChecked: boolean
};

type Props = {
  defaultChecked?: boolean,
  isRound?: boolean,
  isDisabled?: boolean,
  iconBtn?: string,
  iconLabelFront?: string,
  iconLabelBack?: string,
  theme: Object
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
    isRound: false,
    isChecked: false
  };

  state = {
    isChecked: this.props.defaultChecked
  };

  onCheck = () => {
    if (this.props.isDisabled) return;
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    const {
      defaultChecked,
      isRound,
      isDisabled,
      iconBtn,
      iconLabelFront,
      iconLabelBack,
      theme
    } = this.props;
    return (
      <Root onClick={this.onCheck}>
        <Input
          type="checkbox"
          checked={this.state.isChecked}
          defaultChecked={defaultChecked}
          disabled={isDisabled}
        />
        <Label isRound={isRound} isDisabled={isDisabled}>
          {iconLabelFront && (
            <TextOn isChecked={this.state.isChecked}>
              <Icon name={iconLabelFront} color={theme.white} />
            </TextOn>
          )}
          {iconLabelBack && (
            <TextOff isChecked={this.state.isChecked}>
              <Icon
                name={iconLabelBack}
                color={theme.primarylist[3]}
              />
            </TextOff>
          )}
          <Btn
            icon={iconBtn}
            isRound={isRound}
            isDisabled={isDisabled}
          >
            {iconBtn && (
              <Icon
                color={
                  this.state.isChecked
                    ? theme.secondaryList[4]
                    : theme.primarylist[3]
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
