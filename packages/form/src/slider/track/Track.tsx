/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import Selection from './Selection';
import constants from './constants';
import { Size } from '../types';

const Root = styled.div<{
  size: Size;
  alarm: boolean;
  warning: boolean;
  success: boolean;
}>`
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
  disabled: boolean;
  selectionWidth: number;
  size?: 'small' | 'medium' | 'large';
  /** state alarm */
  alarm?: boolean;
  /** state warning */
  warning?: boolean;
  /** state success */
  success?: boolean;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
  onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
  onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
  trackRef?: React.RefObject<any>;
};

// tslint:disable-next-line
const noop = () => {};

class Track extends React.Component<Props> {
  static defaultProps = {
    size: 'medium',
    alarm: false,
    warning: false,
    success: false,
    onMouseDown: noop,
    onMouseUp: noop,
    onTouchEnd: noop,
    onTouchStart: noop,
  };

  static Selection: typeof Selection = Selection;

  render() {
    const {
      disabled,
      selectionWidth,
      size = 'medium',
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      onTouchStart,
      trackRef,
      alarm = false,
      warning = false,
      success = false,
    } = this.props;
    return (
      <Root
        warning={warning}
        success={success}
        alarm={alarm}
        size={size}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        ref={trackRef}
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
  }
}

export default Track;
