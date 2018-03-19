import styled, { css } from 'styled-components';

import { borderTopRadius } from '../Base/utils';

const themeWithBorder = css`
  background-color: ${props => (props.themed === 'dark' ? '#456297' : '#fff')};
  color: ${props => (props.themed === 'dark' ? '#fff' : '#456297')};
`;

const themeWithoutBorder = css`
  background-color: ${props => (props.themed === 'dark' ? '#182D54' : '#fff')};
  color: ${props => (props.themed === 'dark' ? '#fff' : '#456297')};
`

const linkStyle = props => {
  if (props.href || props.hasChildren) {
    return css`
      transition: all 0.2s ease;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: #d8e3f6;
        color: #419ffe;
        text-decoration: none;
      }
    `;
  }
  return null;
};

const ListWrapper = styled.li`
  border-radius: ${props => props.collapse ? '4px' : 0};

  :first-child {
    ${props => props.collapse ? borderTopRadius(4) : 0};
  }
`;

const List = styled.div`
  box-sizing: border-box;
  position: relative;
  display: table;
  width: 100%;
  margin-bottom: -1px;
  padding: 0.75rem 1.3rem;
  font-size: 1.125rem;
  word-break: break-word;
  border: ${props => (props.border && props.collapse ? '1px solid #d8e3f6' : 'none')};
  border-bottom: ${props => (props.border ? '1px solid #d8e3f6' : 'none')};
  border-top: ${props => (props.border ? '1px solid #d8e3f6' : 'none')};
  ${props => linkStyle(props)};
`;

const ListContent = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export {
  ListWrapper,
  List,
  ListContent,
}

export default {
  themeWithBorder,
  themeWithoutBorder,
}
