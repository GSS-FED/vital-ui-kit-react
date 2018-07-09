// @flow

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
};

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
});

export type Layout = {
  maxWitdh?: string,
  minWidth?: string,
  height?: string,
  width?: string,
  maxHeight?: string,
  minHeight?: string,
  size?: string,
  display?: string,
  verticalAlign?: string,
};

export const layout = ({ size, ...props }) => {
  const sizeProp = size
    ? {
        width: size,
        height: size,
      }
    : {};
  return {
    ...props,
    ...sizeProp,
  };
};

type StatusProps = {
  alarm: boolean,
  warning: boolean,
  success: boolean,
  theme: Object,
};

export const stateColor = (
  { alarm, warning, success, theme }: StatusProps,
  defaultColor?: string,
) => {
  if (alarm) return theme.alarm;
  if (warning) return theme.warning;
  if (success) return theme.success;
  return defaultColor || theme.primary;
};

export const transitionBase = (
  _props: any,
  type: string = 'all',
  duration: string = '120ms',
  timing: string = 'ease-out',
  delay: string = '',
) => `transition: ${type} ${duration} ${timing} ${delay}`;

export const borderBottomRadius = (size: number) => `
  border-bottom-left-radius: ${size}px;
  border-bottom-right-radius: ${size}px;
`;

export const borderTopRadius = (size: number) => `
  border-top-left-radius: ${size}px;
  border-top-right-radius: ${size}px;
`;

export const borderLeftRadius = (size: number) => `
  border-top-left-radius: ${size}px;
  border-bottom-left-radius: ${size}px;
`;

export const borderRightRadius = (size: number) => `
  border-bottom-right-radius: ${size}px;
  border-top-right-radius: ${size}px;
`;
