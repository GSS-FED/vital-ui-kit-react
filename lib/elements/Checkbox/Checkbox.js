// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { withStateHandlers } from 'recompose';
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
  position: relative;
  opacity: ${props => (props.isChecked ? 1 : 0)};
  pointer-events: none;
  transform: ${props => (props.isChecked ? 'scale(1)' : 'scale(0)')};
  transition: all 120ms ease-out;
`;

type Props = {
  initiallyChecked?: boolean,
  isChecked: boolean,
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

const Checkbox = ({
  label,
  initiallyChecked,
  isChecked,
  name,
  value,
  onChange,
  isDisabled,
  isRound,
  theme = defaultTheme,
}: Props) => (
  <ThemeProvider theme={theme}>
    <Root>
      <Box isChecked={isChecked} isDisabled={isDisabled} isRound={isRound}>
        <IconWrapper isChecked={isChecked} isDisabled={isDisabled}>
          <Icon
            name="check"
            size="0.8rem"
            color={iconColor(isRound, isDisabled, theme)}
          />
        </IconWrapper>
      </Box>
      <Label isChecked={isChecked} isDisabled={isDisabled}>
        <Input
          type="checkbox"
          disabled={isDisabled}
          // checked={isChecked}
          defaultChecked={initiallyChecked}
          name={name}
          value={value}
          onChange={onChange}
        />
        {label}
      </Label>
    </Root>
  </ThemeProvider>
);

export default withStateHandlers(
  ({ initiallyChecked = false }) => ({
    isChecked: initiallyChecked,
  }),
  {
    onChange: ({ isChecked, isDisabled, onChange, name, value }) => () => {
      if (isDisabled) return null;
      if (onChange) onChange(name, value);
      return { isChecked: !isChecked };
    },
  },
)(Checkbox);
