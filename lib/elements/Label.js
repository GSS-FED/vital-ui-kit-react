import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const labelSizes = {
  small: {
    'font-size': '12px',
    'line-height': '12px',
  },
  medium: {
    'font-size': '14px',
    'line-height': '16px',
  },
  large: {
    'font-size': '16px',
    'line-height': '16px',
  },
};

const Label = styled.label`
  color: ${({ color }) => colors[color]};
  display: inline-block;
  font-size: ${({ size }) => labelSizes[size]['font-size']};
  line-height: ${({ size }) => labelSizes[size]['line-height']};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 8px 0;
  text-transform: ${({ textTransform }) => textTransform};
  transition: all 300ms ease;
`;


Label.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  size: PropTypes.string,
  textTransform: PropTypes.string,
};
Label.defaultProps = {
  color: 'pirmary',
  fontWeight: 400,
  size: 'medium',
  textTransform: 'uppercase',
};

export default Label;
