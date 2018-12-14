import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import { BoxProps, render, Box } from '@vital-ui/react-utils';
import {
  fieldWrapperBase,
  resetInput,
  fieldInputBase,
  inputStyle,
  inputStatus,
} from '../components/FieldBase';

type IconPosition = 'left' | 'right';

const Root = styled.div`
  position: relative;
  border-radius: inherit;
  ${fieldWrapperBase};
  ${inputStatus};
  display: flex;
  height: 2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;

export const IconButton = styled(Box)`
  height: 2rem;
  width: 2rem;
  line-height: 2rem;
  color: inherit;
  cursor: pointer;
`;

interface InputElementProps extends BoxProps {
  // TODO: forwardRef React.ClassAttributes<HTMLInputElement>,
  /** Alarm state */
  alarm?: boolean;
  /** Warning State */
  warning?: boolean;
  /** Left Icon name, or Icon component */
  leftIcon?: any;
  /** Right Icon name, or Icon component */
  rightIcon?: any;
}

const InputElement = styled.input<InputElementProps>`
  background-color: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  flex: 1;
  ${resetInput};
  ${fieldInputBase};
  ${inputStyle};
  padding: 0.46633rem 0;
`;

InputElement.defaultProps = {
  theme: defaultTheme,
  alarm: false,
  warning: false,
  leftIcon: false,
  rightIcon: false,
};

export interface InputProps
  extends InputElementProps,
    React.HTMLAttributes<HTMLInputElement> {
  /** Input ref */
  inputRef?: React.Ref<HTMLInputElement>;
  /** Html attr */
  type?: string;
  /** Html attr */
  placeholder?: string;
  /** Default value of input */
  defaultValue?: string;
  value?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Auto Focus attr */
  autoFocus?: boolean;
  /** Spell check attr */
  spellCheck?: boolean;
  /** default: `vital__input` */
  className?: string;
  style?: React.CSSProperties;
  /** On Change */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  theme?: any;
  name?: string;
  onRightIconClick?: () => void;
  children?: React.ReactNode;
}

export class Input extends React.Component<InputProps> {
  static defaultProps = {
    type: 'text',
    placeholder: null,
    rightIcon: undefined,
    leftIcon: undefined,
    defaultValue: undefined,
    disabled: false,
    alarm: false,
    warning: false,
    autoFocus: false,
    spellCheck: false,
    style: undefined,
    className: '',
  };

  renderIcon = (icon: any, position: IconPosition) => {
    const { onRightIconClick } = this.props;
    return render(icon, IconButton, {
      onClick: position === 'right' ? onRightIconClick : undefined,
      css:
        position === 'right' &&
        css`
          text-align: center;
        `,
    });
  };

  render() {
    const {
      inputRef,
      defaultValue,
      type,
      placeholder,
      disabled,
      alarm = false,
      warning = false,
      autoFocus,
      spellCheck,
      leftIcon,
      rightIcon,
      style,
      className,
      onChange,
      value,
      onRightIconClick,
      theme = defaultTheme,
      ...props
    } = this.props;
    return (
      <Root>
        {leftIcon && this.renderIcon(leftIcon, 'left')}
        <InputElement
          style={style}
          className={cn('vital__input', className)}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          alarm={alarm}
          warning={warning}
          autoFocus={autoFocus}
          spellCheck={spellCheck}
          leftIcon={!!leftIcon}
          rightIcon={!!rightIcon}
          // @ts-ignore
          ref={inputRef}
          onChange={onChange}
          value={value}
          theme={theme}
          {...props}
        />
        {rightIcon && this.renderIcon(rightIcon, 'right')}
      </Root>
    );
  }
}
