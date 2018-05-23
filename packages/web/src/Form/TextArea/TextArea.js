// @flow

import * as React from 'react';
import StatelessTextArea from './StatelessTextArea';

type Props = {
  /** Disabled state */
  disabled?: boolean,
  /** Alarm state */
  alarm?: boolean,
  /** Warning State */
  warning?: boolean,
  /** Html attr */
  placeholder?: string,
  /** value of input */
  value: string,
  /** Auto Focus attr */
  autoFocus?: boolean,
  /** Spell check attr */
  spellCheck?: boolean,
  /** when input changes */
  onChange?: (event: any) => {}
};

type State = {
  value: string
};

export default class TextArea extends React.Component<Props, State> {
  state = {
    value: this.props.value || ''
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
        value={this.state.value}
        onChange={this.handleChange}
        {...this.props}
        ref={input => {
          this.input = input;
        }}
      />
    );
  }
}
