// @flow

import * as React from 'react';
import styled from 'styled-components';

import baseStyle from '../components/FieldBase';

const Area = styled.textarea`
  ${baseStyle};
  height: auto;
  resize: ${props => (props.resize ? 'auto' : 'none')};
`;

// TODO: Auto expand
type Props = {
  minRows?: number,
  resize?: boolean,
  disabled?: boolean,
  placeholder?: string,
  value?: string,
  onChange?: () => any,
  id?: string,
  spellCheck?: boolean,
  autoFocus?: boolean,
  maxLength?: number,
  alarm?: boolean,
  disabled?: boolean,
  warning?: boolean,
};

class StatelessTextArea extends React.Component<Props> {
  input: any;

  focus = () => {
    this.input.focus();
  };

  render() {
    const {
      minRows,
      resize,
      disabled,
      spellCheck,
      autoFocus,
      maxLength,
      placeholder,
      value,
      onChange,
      id,
    } = this.props;
    return (
      <Area
        rows={minRows}
        resize={resize}
        disabled={disabled}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        ref={input => {
          this.input = input;
        }}
        {...this.props}
      />
    );
  }
}

export default StatelessTextArea;
