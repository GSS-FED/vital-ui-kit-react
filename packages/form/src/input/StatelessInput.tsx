import * as React from 'react';
import * as ReactIs from 'react-is';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import baseStyle from '../components/FieldBase';

type IconPosition = 'left' | 'right';

type iconProps = {
  iconPosition?: IconPosition;
  name?: string;
  theme?: typeof defaultTheme;
};

const iconPositionStyle = ({
  iconPosition,
  theme = defaultTheme,
}: iconProps) => {
  if (iconPosition === 'left') {
    return css`
      left: 8px;
      top: 8px;
      z-index: 9;
      color: ${theme.form.inputIcon.leftColor};
    `;
  }
  return css`
    right: 8px;
    top: 8px;
    z-index: 9;
    cursor: pointer;

    &:hover {
      color: ${theme.form.inputIcon.rightHoverColor};
    }
  `;
};

const IconButton = styled.div`
  position: absolute;
  ${iconPositionStyle};
`;

IconButton.defaultProps = {
  theme: defaultTheme,
};

const Root = styled.div`
  position: relative;
  border-radius: inherit;
`;

const InputElement = styled.input<{
  alarm: boolean;
  warning: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
}>`
  vertical-align: middle;
  height: 1.93267rem;
  ${baseStyle};
  padding-left: ${({ leftIcon }) => leftIcon && '2.2em'};
  padding-right: ${({ rightIcon }) => rightIcon && '2.2em'};
`;

InputElement.defaultProps = {
  theme: defaultTheme,
  alarm: false,
};

type IconProps = any;

export type Props = {
  /** Input ref */
  innerRef?: React.RefObject<HTMLInputElement>;
  /** Html attr */
  type?: string;
  /** Html attr */
  placeholder?: string;
  /** Left Icon name, or Icon component */
  leftIcon?: IconProps;
  /** Right Icon name, or Icon component */
  rightIcon?: IconProps;
  /** Default value of input */
  defaultValue?: string;
  value?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Alarm state */
  alarm?: boolean;
  /** Warning State */
  warning?: boolean;
  /** Auto Focus attr */
  autoFocus?: boolean;
  /** Spell check attr */
  spellCheck?: boolean;
  /** default: `vital__input` */
  className?: string;
  style?: React.CSSProperties;
  /** On Change */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  theme?: typeof defaultTheme;
  name?: string;
};

class StatelessInput extends React.Component<Props> {
  static defaultProps = {
    type: 'text',
    placeholder: null,
    rightIcon: undefined,
    onRightIconClick: undefined,
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

  renderIcon = (icon: IconProps, position: IconPosition) => {
    if (ReactIs.isElement(icon)) {
      return <IconButton iconPosition={position}>{icon}</IconButton>;
    }
    return null;
  };

  render() {
    const {
      innerRef,
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
      theme = defaultTheme,
      ...props
    } = this.props;
    return (
      <Root>
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
          innerRef={innerRef}
          onChange={onChange}
          value={value}
          theme={theme}
          {...props}
        />
        {leftIcon && this.renderIcon(leftIcon, 'left')}
        {rightIcon && this.renderIcon(rightIcon, 'right')}
      </Root>
    );
  }
}

export default StatelessInput;
