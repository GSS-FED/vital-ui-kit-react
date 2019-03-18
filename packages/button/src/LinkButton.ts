import styled, { css } from 'styled-components';
import { Button } from './Button';

const underlineStyle = ({ underline }: Props) =>
  underline &&
  css`
    &:hover {
      text-decoration: underline;
    }
  `;

interface Props {
  underline?: boolean;
  dark?: boolean;
}

export const LinkButton = styled(Button)<Props>`
  background: ${props => props.theme.button.link.bg};
  color: ${props => props.theme.button.link.color};
  border: 1px solid transparent;

  &:hover {
    background: ${props => props.theme.button.link.hoverBg};
    color: ${props => props.theme.button.link.hoverColor};
  }

  ${underlineStyle};
  ${props =>
    props.dark &&
    css`
      color: ${props.theme.button.link.darkColor};
      &:hover {
        color: ${props.theme.button.link.hoverDarkColor};
      }
    `}
`;
