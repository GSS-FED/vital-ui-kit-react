import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import { size as SIZE, natureColor } from './constant';

const ButtonElement = styled.button`
  position: relative;
  background: ${({ theme }) => theme.button.default.bg};
  color: ${({ theme, nature }) => natureColor(theme)[nature]};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.borderColor};
  font-size: ${({ size }) => SIZE[size].fontSize};
  border-radius: ${({ size }) => SIZE[size].borderRadius};
  padding: ${({ size }) => SIZE[size].padding};
  line-height: 1;
  font-weight: normal;
  margin: 0;
  outline: none;
  padding: ${({ size }) => SIZE[size].padding};
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.button.default.hoverBg};
  }

  &:active {
    background: ${({ theme }) => theme.button.default.activeBg};
  }

  ${({ subtle, selected, theme, nature }) =>
    subtle &&
    css`
      background: ${selected
        ? theme.button.subtle.bg
        : 'transparent'};
      color: ${nature === 'default'
        ? theme.button.subtle.color
        : natureColor(theme)[nature]};
      border: 1px solid transparent;

      &:hover {
        background: ${theme.button.subtle.hoverBg};
      }
    `};

  ${({ flat, nature, theme }) =>
    flat &&
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
    `};

  ${({ light, theme, nature }) =>
    light &&
    css`
      background: ${theme.button.light.bg};
      color: ${natureColor(theme)[nature]};

      &:hover {
        background: ${theme.button.light.hoverBg};
      }
    `}

  ${({ link, theme }) =>
    link &&
    css`
      background: ${theme.button.link.bg};
      color: ${theme.button.link.color};
      border: 1px solid transparent;

      &:hover {
        background: ${theme.button.link.hoverBg};
        color: ${theme.button.link.hoverColor};
      }
    `}

   ${({ link, dark, theme }) =>
     link &&
     dark &&
     css`
       color: ${theme.button.link.darkColor};

       &:hover {
         color: ${theme.button.link.hoverDarkColor};
       }
     `}

   ${({ underline }) =>
     underline &&
     css`
       &:hover {
         text-decoration: underline;
       }
     `}

   ${({ circle }) =>
     circle &&
     css`
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 0;
       border-radius: 100%;
       width: 2.066rem;
       line-height: 2.066rem;
       height: 2.066rem;
     `}

  &[disabled] {
    color: ${({ theme }) => theme.button.disabled.color};
    border-color: ${({ theme }) => theme.button.disabled.borderColor};
    background-color: ${({ theme }) => theme.button.disabled.bg};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default ButtonElement;
