import styled from 'styled-components';
import {
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
  justifySelf,
  FlexProps,
  FlexBasisProps,
  FlexDirectionProps,
  FlexWrapProps,
  AlignContentProps,
  AlignItemsProps,
  AlignSelfProps,
  JustifyContentProps,
  JustifySelfProps,
} from 'styled-system';
import { Box, BoxProps } from './Box';

export interface FlexBoxProps
  extends FlexBasisProps,
    FlexProps,
    FlexDirectionProps,
    FlexWrapProps,
    AlignContentProps,
    AlignItemsProps,
    AlignSelfProps,
    JustifyContentProps,
    JustifySelfProps,
    BoxProps {
  flexGrow?: number;
}

export const Flex = styled(Box)<FlexBoxProps>`
  display: flex;
  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${flexWrap};
  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${justifyContent};
  ${justifySelf};
  ${props => props.flexGrow};
`;

Flex.displayName = 'Vital_Flex';
