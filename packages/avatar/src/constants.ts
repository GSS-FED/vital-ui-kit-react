export type SizeType =
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall';

export const avatarSizes = {
  xsmall: {
    size: '16px',
    borderRadius: '2px',
  },
  small: {
    size: '24px',
    borderRadius: '2px',
  },
  medium: {
    size: '32px',
    borderRadius: '3px',
  },
  large: {
    size: '48px',
    borderRadius: '4px',
  },
  xlarge: {
    size: '64px',
    borderRadius: '4px',
  },
};

export const badgeSizes = {
  xlarge: {
    height: '17px',
  },
  large: {
    height: '13px',
  },
  medium: {
    height: '9px',
  },
  small: {
    height: '7px',
  },
  xsmall: {
    height: '5px',
  },
};
