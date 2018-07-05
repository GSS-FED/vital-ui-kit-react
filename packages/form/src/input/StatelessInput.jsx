// @flow

import * as React from 'react';
import * as ReactIs from 'react-is';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import { withDeprecationWarnings } from '@vital-ui/react-utils';
import Icon from '@vital-ui/react-icon';

import baseStyle from '../components/FieldBase';

type IconPosition = 'left' | 'right';

type iconProps = {
  iconPosition?: IconPosition,
  name?: string,
  theme?: typeof defaultTheme,
};

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

const InputElement = styled.input`
  vertical-align: middle;
  height: 1.93267rem;
  ${baseStyle};
  padding-left: ${({ leftIcon }) => leftIcon && '2.2em'};
  padding-right: ${({ rightIcon }) => rightIcon && '2.2em'};
`;

InputElement.defaultProps = {
  theme: defaultTheme,
  name: null,
  iconPosition: 'right',
};

const InputIcon = styled(Icon)`
  position: absolute;
  top: calc(50% - 0.5em);
  width: 2.2em;
  text-align: center;
  z-index: 7;
  color: ${({ theme }) => theme.form.inputIcon.color};
  ${iconPositionStyle};
`;

InputIcon.defaultProps = {
  theme: defaultTheme,
  name: null,
  iconPosition: 'right',
};

type IconProps = string | typeof Icon;

export type Props = {
  /** Html attr */
  type?: string,
  /** Html attr */
  placeholder?: string,
  /** Left Icon name, or Icon component */
  leftIcon?: IconProps,
  /** Right Icon name, or Icon component */
  rightIcon?: IconProps,
  /** Right Icon on Click */
  onRightIconClick?: () => void,
  /** Default value of input */
  defaultValue?: string,
  /** Disabled state */
  disabled?: boolean,
  /** Alarm state */
  alarm?: boolean,
  /** Warning State */
  warning?: boolean,
  /** Auto Focus attr */
  autoFocus?: boolean,
  /** Spell check attr */
  spellCheck?: boolean,
  /** default: `vital__input` */
  className?: string,
  style?: CSSStyleDeclaration,
  /** will remove */
  icon?: string,
  /** `left` or `right` */
  iconPosition?: 'left' | 'right',
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
    iconPosition: 'right',
    icon: undefined,
  };

  focus = () => {
    this.input.focus();
  };

  input: any;

  renderIcon = (
    position: IconPosition,
    icon: IconProps,
    onClick: () => void,
  ) => {
    if (ReactIs.isElement(icon)) {
      return icon;
    }
    if (typeof icon === 'string') {
      return (
        <InputIcon
          iconPosition={position}
          name={icon}
          onClick={onClick}
        />
      );
    }
    return null;
  };

  render() {
    const {
      defaultValue,
      type,
      placeholder,
      disabled,
      alarm,
      warning,
      autoFocus,
      spellCheck,
      leftIcon,
      rightIcon,
      style,
      className,
      icon,
      iconPosition,
      onRightIconClick,
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
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          innerRef={input => {
            this.input = input;
          }}
          {...this.props}
        />
        {icon && (
          <WithWarningsInput
            name={icon}
            iconPosition={iconPosition}
          />
        )}
        {leftIcon && this.renderIcon('left', leftIcon, null)}
        {rightIcon &&
          this.renderIcon('right', rightIcon, onRightIconClick)}
      </Root>
    );
  }
}

const WithWarningsInput = withDeprecationWarnings(InputIcon, {
  message:
    'Input props deprecation warning: icon and iconPosition. Please change to leftIcon and rightIcon.',
});

export default StatelessInput;
