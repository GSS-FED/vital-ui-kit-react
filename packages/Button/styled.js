import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { Styles } from '../Base/';
import { buttonSizes } from './constant';

const { colors } = Styles;

const ButtonElement = styled.button`
  position: relative;
  display: inline-block;
  background: ${props => props.theme.Button[props.nature].background};
  color: ${props => props.theme.Button[props.nature].color};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.primaryList[3]};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  border-radius: ${({ size }) => buttonSizes[size]['border-radius']};
  padding: ${({ size }) => buttonSizes[size].padding};
  line-height: 1;
  font-weight: normal;
  margin: 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size].padding};
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${colors.primaryList[2]};
  }

  &:active {
    background: ${colors.primaryList[4]};
  }

  ${({ subtle, selected }) => subtle &&`
    background: ${selected ? colors.primaryList4 : 'transparent'};
    color: ${colors.primaryList7};
    border: 1px solid transparent;

    &:hover {
      background: ${colors.primaryList[2]};
    }
  `};

  ${props => props.flat &&`
   background: ${props.nature === 'default'
       ? colors.primaryList[1]
       : props.theme.Button[props.nature].color};
   color: ${props.nature === 'default'
       ? props.theme.Button.default.color
       : colors.white};
   border-color: ${props.nature === 'default'
       ? colors.primaryList[1]
       : props.theme.Button[props.nature].color};

   &:hover {
     background: ${props.nature === 'default'
         ? colors.primaryList[2]
         : lighten(0.1, props.theme.Button[props.nature].color)};
     border-color: ${props.nature === 'default'
         ? colors.primaryList[2]
         : lighten(0.1, props.theme.Button[props.nature].color)};
   }
   &:active {
     background: ${props.nature === 'default'
         ? colors.primaryList[4]
         : darken(0.12, props.theme.Button[props.nature].color)};
     border-color: ${props.nature === 'default'
         ? colors.primaryList[4]
         : darken(0.12, props.theme.Button[props.nature].color)};
   }
  `};

  ${props => props.light &&`
   background: ${colors.white};
   color: ${props.theme.Button[props.nature].color};

   &:hover {
     background: ${colors.primaryList[2]};
   }
  `}

  ${({ link }) => link &&`
   background: transparent;
   color: ${colors.primary};
   border: 1px solid transparent;

   &:hover {
     background: transparent;
     color: ${lighten(0.1, colors.primary)};
   }`}

   ${({ link, dark }) => (link && dark) &&`
      color: ${colors.primaryList[6]};

    &:hover {
      color: ${lighten(0.1, colors.primaryList[6])};
    }
   `}

   ${({ underline }) => underline &&`
      &:hover {
        text-decoration: underline;
      }
   `}

   ${({ circle }) => circle &&`
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
