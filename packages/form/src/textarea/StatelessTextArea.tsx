import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import baseStyle from '../components/FieldBase';

const Area = styled.textarea`
  ${baseStyle};
  height: auto;
  resize: ${({ resize }: { resize?: boolean }) =>
    resize ? 'auto' : 'none'};
`;

Area.defaultProps = {
  theme: defaultTheme,
};

// TODO: Auto expand
type Props = {
  innerRef?: React.RefObject<any>;
  alarm?: boolean;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
  id?: string;
  maxLength?: number;
  minRows?: number;
  onChange?: React.EventHandler<any>;
  placeholder?: string;
  resize?: boolean;
  spellCheck?: boolean;
  style?: React.CSSProperties;
  warning?: boolean;
};

class StatelessTextArea extends React.Component<Props> {
  static defaultProps = {
    alarm: false,
    autoFocus: false,
    defaultValue: '',
    disabled: false,
    id: null,
    maxLength: null,
    minRows: 3,
    onChange: null,
    placeholder: null,
    resize: false,
    spellCheck: false,
    warning: false,
  };

  render() {
    const {
      innerRef,
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
      value,
    } = this.props;
    return (
      <Area
        value={value}
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
        innerRef={innerRef}
        {...this.props}
      />
    );
  }
}

export default StatelessTextArea;
