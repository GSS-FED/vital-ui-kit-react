// @flow

import * as React from 'react';
import StatelessInput from './StatelessInput';

type Props = {
  /** Text Label for the input */
  label?: string,
  /** Disabled state */
  isDisabled?: boolean,
  /** Alarm state */
  isAlarm?: boolean,
  /** Warning State */
  isWarning?: boolean,
  /** Icon name */
  icon?: string,
  /** `left` or `right` */
  iconPosition?: string,
  /** Html attr */
  type?: string,
  /** Html attr */
  placeholder?: string,
  /** value of input */
  value: string,
  /** Auto Focus attr */
  autoFocus?: boolean,
  /** Spell check attr */
  isSpellCheck?: boolean,
  /** when input changes */
  onChange?: (event: SyntheticInputEvent<any>) => mixed,
};

type State = {
  value: string,
};

export default class Input extends React.Component<Props, State> {
  state = {
    value: this.props.value,
  };
  input: any;

  handleChange = (e: SyntheticInputEvent<any>) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) this.props.onChange(e);
  };

  focus = () => {
    this.input.focus();
  };

  render() {
    return (
      <StatelessInput
        onChange={this.handleChange}
        value={this.state.value}
        {...this.props}
        ref={input => {
          this.input = input;
        }}
      />
    );
  }
}
