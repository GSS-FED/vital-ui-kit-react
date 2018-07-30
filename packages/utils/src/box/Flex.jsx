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

const Flex = styled(Box)`
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

export default Flex;
