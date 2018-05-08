import * as React from 'react';

import {
  CardHeaderProps,
  CardProps,
  CardSideLabelProps
} from './Card';
import { BoxProps } from './Box';
import { ThemeProps } from './Theme';
import { ImageBackgroundProps } from './ImageBackground';
import { AvatarProps } from './Avatar';
import { BadgeProps } from './Badge';
import { ButtonProps } from './Button';
import { CheckboxProps, CheckboxState } from './Checkbox';
import { PressOutsideProps } from './PressOutside';
import { ListSpacerProps, ListSpacerState } from './ListSpacer';
import { PillProps, PillsGroupProps } from './Pills';
import { LargeHeaderProps, LargeHeaderState } from './LargeHeader';

export const Avatar: React.Component<AvatarProps>;

export const Badge: React.ComponentType<BadgeProps>;

export const Button: React.ComponentType<ButtonProps>;

export class LargeHeader extends React.Component<
  LargeHeaderProps,
  LargeHeaderState
> {}

export class ListSpacer extends React.Component<
  ListSpacerProps,
  ListeningState
> {}

export class PressOutside extends React.Component<
  PressOutsideProps
> {}

export const ImageBackground: React.ComponentType<
  ImageBackgroundProps
>;

export class Checkbox extends React.Component<
  CheckboxProps,
  CheckboxState
> {}

export class Pill extends React.Component<PillProps> {
  static Group: React.ComponentType<PillsGroup>;
}

export class Card extends React.Component<CardProps> {
  static Header: React.ComponentType<CardHeaderProps>;
  static SideLabel: React.ComponentType<CardSideLabelProps>;
}

export const Box: React.ComponentType<BoxProps>;

export class ThemeProvider extends React.Component<ThemeProps> {}
