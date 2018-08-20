import * as React from 'react';
import cn from 'classnames';
import StatelessTextArea from './StatelessTextArea';

type Props = {
  innerRef?: React.RefObject<any>;
  minRows?: number;
  resize?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Alarm state */
  alarm?: boolean;
  /** Warning State */
  warning?: boolean;
  /** Html attr */
  placeholder?: string;
  /** value of input */
  value?: string;
  /** Auto Focus attr */
  autoFocus?: boolean;
  /** Spell check attr */
  spellCheck?: boolean;
  /** Max length of the textarea */
  maxLength?: number;
  /** id for text area */
  id?: string;
  /** when input changes */
  onChange?: (event: any) => {};
  style?: React.CSSProperties;
  /** default: `vital__textarea` */
  className?: string;
};

type State = {
  value: string;
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

  handleChange: React.EventHandler<any> = e => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    const { innerRef, style, className, ...props } = this.props;
    return (
      <StatelessTextArea
        style={style}
        className={cn('vital__textarea', className)}
        value={this.state.value}
        onChange={this.handleChange}
        innerRef={this.props.innerRef}
        {...props}
      />
    );
  }
}
