/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';
import './tooltip.css';

import { placements } from './placements';

const TooltipContent = styled.div`
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
  color: ${({ theme }) => theme.tooltip.color};
  background: ${({ theme }) => theme.tooltip.bg};
  border-radius: 4px;
`;

const TooltipArrow = styled.div``;

export type Placement =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'leftTop'
  | 'topRight'
  | 'rightTop'
  | 'bottomRight'
  | 'rightBottom'
  | 'bottomLeft'
  | 'leftBottom';

export interface TooltipProps {
  /** the element target for tooltip */
  children: React.ReactNode;
  /** an array of 'click', 'hover', 'focus', 'contextMenu' */
  trigger: Array<string>;
  /** the placement tooltip show up */
  placement: Placement;
  /** popup overlay content, with default styled wrapper */
  overlay?: React.ReactNode;
  /** render your own custom overlay with no default style */
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  /** insert popup style */
  popupStyle?: object;
  popupTransitionName?: string | object;
  /** popup z-index */
  zIndex?: number;
  popupAlign?: object;
  popupClassName?: string;
  /** whether destroy popup when hide */
  destroyPopupOnHide?: boolean;
}

export const Tooltip: React.SFC<TooltipProps> = ({
  children,
  trigger,
  overlay,
  mouseEnterDelay,
  mouseLeaveDelay,
  popupStyle,
  popupTransitionName,
  zIndex,
  popupAlign,
  popupClassName,
  destroyPopupOnHide,
  placement,
}) => {
  const TooltipBase = () => [
    <TooltipArrow className="rc-tooltip-arrow" key="arrow" />,
    <TooltipContent key="content" {...popupStyle}>
      {overlay}
    </TooltipContent>,
  ];

  return (
    <Trigger
      popup={TooltipBase}
      action={trigger}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      popupStyle={popupStyle}
      popupTransitionName={popupTransitionName}
      zIndex={zIndex}
      popupAlign={popupAlign}
      popupClassName={popupClassName}
      destroyPopupOnHide={destroyPopupOnHide}
      popupPlacement={placement}
      builtinPlacements={placements}
    >
      {children}
    </Trigger>
  );
};

Tooltip.defaultProps = {
  trigger: ['hover'],
  overlay: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
  popupClassName: 'vital-popup',
  destroyPopupOnHide: false,
};
