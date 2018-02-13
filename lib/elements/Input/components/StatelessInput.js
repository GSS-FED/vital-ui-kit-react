// @flow

import * as React from 'react';
import styled from 'styled-components';

import baseStyle from '../../FieldBase';
import Icon from '../../Icon/';

const iconPositionStyle = position => {
  if (position === 'left') {
    return `
      left: 0;
      color: #C3D1EB;`;
  }
  return `
    right: 0;
    cursor: pointer;

    &:hover {
      color: #C4D2EB;
    }`;
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
  ${baseStyle};
  vertical-align: middle;
  height: 1.93267rem;
  ${props => inputPaddingStyle(props)};
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: calc(50% - 0.5em);
  width: 2.2em;
  text-align: center;
  z-index: 7;
  color: #456296;
  ${props => iconPositionStyle(props.iconPosition)};
`;

type Props = {
  /** Html attr */
  type?: string,
  /** Html attr */
  placeholder?: string,
  /** value of input */
  value: string,
  /** Icon name */
  icon?: string,
  /** `left` or `right` */
  iconPosition?: 'left' | 'right',
  /** Default value of input */
  defaultValue?: string,
  /** Disabled state */
  isDisabled?: boolean,
  /** Alarm state */
  isAlarm?: boolean,
  /** Warning State */
  isWarning?: boolean,
  /** Auto Focus attr */
  autoFocus?: boolean,
  /** Spell check attr */
  isSpellCheck?: boolean,
};

class StatelessInput extends React.Component<Props> {
  input: any;

  static defaultProps = {
    type: 'text',
  };

  focus = () => {
    this.input.focus();
  };

  render() {
    const {
      value,
      defaultValue,
      type,
      placeholder,
      isDisabled,
      isAlarm,
      isWarning,
      autoFocus,
      isSpellCheck,
      icon,
      iconPosition = 'right',
    } = this.props;
    return (
      <Root>
        <InputElement
          value={value}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          alarm={isAlarm}
          warning={isWarning}
          autoFocus={autoFocus}
          spellCheck={isSpellCheck}
          iconPosition={iconPosition}
          innerRef={input => {
            this.input = input;
          }}
          {...this.props}
        />
        {icon && <InputIcon iconPosition={iconPosition} name={icon} />}
      </Root>
    );
  }
}

export default StatelessInput;
