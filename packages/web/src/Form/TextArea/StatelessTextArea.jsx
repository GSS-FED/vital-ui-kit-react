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
  onChange?: (e: any) => mixed,
  id?: string,
  spellCheck?: boolean,
  autoFocus?: boolean,
  maxLength?: number,
  alarm?: boolean,
  disabled?: boolean,
  warning?: boolean,
};

class StatelessTextArea extends React.Component<Props> {
  static defaultProps = {
    minRows: 3,
    resize: false,
    disabled: false,
    placeholder: null,
    value: '',
    id: null,
    spellCheck: false,
    autoFocus: false,
    maxLength: null,
    alarm: false,
    warning: false,
    onChange: null,
  };

  focus = () => {
    this.input.focus();
  };

  input: any;

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
