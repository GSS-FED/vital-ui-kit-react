// @flow

import * as React from 'react';
import cn from 'classnames';
import StatelessTextArea from './StatelessTextArea';

type Props = {
  minRows?: number,
  resize?: boolean,
  /** Disabled state */
  disabled?: boolean,
  /** Alarm state */
  alarm?: boolean,
  /** Warning State */
  warning?: boolean,
  /** Html attr */
  placeholder?: string,
  /** value of input */
  value?: string,
  /** Auto Focus attr */
  autoFocus?: boolean,
  /** Spell check attr */
  spellCheck?: boolean,
  /** Max length of the textarea */
  maxLength?: number,
  /** id for text area */
  id?: string,
  /** when input changes */
  onChange?: (event: any) => {},
  style?: CSSStyleDeclaration,
  /** default: `vital__textarea` */
  className?: string,
};

type State = {
  value: string,
};

export default class TextArea extends React.Component<Props, State> {
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
    style: undefined,
    className: '',
  };

  state = {
    value: this.props.value || '',
  };

  handleChange = (e: SyntheticInputEvent<any>) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) this.props.onChange(e);
  };

  focus = () => {
    this.input.focus();
  };

  input: any;

  render() {
    return (
      <StatelessTextArea
        {...this.props}
        style={this.props.style}
        className={cn('vital__textarea', this.props.className)}
        value={this.state.value}
        onChange={this.handleChange}
        ref={input => {
          this.input = input;
        }}
      />
    );
  }
}
