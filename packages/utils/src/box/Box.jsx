// @flow
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

const Box = styled.div`
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

export default Box;
