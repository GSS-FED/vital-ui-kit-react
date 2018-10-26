import { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

export const fieldWrapperBase = ({ theme = defaultTheme }) => css`
  position: relative;
  display: block;
  /* width: 100%; */
  line-height: 1;
  box-sizing: border-box;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.form.borderColor};
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  outline: 0;
  z-index: 5;
`;

export const fieldInputBase = ({ theme = defaultTheme }) => css`
  font-size: 1rem;
  padding: ${theme.form.inputPadding};
  color: ${theme.form.color};
`;

export const inputStyle = ({
  theme = defaultTheme,
  alarm,
}: {
  theme: any;
  alarm?: boolean;
}) => css`
  color: ${theme.form.color};
  &::placeholder {
    color: ${theme.form.placeholder.color};
  }
  ${alarm &&
    css`
      &:disabled {
        pointer-events: none;
        background-color: ${theme.form.disabled.alarmBg};
        border-color: ${theme.colors.alarm};

        &::placeholder {
          color: ${theme.colors.alarm};
        }
      }
    `};
`;

export const resetInput = css`
  background-color: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  font-size: 1rem;
  outline: 0;
`;

export const inputStatus = ({
  theme = defaultTheme,
  warning,
  alarm,
}: {
  theme: any;
  warning: boolean;
  alarm: boolean;
}) => css`
  &:hover {
    border: 1px solid ${theme.form.hoverBorderColor};
  }

  &:focus {
    outline: 0;
    border: 1px solid ${theme.form.focusBorderColor};
    box-shadow: 0 0 0 2px ${theme.shadowColor};
    z-index: 7;
  }

  &:disabled {
    pointer-events: none;
    border-color: ${theme.form.borderColor};
    background-color: ${theme.form.disabled.bg};
  }

  ${alarm &&
    css`
      border-color: ${theme.colors.alarm};
    `};

  ${warning &&
    css`
      border-color: ${theme.colors.warning};
    `};
`;

const fieldBase = (props: any) => css<{
  alarm: boolean;
  warning: boolean;
}>`
  ${fieldWrapperBase};
  ${inputStatus};
  ${inputStyle};
  ${fieldInputBase};
`;

export default fieldBase;
