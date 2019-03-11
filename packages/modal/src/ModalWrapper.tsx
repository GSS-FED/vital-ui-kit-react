import styled, { keyframes } from 'styled-components';
import { Box } from '@vital-ui/react-utils';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalWrapper = styled(Box)`
  position: fixed;
  z-index: 1000;
  animation: 0.5s ${fadeIn} ease-out;
`;

export default ModalWrapper;
