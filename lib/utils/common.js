import { css } from 'styled-components';

export const stateColor = (props, defaultColor = '#7189b6') => {
  if (props.alarm) return `#EB5000`;
  if (props.warning) return `#FFB400`;
  if (props.success) return `#2BCD86`;
  return defaultColor;
}

export const borderBottomRadius = props => `
  border-bottom-left-radius: ${props}px;
  border-bottom-right-radius: ${props}px;
`;

export const borderTopRadius = props => `
  border-top-left-radius: ${props}px;
  border-top-right-radius: ${props}px;
`;

export const borderLeftRadius = props => `
  border-top-left-radius: ${props}px;
  border-bottom-left-radius: ${props}px;
`;

export const borderRightRadius = props => `
  border-bottom-right-radius: ${props}px;
  border-top-right-radius: ${props}px;
`;
