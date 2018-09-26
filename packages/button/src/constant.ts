export type Nature =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'alarm'
  | 'warning';

export type ButtonSize =
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall';

export type BuiltinSize = {
  [key in ButtonSize]: {
    fontSize: string;
    borderRadius: string;
    padding: string;
    height: string;
  }
};
