// @flow

import * as React from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import { darken, lighten } from 'polished';

import * as colors from '../../styles/colors';

const buttonSizes = {
  xsmall: {
    'font-size': '0.8rem',
    'border-radius': '2px',
    padding: 'calc(0.2rem - 1px) 0.533rem',
    height: '1.2rem',
  },
  small: {
    'font-size': '0.866rem',
    'border-radius': '3px',
    padding: 'calc(0.4rem - 1px) 0.8rem',
    height: '1.666rem',
  },
  medium: {
    'font-size': '1rem',
    'border-radius': '4px',
    padding: 'calc(0.533rem - 1px) 1.066rem',
    height: '2.066rem',
  },
  large: {
    'font-size': '1.2rem',
    'border-radius': '5px',
    padding: 'calc(0.666rem - 1px) 1.2rem',
    height: '2.532rem',
  },
  xlarge: {
    'font-size': '1.4rem',
    'border-radius': '6px',
    padding: 'calc(0.8rem - 1px) 1.333rem',
    height: '3rem',
  },
};

const Root = styled.button`
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

  ${is('flat')`
   background: ${props =>
     props.nature === 'default'
       ? colors.primaryList[1]
       : props.theme.Button[props.nature].color};
   color: ${props =>
     props.nature === 'default'
       ? props.theme.Button.default.color
       : colors.white};
   border-color: ${props =>
     props.nature === 'default'
       ? colors.primaryList[1]
       : props.theme.Button[props.nature].color};

   &:hover {
     background: ${props =>
       props.nature === 'default'
         ? colors.primaryList[2]
         : lighten(0.1, props.theme.Button[props.nature].color)};
     border-color: ${props =>
       props.nature === 'default'
         ? colors.primaryList[2]
         : lighten(0.1, props.theme.Button[props.nature].color)};
   }
   &:active {
     background: ${props =>
       props.nature === 'default'
         ? colors.primaryList[4]
         : darken(0.12, props.theme.Button[props.nature].color)};
     border-color: ${props =>
       props.nature === 'default'
         ? colors.primaryList[4]
         : darken(0.12, props.theme.Button[props.nature].color)};
   }
  `};

  ${is('light')`
   background: ${colors.white};
   color: ${props => props.theme.Button[props.nature].color};

   &:hover {
     background: ${colors.primaryList[2]};
   }
  `}

  ${is('link')`
   background: transparent;
   color: ${colors.primary};
   border: 1px solid transparent;

   &:hover {
     background: transparent;
     color: ${lighten(0.1, colors.primary)};
   }`}

   ${is('link', 'dark')`
      color: ${colors.primaryList[6]};

    &:hover {
      color: ${lighten(0.1, colors.primaryList[6])};
    }
   `}

   ${is('underline')`
      &:hover {
        text-decoration: underline;
      }
   `}

   ${is('circle')`
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

type Props = {
  children?: React.Node,
  onClick?: () => void,
  nature?: string,
  default?: boolean,
  flat?: boolean,
  light?: boolean,
  link?: boolean,
  size?: string,
  theme?: any,
  circle?: boolean,
}

const Button = ({ children, onClick, ...props }: Props) => (
  <Root onClick={onClick} {...props}>
    {children}
  </Root>
);


Button.defaultProps = {
  children: 'Button',
  nature: 'default',
  theme: {
    Button: {
      default: {
        background: colors.primaryList[0],
        color: colors.primaryList[6],
      },
      primary: {
        background: colors.primaryList[0],
        color: colors.primary,
      },
      success: {
        background: colors.primaryList[0],
        color: colors.success,
      },
      info: {
        background: colors.primaryList[0],
        color: colors.info,
      },
      alarm: {
        background: colors.primaryList[0],
        color: colors.alarm,
      },
      warning: {
        background: colors.primaryList[0],
        color: colors.warning,
      },
    },
  },
  size: 'medium',
  default: true,
  light: false,
  flat: false,
  link: false,
  onClick: () => {},
};

export default Button;
