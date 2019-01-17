import { defaultTheme } from '@vital-ui/react-theme';
import styled, { css } from 'styled-components';
import {
  background,
  backgroundImage,
  BackgroundImageProps,
  backgroundPosition,
  BackgroundPositionProps,
  BackgroundProps,
  backgroundRepeat,
  BackgroundRepeatProps,
  backgroundSize,
  BackgroundSizeProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  borders,
  BordersProps,
  bottom,
  BottomProps,
  boxShadow,
  BoxShadowProps,
  color,
  display,
  DisplayProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  height,
  HeightProps,
  left,
  LeftProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  right,
  RightProps,
  size,
  SizeProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
  BgColorProps,
  bgColor,
} from 'styled-system';

export interface BoxProps
  extends BackgroundImageProps,
    BackgroundPositionProps,
    BackgroundProps,
    BackgroundRepeatProps,
    BackgroundSizeProps,
    BorderColorProps,
    BorderRadiusProps,
    BordersProps,
    BottomProps,
    BoxShadowProps,
    DisplayProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    HeightProps,
    LeftProps,
    LetterSpacingProps,
    LineHeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    OpacityProps,
    PositionProps,
    RightProps,
    SizeProps,
    SpaceProps,
    TextAlignProps,
    TopProps,
    WidthProps,
    ZIndexProps,
    MinWidthProps,
    BgColorProps {
  color?: string;
}

export const superBoxStyle = css`
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${height};
  ${display};
  ${maxWidth};
  ${maxHeight};
  ${minHeight};
  ${size};
  ${position};
  ${zIndex};
  ${top};
  ${right};
  ${left};
  ${bottom};
  ${boxShadow};
  ${backgroundImage};
  ${backgroundPosition};
  ${background};
  ${backgroundRepeat};
  ${backgroundSize};
  ${opacity};
  ${borders};
  ${borderColor};
  ${borderRadius};
  ${textAlign};
  ${lineHeight};
  ${fontWeight};
  ${letterSpacing};
  ${fontFamily};
  ${minWidth};
  ${color};
  ${bgColor};
`;

export const Box = styled('div')<BoxProps>`
  ${superBoxStyle};
`;

Box.defaultProps = {
  theme: defaultTheme,
};
