import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import baseStyle from '../components/FieldBase';

const Area = styled.textarea`
  ${baseStyle};
  height: auto;
  resize: ${({ resizeable }: { resizeable: boolean }) =>
    resizeable ? 'auto' : 'none'};
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
  theme?: typeof defaultTheme;
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
      theme,
      ...props
    } = this.props;
    return (
      <Area
        theme={theme}
        value={value}
        className={className}
        style={style}
        rows={minRows}
        resizeable={resize}
        disabled={disabled}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        maxLength={maxLength}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        id={id}
        innerRef={innerRef}
        {...props}
      />
    );
  }
}

export default StatelessTextArea;
