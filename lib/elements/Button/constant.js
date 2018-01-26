// @flow
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


const defaultTheme = {
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
};

export { buttonSizes, defaultTheme };
