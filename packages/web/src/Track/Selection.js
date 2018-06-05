// @flow

import * as React from 'react';
import styled from 'styled-components';

import constants from './constants';
import { borderRightRadius, stateColor } from '../utils';

const Root = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  left: 0;
  height: ${props => constants[props.size].trackHeight};
  top: 0;
  width: ${props => `${props.width}px`};
  pointer-events: none;
  background-color: ${props =>
      stateColor(
        props,
        props.disabled
          ? props.theme.disabledBackground
          : props.theme.background,
      )}
    ${borderRightRadius(0)};
`;

type Props = {
  size?: 'small' | 'medium' | 'large',
  disabled?: boolean,
  width: number,
  /** state alarm */
  alarm?: boolean,
  /** state warning */
  warning?: boolean,
  /** state success */
  success?: boolean,
};

const Selection = ({
  size,
  disabled,
  width,
  alarm,
  warning,
  success,
}: Props) => (
  <Root
    size={size}
    disabled={disabled}
    width={width}
    alarm={alarm}
    warning={warning}
    success={success}
  />
);

Selection.defaultProps = {
  size: 'medium',
  disabled: false,
  alarm: false,
  warning: false,
  success: false,
};

export default Selection;
