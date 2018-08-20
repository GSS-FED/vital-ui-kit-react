import { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

export const fieldWrapperBase = ({ theme = defaultTheme }) => css`
  position: relative;
  display: block;
  width: 100%;
  line-height: 1;
  box-sizing: border-box;
  background-color: ${theme.white};
  border: 1px solid ${theme.form.borderColor};
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  outline: 0;
  z-index: 5;
`;

export const fieldInputBase = ({ theme = defaultTheme }) => css`
  font-size: 1rem;
  padding: 0.46633rem 0.8rem;
  color: ${theme.form.color};
`;

const fieldBase = ({
  theme = defaultTheme,
}: {
  theme: typeof defaultTheme;
}) => css<{ alarm: boolean; warning: boolean }>`
  ${fieldWrapperBase} ${fieldInputBase}

  &::placeholder {
    color: ${theme.form.placeholder.color};
  }

  &:focus {
    outline: 0;
    border: 1px solid ${theme.form.focusBorderColor};
    box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
    z-index: 7;
  }

  &:disabled {
    pointer-events: none;
    border-color: ${theme.form.borderColor};
    background-color: ${theme.form.disabled.bg};

    ${({ alarm }) =>
      alarm &&
      css`
        pointer-events: none;
        background-color: ${theme.form.disabled.alarmBg};
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

export default fieldBase;
