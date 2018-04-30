// @flow
// import { css } from 'styled-components';

export type Space = {
  margin?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginTop?: string,
  marginHorizontal?: string,
  marginVertical?: string,
  paddingHorizontal?: string,
  paddingVertical?: string,
  padding?: string,
  paddingTop?: string,
  paddingLeft?: string,
  paddingRight?: string,
  paddingBottom?: string,
}

export const space = (props: Space) => ({
  margin: props.margin || '',
  marginBottom: props.marginBottom || '',
  marginLeft: props.marginLeft || '',
  marginTop: props.marginTop || '',
  marginHorizontal: props.marginHorizontal || '',
  marginVertical: props.marginVertical || '',
  paddingHorizontal: props.paddingHorizontal || '',
  paddingVertical: props.paddingVertical || '',
  padding: props.padding || '',
  paddingTop: props.paddingTop || '',
  paddingLeft: props.paddingLeft || '',
  paddingRight: props.paddingRight || '',
  paddingBottom: props.paddingBottom || '',
})

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

export default {
  space,
  stateColor,
  borderBottomRadius,
  borderTopRadius,
  borderLeftRadius,
  borderRightRadius,
};
