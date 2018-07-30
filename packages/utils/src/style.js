// @flow

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
