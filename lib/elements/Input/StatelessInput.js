// @flow

import * as React from 'react';
import styled from 'styled-components';

import baseStyle from '../FieldBase';

const InputElement = styled.input`
  ${baseStyle};
  vertical-align: middle;
  height: 1.93267rem;
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
