// @flow

import * as React from 'react';
import StatelessInput from './StatelessInput';

type Props = {
  /** Disabled state */
  disabled?: boolean,
  /** Alarm state */
  alarm?: boolean,
  /** Warning State */
  warning?: boolean,
  /** Icon name */
  icon?: string,
  /** `left` or `right` */
  iconPosition?: 'left' | 'right',
  /** Html attr */
  type?: string,
  /** Html attr */
  placeholder?: string,
  /** value of input */
  value?: string,
  /** Auto Focus attr */
  autoFocus?: boolean,
  /** Spell check attr */
  spellCheck?: boolean,
  /** when input changes */
  onChange?: (event: SyntheticInputEvent<any>) => {},
  className?: string,
  style?: CSSStyleDeclaration,
};

type State = {
  value: string,
};

export default class Input extends React.Component<Props, State> {
  static defaultProps = {
    type: 'text',
    placeholder: null,
    icon: null,
    iconPosition: 'right',
    value: '',
    disabled: false,
    alarm: false,
    warning: false,
    autoFocus: false,
    spellCheck: false,
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
    const { className, style, iconPosition, ...props } = this.props;
    return (
      <StatelessInput
        className={className}
        style={style}
        {...props}
        onChange={this.handleChange}
        value={this.state.value}
        ref={input => {
          this.input = input;
        }}
      />
    );
  }
}
