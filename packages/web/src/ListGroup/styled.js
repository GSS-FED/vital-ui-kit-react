import styled, { css } from 'styled-components';
import { borderTopRadius } from '../Base/utils';

const linkStyle = props => {
  if (props.hasLink || props.hasChildren) {
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

const levelStyle = props => {
  if (props.level < 1) {
    return css`
      background: ${props.themed === 'dark' ? props.theme.primaryList[8] : props.theme.white};
      color: ${props.themed === 'dark' ? '#fff' : '#456297'};
    `
  }
  return css`
  padding-left: calc(0.75rem + ${props.level * 16}px);
  color: ${props.themed === 'dark' ? '#fff' : '#456297'};
  background: ${props.themed === 'dark' ? props.theme.primaryList[8 - props.level] : props.theme.primaryList[props.level]};
`};

// const themeWithBorder = css`
//   background-color: ${props => (props.themed === 'dark' ? '#456297' : '#fff')};
//   color: ${props => (props.themed === 'dark' ? '#fff' : '#456297')};
// `;

// const themeWithoutBorder = css`
//   background-color: ${props => (props.themed === 'dark' ? '#182D54' : '#fff')};
//   color: ${props => (props.themed === 'dark' ? '#fff' : '#456297')};
// `


// sc
const ListGroupWrapper = styled.ul`
  list-style: none;
  word-break: break-word;
  word-wrap: break-word;
  overflow: hidden;
  border-radius: ${props => (props.collapse ? '4px' : 0)};
`;

const List = styled.li`
border-radius: ${props => props.collapse ? '4px' : 0};

  :first-child {
    ${props => props.collapse ? borderTopRadius(4) : 0};
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
  border: ${props => (props.border && props.collapse ? '1px solid #d8e3f6' : 'none')};
  border-bottom: ${props => (props.border ? '1px solid #d8e3f6' : 'none')};
  border-top: ${props => (props.border ? '1px solid #d8e3f6' : 'none')};
  ${props => linkStyle(props)};
  ${props => levelStyle(props)}
`;

const Title = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export {
  ListGroupWrapper,
  List,
  TitleWrapper,
  Title,
}
