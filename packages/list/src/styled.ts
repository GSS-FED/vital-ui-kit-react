import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import { borderTopRadius } from '@vital-ui/react-utils';

const linkStyle = ({ hasLink, hasChildren, theme }: any) => {
  if (hasLink || hasChildren) {
    return css`
      transition: all 0.2s ease;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: ${theme.list.link.bg};
        color: ${theme.list.link.color};
        text-decoration: none;
      }
    `;
  }
  return null;
};

const levelStyle = ({ level, themed, theme }: any) => {
  if (level < 1) {
    return css`
      background: ${themed === 'dark'
        ? theme.secondary900
        : theme.white};
      color: ${themed === 'dark' ? theme.white : theme.secondary700};
    `;
  }
  return css`
    padding-left: calc(0.75rem + ${level * 16}px);
    color: ${themed === 'dark' ? theme.white : theme.secondary700};
    background: ${themed === 'dark'
      ? theme[`secondary${9 - level}00`]
      : theme[`secondary${level}00`]};
  `;
};

const ListRoot = styled.ul<any>`
  list-style: none;
  word-break: break-word;
  word-wrap: break-word;
  overflow: hidden;
  border-radius: ${props => (props.collapse ? '4px' : 0)};
`;

const ListLi = styled.li<any>`
  border-radius: ${props => (props.collapse ? '4px' : 0)};

  :first-child {
    ${props => (props.collapse ? borderTopRadius(4) : 0)};
  }
`;

const ListTitleWrapper = styled.div<any>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: -1px;
  padding: 0.75rem 1.3rem;
  font-size: 1.125rem;
  word-break: break-word;
  border: ${({ border, collapse, theme }) =>
    border && collapse ? theme.borderColor : 'none'};
  border-bottom: ${({ border, theme }) =>
    border ? theme.borderColor : 'none'};
  border-top: ${({ border, theme }) =>
    border ? theme.borderColor : 'none'};
  ${linkStyle};
  ${levelStyle};
`;

ListTitleWrapper.defaultProps = {
  theme: defaultTheme,
};

const ListTitle = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export { ListRoot, ListLi, ListTitleWrapper, ListTitle };
