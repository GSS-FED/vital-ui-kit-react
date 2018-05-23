import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { size as SIZE, natureColor } from './constant';

const ButtonElement = styled.button`
  position: relative;
  background: ${({ theme }) => theme.primaryList[0]};
  color: ${({ theme, nature }) => natureColor(theme)[nature]};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.primaryList[3]};
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
    background: ${({ theme }) => theme.primaryList[2]};
  }

  &:active {
    background: ${({ theme }) => theme.primaryList[4]};
  }

  ${({ subtle, selected, theme, nature }) =>
    subtle &&
    `
    background: ${selected ? theme.primaryList4 : 'transparent'};
    color: ${
      nature === 'default'
        ? theme.primaryList7
        : natureColor(theme)[nature]
    };
    border: 1px solid transparent;

    &:hover {
      background: ${theme.primaryList[2]};
    }
  `};

  ${({ flat, nature, theme }) =>
    flat &&
    `
   background: ${
     nature === 'default'
       ? theme.primaryList[1]
       : natureColor(theme)[nature]
   };
   color: ${
     nature === 'default' ? natureColor(theme).default : theme.white
   };
   border-color: ${
     nature === 'default' ? theme.primaryList[1] : natureColor(theme)
   };

   &:hover {
     background: ${
       nature === 'default'
         ? theme.primaryList[2]
         : lighten(0.1, natureColor(theme)[nature])
     };
     border-color: ${
       nature === 'default'
         ? theme.primaryList[2]
         : lighten(0.1, natureColor(theme)[nature])
     };
   }
   &:active {
     background: ${
       nature === 'default'
         ? theme.primaryList[4]
         : darken(0.12, natureColor(theme)[nature])
     };
     border-color: ${
       nature === 'default'
         ? theme.primaryList[4]
         : darken(0.12, natureColor(theme)[nature])
     };
   }
  `};

  ${({ light, theme, nature }) =>
    light &&
    `
   background: ${theme.white};
   color: ${natureColor(theme)[nature]};

   &:hover {
     background: ${theme.primaryList[2]};
   }
  `}

  ${({ link, theme }) =>
    link &&
    `
   background: transparent;
   color: ${theme.primary};
   border: 1px solid transparent;

   &:hover {
     background: transparent;
     color: ${lighten(0.1, theme.primary)};
   }`}

   ${({ link, dark, theme }) =>
     link &&
     dark &&
     `
      color: ${theme.primaryList[6]};

    &:hover {
      color: ${lighten(0.1, theme.primaryList[6])};
    }
   `}

   ${({ underline }) =>
     underline &&
     `
      &:hover {
        text-decoration: underline;
      }
   `}

   ${({ circle }) =>
     circle &&
     `
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
    color: #93a8ce;
    border-color: #eaeff8;
    background-color: #f7f9fe;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default ButtonElement;
