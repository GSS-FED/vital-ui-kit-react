import styled, { css } from 'styled-components';
import { Button } from './Button';
import { natureColor } from './utils';

export const LightButton = styled(Button)`
  ${({ theme, nature }) => css`
    background: ${theme.button.light.bg};
    color: ${natureColor(theme)[nature]};

    &:hover {
      background: ${theme.button.light.hoverBg};
    }
    &:active {
      background: ${theme.button.light.activeBg};
    }
  `};
`;
