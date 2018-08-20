import * as React from 'react';
import StatelessInput from './StatelessInput';

type Props = {
  /** Input ref */
  ref?: React.RefObject<HTMLInputElement>;
  /** Disabled state */
  disabled?: boolean;
  /** Alarm state */
  alarm?: boolean;
  /** Warning State */
  warning?: boolean;
  /** Icon name */
  icon?: string;
  /** `left` or `right` */
  iconPosition?: 'left' | 'right';
  /** Html attr */
  type?: string;
  /** Html attr */
  placeholder?: string;
  /** value of input */
  value?: string;
  /** Auto Focus attr */
  autoFocus?: boolean;
  /** Spell check attr */
  spellCheck?: boolean;
  /** when input changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
};

type State = {
  value: string;
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

  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    const {
      className,
      style,
      iconPosition,
      ref,
      ...props
    } = this.props;
    return (
      <StatelessInput
        className={className}
        style={style}
        {...props}
        onChange={this.handleChange}
        value={this.state.value}
        // @ts-ignore
        ref={ref}
      />
    );
  }
}
