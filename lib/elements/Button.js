import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import * as colors from '../styles/colors';

const buttonSizes = {
  xsmall: {
    'font-size': '0.8rem',
    'border-radius': '2px',
    padding: 'calc(0.2rem - 1px) 0.533rem',
  },
  small: {
    'font-size': '0.866rem',
    'border-radius': '3px',
    padding: 'calc(0.4rem - 1px) 0.8rem',
  },
  medium: {
    'font-size': '1rem',
    'border-radius': '4px',
    padding: 'calc(0.533rem - 1px) 1.066rem',
  },
  large: {
    'font-size': '1.2rem',
    'border-radius': '5px',
    padding: 'calc(0.666rem - 1px) 1.2rem',
  },
  xlarge: {
    'font-size': '1.4rem',
    'border-radius': '6px',
    padding: 'calc(0.8rem - 1px) 1.333rem',
  },
};

// function setDisplay({ size }) {
//   return size === 'fullWidth' ? 'block' : 'inline-block';
// }
// function setWidth({ size }) {
//   return size === 'fullWidth' ? '100%' : 'initial';
// }

const Button = styled.button`
  position: relative;
  display: inline-block;
  background: ${({ bgColor }) => colors[bgColor]};
  height: 2.066rem;
  color: ${({ fontColor }) => colors[fontColor]};
  cursor: pointer;
  border: 1px solid #c4d2eb;
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  border-radius: ${({ size }) => buttonSizes[size]['border-radius']};
  padding: ${({ size }) => buttonSizes[size]['padding']};
  line-height: 1;
  font-weight: normal;
  margin: 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size]['padding']};
  ${'' /* width: ${setWidth}; */} box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: ${({ bgColor }) => darken(0.1, colors[bgColor])};
  }
`;

Button.propTypes = {
  nature: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'alarm',
    'warning',
    'stable',
  ]),
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  nature: 'default',
  bgColor: 'primaryList1',
  fontColor: 'primary',
  size: 'medium',
};

export default Button;
