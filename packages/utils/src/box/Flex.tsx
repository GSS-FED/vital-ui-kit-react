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
} from 'styled-system';
import Box from './Box';

const FlexBox = styled(Box)`
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
`;

FlexBox.displayName = 'Vital_Flex';

export default FlexBox;
