import styled, { css } from 'styled-components';
import { Box } from '@vital-ui/react-utils';

export const InputWrapper = styled(Box)`
  position: relative;
  display: block;
`;

export const IconButton = styled(Box)`
  height: 100%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: initial;
  cursor: pointer;
`;

export const rightIconStyle = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9;
`;

export const leftIconStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

/**
 * @example
 * <InputWrapper>
 *    <Input pl="2.2rem" />
 *    <LeftIconButton>{Icon}</LeftIconButton>
 * </InputWrapper>
 */
export const LeftIconButton = styled(IconButton)`
  ${leftIconStyle};
`;

/**
 * @example
 * <InputWrapper>
 *  <Input pr="2.2rem" />
 *  <RightIconButton>{Icon}</LeftIconButton>
 * </InputWrapper>
 */
export const RightIconButton = styled(IconButton)`
  ${rightIconStyle};
`;
