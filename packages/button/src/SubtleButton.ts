import styled from 'styled-components';
import { Button } from './Button';
import { Nature } from './constant';
import { natureColor } from './utils';

interface Props {
  selected?: boolean;
  nature?: Nature;
}

export const SubtleButton = styled(Button)<Props>`
  background: ${props =>
    props.selected ? props.theme.button.subtle.bg : 'transparent'};
  color: ${({ nature, theme }) =>
    nature === 'default'
      ? theme.button.subtle.color
      : natureColor(theme)[nature]};
  border: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.button.subtle.hoverBg};
  }
`;
