// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import baseStyle from '../components/FieldBase';

const Area = styled.textarea`
  ${baseStyle};
  height: auto;
  resize: ${props => (props.resize ? 'auto' : 'none')};
`;

Area.defaultProps = {
  theme: defaultTheme,
};

// TODO: Auto expand
type Props = {
  minRows?: number,
  resize?: boolean,
  disabled?: boolean,
  placeholder?: string,
  defaultValue?: string,
  onChange?: (e: any) => mixed,
  id?: string,
  spellCheck?: boolean,
  autoFocus?: boolean,
  maxLength?: number,
  alarm?: boolean,
  disabled?: boolean,
  warning?: boolean,
  style?: CSSStyleDeclaration,
  className?: string,
};

class StatelessTextArea extends React.Component<Props> {
  static defaultProps = {
    minRows: 3,
    resize: false,
    disabled: false,
    placeholder: null,
    defaultValue: '',
    id: null,
    spellCheck: false,
    autoFocus: false,
    maxLength: null,
    alarm: false,
    warning: false,
    onChange: null,
    style: undefined,
    className: '',
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
      defaultValue,
      onChange,
      id,
      style,
      className,
    } = this.props;
    return (
      <Area
        className={className}
        style={style}
        rows={minRows}
        resize={resize}
        disabled={disabled}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        maxLength={maxLength}
        placeholder={placeholder}
        defaultValue={defaultValue}
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
