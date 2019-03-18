import styled, { css } from 'styled-components';
import { Button } from './Button';
import { natureColor } from './utils';
import { lighten, darken } from 'polished';

export const flatStyle = ({ nature, theme }) =>
  css`
    background: ${nature === 'default'
      ? theme.button.flat.bg
      : natureColor(theme)[nature]};
    color: ${nature === 'default'
      ? natureColor(theme).default
      : theme.button.flat.color};
    border-color: ${nature === 'default'
      ? theme.button.flat.bg
      : natureColor(theme)[nature]};

    &:hover {
      background: ${nature === 'default'
        ? theme.button.flat.hoverBg
        : lighten(0.1, natureColor(theme)[nature])};
      border-color: ${nature === 'default'
        ? theme.borderColor
        : lighten(0.1, natureColor(theme)[nature])};
    }
    &:active {
      background: ${nature === 'default'
        ? theme.button.flat.activeBg
        : darken(0.12, natureColor(theme)[nature])};
      border-color: ${nature === 'default'
        ? theme.button.flat.activeBorderColor
        : darken(0.12, natureColor(theme)[nature])};
    }
  `;

export const FlatButton = styled(Button)`
  ${flatStyle};
`;
