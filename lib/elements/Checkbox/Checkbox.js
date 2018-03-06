// @flow

import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';

import Icon from '../Icon/';
import * as colors from '../../styles/colors';

const Root = styled.label`
  font-size: 15px;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    > span:first-child {
      box-shadow: ${`0 0 0 2px ${rgba(colors.primary, 0.2)}`};
    }
  }
`;
const Label = styled.span`
  color: ${props => props.theme.label};
`;

const Box = styled.span`
  position: relative;
  display: inline-block;
  width: 1.066rem;
  height: 1.066rem;
  border: 1px solid #c4d2eb;
  border-radius: ${props => (props.isRound ? '50%' : '2px')};
  background-color: ${props => {
    if (props.isChecked && props.isRound) {
      return colors.primary;
    }
    return colors.white;
  }};
  transition: all 120ms ease-out;
  margin: -2px 0.6em 0 0;
  vertical-align: middle;

  border-color: ${props =>
    props.isChecked ? props.theme.color || colors.primary : ''};
`;

const Input = styled.input`
  display: none;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: ${props => (props.isChecked ? 1 : 0)};
  pointer-events: none;
  transform: ${props => (props.isChecked ? 'scale(1)' : 'scale(0)')};
  transition: all 120ms ease-out;
`;

type State = {
  isChecked: boolean,
}

type Props = {
  initiallyChecked?: boolean,
  isDisabled?: boolean,
  isRound?: boolean,
  label: string,
  name: string,
  value: number | string,
  onChange: Function,
  theme?: {
    label: string,
    border: string,
    background: string,
    color: string,
  },
};

const defaultTheme = {
  label: '#456297',
  border: '#C4D2EB',
  background: '#fff',
  color: colors.primary,
};

function iconColor(isRound, isDisabled, theme) {
  if (isDisabled) {
    return '#C4D2EB';
  } else if (isRound) {
    return colors.white;
  }
  return theme.color;
}

class Checkbox extends PureComponent<Props, State> {
  state = {
    isChecked: this.props.initiallyChecked || false,
  };

  onChange = () => {
    if (this.props.isDisabled) return;
    if (this.props.onChange) this.props.onChange(this.props.name, this.props.value);
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const {
      label,
      initiallyChecked,
      name,
      value,
      isDisabled,
      isRound,
      theme = defaultTheme,
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Root {...this.props}>
          <Box isChecked={this.state.isChecked} isDisabled={isDisabled} isRound={isRound}>
            <IconWrapper isChecked={this.state.isChecked} isDisabled={isDisabled}>
              <Icon
                name="check"
                size="12"
                color={iconColor(isRound, isDisabled, theme)}
              />
            </IconWrapper>
          </Box>
          <Label isChecked={this.state.isChecked} isDisabled={isDisabled}>
            <Input
              type="checkbox"
              disabled={isDisabled}
              checked={this.state.isChecked}
              defaultChecked={initiallyChecked}
              name={name}
              value={value}
              onChange={this.onChange}
            />
            {label}
          </Label>
        </Root>
      </ThemeProvider>
    );
  }
}

export default Checkbox;
