// @flow

import * as React from 'react';
import styled from 'styled-components';
import is from 'styled-is';

const InputElement = styled.input`
  vertical-align: middle;
  display: block;
  width: 100%;
  padding: 0.46633rem 0.8rem;
  font-size: 1rem;
  line-height: 1;
  height: 1.93267rem;
  box-sizing: border-box;
  color: #456297;
  background-color: #ffffff;
  border: 1px solid #c4d2eb;
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  outline: 0;
  z-index: 5;

  &::placeholder {
    color: #95acd4;
  }

  &:focus {
    outline: 0;
    border: 1px solid #0e86fe;
    box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
    z-index: 7;
  }

  &:disabled {
    pointer-events: none;
    border-color: #c4d2eb;
    background-color: #eef2fc;

    ${is('alarm')`
      pointer-events: none;
      background-color: #FFD0B8;
      border-color: #EB5000;

      &::placeholder {
        color: #EB5000;
      }
  `};
  }

  ${is('alarm')`
    border-color: #EB5000;
  `} ${is('warning')`
    border-color: #FFB400;
  `};
`;

type Props = {
  /** Html attr */
  type?: string,
  /** Html attr */
  placeholder?: string,
  /** value of input */
  value: string,
  /** Default value of input */
  defaultValue?: string,
  /** Disabled state */
  isDisabled?: boolean,
  /** Alarm state */
  isAlarm?: boolean,
  /** Warning State */
  isWarning?: boolean,
  /** Auto Focus attr */
  autoFocus?: boolean,
  /** Spell check attr */
  isSpellCheck?: boolean,
};

class StatelessInput extends React.Component<Props> {
  static defaultProps ={
    type: 'text',
  }
  input: any;

  focus = () => {
    this.input.focus();
  }

  render() {
    return (
      <InputElement
        value={this.props.value}
        defaultValue={this.props.defaultValue}
        type={this.props.type}
        placeholder={this.props.placeholder}
        disabled={this.props.isDisabled}
        alarm={this.props.isAlarm}
        warning={this.props.isWarning}
        autoFocus={this.props.autoFocus}
        spellCheck={this.props.isSpellCheck}
        ref={input => {
          this.input = input;
        }}
        {...this.props}
      />
    );
  }
}

export default StatelessInput;
