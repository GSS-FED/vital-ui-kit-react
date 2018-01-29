// @flow

import * as React from 'react';
import styled from 'styled-components';

import baseStyle from '../FieldBase';
import Icon from '../Icon/';

const iconPositionStyle = position => {
  if (position === 'left') {
    return `left: 0;`;
  }
  return `right: 0;`;
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
  iconPosition?: string,
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
  static defaultProps = {
    type: 'text',
  };
  input: any;

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
      <React.Fragment>
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
          ref={input => {
            this.input = input;
          }}
          {...this.props}
        />
        {icon && <InputIcon name={icon} />}
      </React.Fragment>
    );
  }
}

export default StatelessInput;
