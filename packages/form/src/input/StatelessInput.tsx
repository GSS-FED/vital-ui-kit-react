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

// @ts-ignore
const iconPositionStyle = ({
  iconPosition,
  theme = defaultTheme,
}: iconProps) => {
  if (iconPosition === 'left') {
    return css`
      left: 0;
      color: ${theme.form.inputIcon.leftColor};
    `;
  }
  return css`
    right: 0;
    cursor: pointer;

    &:hover {
      color: ${theme.form.inputIcon.rightHoverColor};
    }
  `;
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
  /** Right Icon on Click */
  onRightIconClick?: () => void;
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
  /** will remove */
  icon?: string;
  /** `left` or `right` */
  iconPosition?: IconPosition;
  /** On Change */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  theme?: typeof defaultTheme;
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
    iconPosition: 'right' as IconPosition,
    icon: undefined,
  };

  renderIcon = (icon: IconProps, onClick?: () => void) => {
    if (ReactIs.isElement(icon)) {
      return icon;
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
      icon,
      iconPosition,
      onRightIconClick,
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
        {leftIcon && this.renderIcon(leftIcon)}
        {rightIcon && this.renderIcon(rightIcon, onRightIconClick)}
      </Root>
    );
  }
}

export default StatelessInput;
