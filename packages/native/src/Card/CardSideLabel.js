// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components/native';

export type P = {
  color: string,
};

const CardSideLabel: ComponentType<P> = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 7;
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
  background-color: ${props => props.color};
`;

export default CardSideLabel;
