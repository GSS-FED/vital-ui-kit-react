// @flow
import { css } from 'styled-components';

const fieldBorderColor = theme => theme.primaryList[3];

const FieldBase = theme => css`
  position: relative;
  display: block;
  width: 100%;
  padding: 0.46633rem 0.8rem;
  font-size: 1rem;
  line-height: 1;
  box-sizing: border-box;
  background-color: ${theme.white};
  border: 1px solid ${fieldBorderColor(theme)};
  border-radius: 4px;
  color: ${theme.primaryList[6]};
  transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  outline: 0;
  z-index: 5;

  &::placeholder {
    color: ${theme.primaryList[4]};
  }

  &:focus {
    outline: 0;
    border: 1px solid ${theme.secondaryList[4]};
    box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
    z-index: 7;
  }

  &:disabled {
    pointer-events: none;
    border-color: ${fieldBorderColor(theme)};
    background-color: ${theme.primaryList[1]};

    ${({ alarm }) =>
      alarm &&
      css`
        pointer-events: none;
        background-color: #ffd0b8; //TODO:
        border-color: ${theme.alarm};

        &::placeholder {
          color: ${theme.alarm};
        }
      `};
  }

  ${({ alarm }) =>
    alarm &&
    css`
      border-color: ${theme.alarm};
    `};

  ${({ warning }) =>
    warning &&
    css`
      border-color: ${theme.warning};
    `};
`;

export default FieldBase;
