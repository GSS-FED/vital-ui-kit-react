import styled, { css } from 'styled-components';
import { borderTopRadius } from '../utils';

const linkStyle = ({ hasLink, hasChildren, theme }) => {
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

const levelStyle = ({ level, themed, theme }) => {
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

const ListWrapper = styled.ul`
  list-style: none;
  word-break: break-word;
  word-wrap: break-word;
  overflow: hidden;
  border-radius: ${props => (props.collapse ? '4px' : 0)};
`;

const List = styled.li`
  border-radius: ${props => (props.collapse ? '4px' : 0)};

  :first-child {
    ${props => (props.collapse ? borderTopRadius(4) : 0)};
  }
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: table;
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
  ${props => linkStyle(props)};
  ${props => levelStyle(props)};
`;

const Title = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export { ListWrapper, List, TitleWrapper, Title };
