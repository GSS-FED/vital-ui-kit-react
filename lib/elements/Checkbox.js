// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { withStateHandlers } from 'recompose';

import * as colors from '../styles/colors';

const Root = styled.label`
  font-size: 15px;
  cursor: pointer;
`;
const Label = styled.span`
  color: ${props => props.theme.label};

  &:before {
    content: '';
    position: relative;
    display: inline-block;
    width: 1.066rem;
    height: 1.066rem;
    border: 1px solid #c4d2eb;
    border-radius: 2px;
    background-color: #ffffff;
    transition: all 120ms ease-out;
    margin: -2px 0.6em 0 0;
    vertical-align: middle;
  }

  &:after {
    font-family: icomoon;
    font-size: 0.8rem;
    content: '\f00c';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 0.17733rem;
    left: 0.08867rem;
    opacity: ${props => (props.isChecked ? 1 : 0)};
    pointer-events: none;
    color: #0e86fe;
    transform: ${props => (props.isChecked ? 'scale(1)' : 'scale(0)')};
    transition: all 120ms ease-out;
  }
`;
const Input = styled.input`
  display: none;
`;

type Props = {
  isChecked: boolean,
  isDiabled?: boolean,
  label: string,
  name: string,
  value: number | string,
  onChange: Function,
  theme?: {
    label: string,
    border: string,
    background: string,
  },
};

const defaultTheme = {
  label: '#456297',
  border: '#C4D2EB',
  background: '#fff',
};

const Checkbox = ({
  label,
  isChecked,
  name,
  value,
  onChange,
  isDiabled,
  theme = defaultTheme,
}: Props) => (
  <ThemeProvider theme={theme}>
    <Root>
      <Label isChecked={isChecked} isDisabled={isDiabled}>
        <Input
          type="checkbox"
          disabled={isDiabled}
          checked={isChecked}
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
  ({ checked = false }) => ({
    isChecked: checked,
  }),
  {
    onChange: ({ isChecked }) => () => ({
      isChecked: !isChecked,
    }),
  },
)(Checkbox);
