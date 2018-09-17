import React from 'react';
import styled from 'styled-components';
import {
  style,
  fontSize as fontSizeSystem,
  fontFamily,
  fontWeight,
  FontFamilyProps,
  FontSizeProps,
  GlobalStyleValues,
  ResponsiveValue,
  space,
  SpaceProps,
  color as colorSystem,
  ColorProps,
  display,
  DisplayProps,
  lineHeight as lineHeightSystem,
  LineHeightProps,
} from 'styled-system';

const overflow = style({
  prop: 'overflow',
});

type OverflowValue =
  | GlobalStyleValues
  | 'auto'
  | 'hidden'
  | 'visible'
  | 'scroll';

type FontWeightValue =
  | GlobalStyleValues
  | 'regular'
  | 'bold'
  | 'bolder'
  | number;

interface TextProps
  extends FontFamilyProps,
    FontSizeProps,
    SpaceProps,
    ColorProps,
    DisplayProps,
    LineHeightProps {
  fontWeight?: ResponsiveValue<FontWeightValue>;
  value?: number;
  overflow?: OverflowValue;
}

const TextBase = styled('div')`
  ${fontSizeSystem};
  ${fontFamily};
  ${fontWeight};
  ${space};
  ${colorSystem};
  ${overflow};
  ${display};
  ${lineHeightSystem};
`;

const Text: React.SFC<TextProps> = ({ children, ...props }) => (
  // @ts-ignore
  <TextBase {...props}>{children}</TextBase>
);

export default Text;
