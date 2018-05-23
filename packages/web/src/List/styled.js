import styled, { css } from 'styled-components';
import { borderTopRadius, borderBaseColor } from '../utils';

const linkStyle = ({ hasLink, hasChildren, theme }) => {
  if (hasLink || hasChildren) {
    return css`
      transition: all 0.2s ease;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: ${theme.primaryList[2]};
        color: ${theme.secondaryList[3]};
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
        ? theme.primaryList[8]
        : theme.white};
      color: ${themed === 'dark'
        ? theme.white
        : theme.primaryList[6]};
    `;
  }
  return css`
    padding-left: calc(0.75rem + ${level * 16}px);
    color: ${themed === 'dark' ? theme.white : theme.primaryList[6]};
    background: ${themed === 'dark'
      ? theme.primaryList[8 - level]
      : theme.primaryList[level]};
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
    border && collapse ? borderBaseColor(theme) : 'none'};
  border-bottom: ${({ border, theme }) =>
    border ? borderBaseColor(theme) : 'none'};
  border-top: ${({ border, theme }) =>
    border ? borderBaseColor(theme) : 'none'};
  ${props => linkStyle(props)};
  ${props => levelStyle(props)};
`;

const Title = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export { ListWrapper, List, TitleWrapper, Title };
