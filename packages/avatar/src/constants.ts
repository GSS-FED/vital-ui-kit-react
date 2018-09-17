export type Size = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export type BuiltinTheme = {
  [key in Size]: {
    size: string;
    borderRadius: string;
  }
};
