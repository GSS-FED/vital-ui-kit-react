// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Icon from '@vital-ui/react-icon';

import baseStyle from '../components/FieldBase';

const iconPositionStyle = ({ iconPosition, theme }) => {
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

const inputPaddingStyle = props => {
  if (props.icon) {
    if (props.iconPosition === 'right') {
      return `padding-right: 2.2em;`;
    }
    return `padding-left: 2.2em;`;
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

const InputIcon = styled(Icon)`
  position: absolute;
  top: calc(50% - 0.5em);
  width: 2.2em;
  text-align: center;
  z-index: 7;
  color: ${({ theme }) => theme.form.inputIcon.color};
  ${props => iconPositionStyle(props)};
`;

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
};

class StatelessInput extends React.Component<Props> {
  static defaultProps = {
    type: 'text',
    placeholder: null,
    icon: null,
    iconPosition: 'right',
    defaultValue: '',
    disabled: false,
    alarm: false,
    warning: false,
    autoFocus: false,
    spellCheck: false,
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
    } = this.props;
    return (
      <Root>
        <InputElement
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
