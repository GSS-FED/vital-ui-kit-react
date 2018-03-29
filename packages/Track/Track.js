/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import Selection from './Selection';
import constants from './constants';

const Root = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  top: 50%;
  left: 0;
  height: ${props => constants[props.size].trackHeight};
  margin-top: -4px;
  background-repeat: repeat-x;
  border-radius: 5px;
  border-color: #c4d2eb;
  width: 100%;
  background-color: ${props => (props.alarm ? '#FFD0B8' : '#d8e3f6')};
  ${props => props.onMouseDown && `cursor: pointer`};
`;

type Props = {
  disabled: boolean,
  selectionWidth: number,
  size?: 'small' | 'medium' | 'large',
  /** state alarm */
  alarm?: boolean,
  /** state warning */
  warning?: boolean,
  /** state success */
  success?: boolean,
  onMouseDown?: (e: SyntheticMouseEvent<HTMLElement>) => mixed,
  onMouseUp?: (e: SyntheticMouseEvent<HTMLElement>) => mixed,
  onTouchStart?: (e: SyntheticMouseEvent<HTMLElement>) => mixed,
  onTouchEnd?: (e: SyntheticMouseEvent<HTMLElement>) => mixed,
  trackRef?: (s: HTMLElement) => mixed
};

const Track = ({
  disabled,
  selectionWidth,
  size,
  onMouseDown,
  onMouseUp,
  onTouchEnd,
  onTouchStart,
  trackRef,
  alarm,
  warning,
  success
}: Props) => (
  <Root
    alarm={alarm}
    size={size}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    innerRef={trackRef}
  >
    <Selection
      alarm={alarm}
      warning={warning}
      success={success}
      disabled={disabled}
      width={selectionWidth}
      size={size}
    />
  </Root>
);

Track.Selection = Selection;

export default Track;
