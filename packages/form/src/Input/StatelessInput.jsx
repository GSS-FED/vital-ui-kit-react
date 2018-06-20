// @flow

import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
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

const inputPaddingStyle = (props: iconProps) => {
  if (props.name) {
    if (props.iconPosition === 'right') {
      return css`
        padding-right: 2.2em;
      `;
    }
    return css`
      padding-left: 2.2em;
    `;
  }
  return null;
};

const Root = styled.div`
  position: relative;
`;

const InputElement = styled.input`
  vertical-align: middle;
  height: 1.93267rem;
  ${baseStyle};
  ${inputPaddingStyle};
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

type Props = {
  /** Html attr */
  type?: string,
  /** Html attr */
  placeholder?: string,
  /** Icon name */
  icon?: string,
  /** `left` or `right` */
  iconPosition?: 'left' | 'right',
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
};

class StatelessInput extends React.Component<Props> {
  static defaultProps = {
    type: 'text',
    placeholder: null,
    icon: null,
    iconPosition: 'right',
    defaultValue: undefined,
    disabled: false,
    alarm: false,
    warning: false,
    autoFocus: false,
    spellCheck: false,
    style: undefined,
    className: '',
  };

  focus = () => {
    this.input.focus();
  };

  input: any;

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
      icon,
      iconPosition = 'right',
      style,
      className,
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
          iconPosition={iconPosition}
          innerRef={input => {
            this.input = input;
          }}
          {...this.props}
        />
        {icon && (
          <InputIcon iconPosition={iconPosition} name={icon} />
        )}
      </Root>
    );
  }
}

export default StatelessInput;
