export type AvatarSize =
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall';

export type BuiltinTheme = {
  [key in AvatarSize]: {
    size: string;
    borderRadius: string;
  }
};
