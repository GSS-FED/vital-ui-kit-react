// @flow
import * as React from 'react';
import {
  space,
  width,
  fontSize,
  color,
  display,
  height,
  maxWidth,
  maxHeight,
  minHeight,
  size,
  position,
  zIndex,
  top,
  right,
  left,
  bottom,
  boxShadow,
  backgroundImage,
  backgroundPosition,
  background,
  backgroundRepeat,
  backgroundSize,
  opacity,
  borders,
  borderColor,
  borderRadius,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  fontFamily,
} from 'styled-system';
import styled from 'styled-components';

export const BoxBase = styled.div`
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
`;

type Props = {
  children: React.Node,
  style?: CSSStyleDeclaration,
  className?: string,
};

const Box = ({
  className,
  children,
  style,
  ...props
}: Props & Space & Layout) => (
  <BoxBase className={className} style={style} {...props}>
    {children}
  </BoxBase>
);

Box.defaultProps = {
  /* eslint-disable react/default-props-match-prop-types */
  style: undefined,
  className: '',
};

export default Box;
