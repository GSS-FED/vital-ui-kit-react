export type Nature =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'alarm'
  | 'warning';

export type Size = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export type BuiltinSize = {
  [key in Size]: {
    fontSize: string;
    borderRadius: string;
    padding: string;
    height: string;
  }
};
