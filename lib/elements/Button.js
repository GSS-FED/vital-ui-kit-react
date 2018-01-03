import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import is from 'styled-is';
import { darken, lighten } from 'polished';

import * as colors from '../styles/colors';

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

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  background: ${props => props.theme.Button[props.nature].background};
  color: ${props => props.theme.Button[props.nature].color};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.primaryList[4]};
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
   }
  `}
  &[disabled] {
    color: #93a8ce;
    border-color: #eaeff8;
    background-color: #f7f9fe;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const Button = ({ children, onClick, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  nature: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'alarm',
    'warning',
  ]),
  default: PropTypes.bool,
  flat: PropTypes.bool,
  light: PropTypes.bool,
  link: PropTypes.bool,
  size: PropTypes.string,
  theme: PropTypes.object,
  onClick: PropTypes.func,
};

Button.defaultProps = {
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
