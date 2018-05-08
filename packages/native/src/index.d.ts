import * as React from 'react';
import {
  ImageStyle,
  ViewStyle,
  TextStyle,
  Animated,
  TouchableWithoutFeedbackProps
} from 'react-native';

import {
  CardHeaderProps,
  CardProps,
  CardSideLabelProps
} from './Card';
import { BoxProps } from './Box';
import { ThemeProps } from './Theme';

export interface AvatarProps {
  size?: number;
  src?: string;
  shadow?: boolean;
  wrapperStyle?: ViewStyle;
  imageStyle?: ImageStyle;
}

export const Avatar: React.Component<AvatarProps>;

export interface BadgeProps {
  label: string | number;
  bg?: string;
  color: string;
}

export const Badge: React.ComponentType<BadgeProps>;

export interface ButtonProps {
  title: string;
  active?: boolean;
  onPress(): void;
}

export const Button: React.ComponentType<ButtonProps>;

export interface LargeHeaderProps {
  children(onScroll: () => void): React.ReactNode;
  title: string;
  titleStyle?: TextStyle;
  avatar?: Avatar;
}

export interface LargeHeaderState {
  scrollOffset: Animated.Value;
  titleWidth: number;
}

export class LargeHeader extends React.Component<
  LargeHeaderProps,
  LargeHeaderState
> {}

export interface ListSpacerState {
  flatListHeight: Animated.Value;
}

export interface ListSpacerProps {
  duration?: number;
  children?(renderProps: renderProps): React.ReactNode;
  render?(renderProps: renderProps): React.ReactNode;
}

export class ListSpacer extends React.Component<
  ListSpacerProps,
  ListeningState
> {}

export class PressOutside extends React.Component<
  {
    onPressOutside(): void;
  } & TouchableWithoutFeedbackProps
> {}

export const ImageBackground: React.ComponentType<{
  children: React.ReactNode;
}>;

export interface CheckboxProps {
  checked?: boolean;
  size?: 16;
  onChange?(checked: boolean): void;
}

export class Checkbox extends React.Component<
  CheckboxProps,
  { checked: boolean }
> {}

export interface PillProps {
  label: string;
  bg?: string;
  color?: string;
}

export interface PillsGroup {
  marginBetween?: number;
  children: React.ReactNode;
}

export class Pill extends React.Component<PillProps> {
  static Group: React.ComponentType<PillsGroup>;
}

export class Card extends React.Component<CardProps> {
  static Header: React.ComponentType<CardHeaderProps>;
  static SideLabel: React.ComponentType<CardSideLabelProps>;
}

export const Box: React.ComponentType<BoxProps>;

export class ThemeProvider extends React.Component<ThemeProps> {}
