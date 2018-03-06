// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import Icon from './Icon/';

const Root = styled.div``;

const Input = styled.input`
  display: none;

  &:checked {
    & + label {
      background-color: #0e86fe;
      box-shadow: 0 0 0 1px #0e86fe;

      div {
        transform: translate3d(30px, 0, 0);
        border-color: #0e86fe;
        box-shadow: 0 0 0 3px rgba(14, 134, 254, 0.3);
      }
    }
  }

  &:disabled {
    & + label {
      background-color: #eef2fc;
      cursor: not-allowed;
      point-events: none;

      div {
        background-color: #eef2fc;
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
  background-color: #eef2fc;
  padding: 1px;
  box-shadow: 0 0 0 1px #c4d2eb;
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
  border: 1px solid #c4d2eb;

  ${is('icon')`
    width: 36px;
    height: 36px;
    position: absolute;
    top: -6px;
    left: -6px;
    text-align: center;
    line-height: 36px;
    font-size: 1.2rem;
    color: #C4D2EB;
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
  color: #c4d2eb;
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
  isChecked: boolean,
};

type Props = {
  defaultChecked?: boolean,
  isRound?: boolean,
  isDisabled?: boolean,
  iconBtn?: string,
  iconLabelFront?: string,
  iconLabelBack?: string,
};

class Switch extends PureComponent<Props, State> {
  state = {
    isChecked: this.props.defaultChecked || false,
  };

  onCheck = () => {
    if (this.props.isDisabled) return;
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const {
      defaultChecked,
      isRound,
      isDisabled,
      iconBtn,
      iconLabelFront,
      iconLabelBack,
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
              <Icon name={iconLabelFront} color="#FFFFFF" />
            </TextOn>
          )}
          {iconLabelBack && (
            <TextOff isChecked={this.state.isChecked}>
              <Icon name={iconLabelBack} color="#C4D2EB" />
            </TextOff>
          )}
          <Btn icon={iconBtn} isRound={isRound} isDisabled={isDisabled}>
            {iconBtn && (
              <Icon
                color={this.state.isChecked ? '#0e86fe' : '#C4D2EB'}
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

export default Switch;

