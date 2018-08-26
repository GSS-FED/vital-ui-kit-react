import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

export const MenuList = styled.ul`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 7;
  float: left;
  width: 100%;
  padding: 10px 0;
  margin: 8px 0 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-color: ${({ theme }) => theme.white};
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.form.borderColor};
  border-radius: 4px;
  max-height: 230px;
  overflow: scroll;

  &:empty {
    display: none;
  }
`;

MenuList.defaultProps = {
  theme: defaultTheme,
};

export const MenuItem = styled.div<{
  isWrap: boolean;
  hightlighted: boolean;
}>`
  display: block;
  padding: 0.5em 1em 0.5em;
  clear: both;
  line-height: 1;
  color: ${({ theme }) => theme.select.item.color};
  white-space: ${({ isWrap }) => (isWrap ? 'normal' : 'nowrap')};
  text-decoration: none;
  cursor: pointer;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ hightlighted }) =>
    hightlighted &&
    css`
      background-color: ${({ theme }) => theme.select.item.hoverBg};
    `};
`;

MenuItem.defaultProps = {
  theme: defaultTheme,
  isWrap: true,
};

export const SelectButton = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: calc(0.533rem - 1px) 1.066rem;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.2;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.select.button.color};
  border: 1px solid ${({ theme }) => theme.form.borderColor};
  z-index: 5;
  outline: 0;
  text-align: left;
  display: flex;
  align-items: center;
`;

SelectButton.defaultProps = {
  theme: defaultTheme,
};

export const SelectButtonText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
