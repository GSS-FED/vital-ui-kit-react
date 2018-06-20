/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

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
  border-color: ${({ theme }) => theme.track.borderColor};
  width: 100%;
  background-color: ${({ theme, alarm }) =>
    alarm ? theme.track.alarmbg : theme.track.bg};
  ${props => props.onMouseDown && 'cursor: pointer'};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

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
  onMouseDown?: (e: SyntheticMouseEvent<HTMLElement>) => {},
  onMouseUp?: (e: SyntheticMouseEvent<HTMLElement>) => {},
  onTouchStart?: (e: SyntheticMouseEvent<HTMLElement>) => {},
  onTouchEnd?: (e: SyntheticMouseEvent<HTMLElement>) => {},
  trackRef?: (s: HTMLElement) => {},
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
  success,
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

Track.defaultProps = {
  size: 'medium',
  alarm: false,
  warning: false,
  success: false,
  onMouseDown: () => {},
  onMouseUp: () => {},
  onTouchEnd: () => {},
  onTouchStart: () => {},
  trackRef: () => {},
};

Track.Selection = Selection;

export default Track;
