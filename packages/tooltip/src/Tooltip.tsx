/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import { defaultTheme } from '@vital-ui/react-theme';
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { placements } from './placements';
import { rcTooltipStyle } from './styled';

const TooltipContent = styled.div`
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
  color: ${({ theme }) => theme.tooltip.color};
  background: ${({ theme }) => theme.tooltip.bg};
  border-radius: 4px;
`;

const RcTooltipStyle = createGlobalStyle`
${rcTooltipStyle};
`;

TooltipContent.defaultProps = {
  theme: defaultTheme,
};

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

interface PopupAlign {
  /**
   * move point of source node to align with point of target node, such as ['tr','cc'],
   * align top right point of source node with center point of target node.
   * point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right)
   */
  points: string[];
  /** offset source node by offset[0] in x and offset[1] in y. If offset contains percentage string value, it is relative to sourceNode region. */
  offset: number[];
  /** offset target node by offset[0] in x and offset[1] in y. If targetOffset contains percentage string value, it is relative to targetNode region. */
  targetOffset: number[];
  /**
   * if adjustX field is true, then will adjust source node in x direction if source node is invisible.
   * if adjustY field is true, then will adjust source node in y direction if source node is invisible.
   */
  overflow: {
    adjustX: boolean;
    adjustY: boolean;
  };
  /** whether use css right instead of left to position */
  useCssRight: boolean;
  /** whether use css bottom instead of top to position */
  useCssBottom: boolean;
  /** whether use css transform instead of left/top/right/bottom to position if browser supports. Defaults to false. */
  useCssTransform: boolean;
}

interface RcTriggerProps {
  /** whether popup is visible */
  popupVisible?: boolean;
  /** which actions cause popup shown */
  action?: Array<'hover' | 'click' | 'focus' | 'contextMenu'>;
  popupAlign?: PopupAlign;
  /** Popup content */
  popup: React.ReactNode | (() => React.ReactNode);
  /** additional style of popup */
  popupStyle?: React.CSSProperties;
  /** additional className added to popup */
  popupClassName?: string;
  /** builtin placement align map. used by placement prop */
  builtinPlacements?: object;
  zIndex?: number;
  /** https://github.com/react-component/animate */
  popupTransitionName?: string | object;
  maskTransitionName?: string | object;
  /** delay time to show when mouse enter. unit: s. */
  mouseEnterDelay?: number;
  /** delay time to hide when mouse leave. unit: s. */
  mouseLeaveDelay?: number;
  /** whether destroy popup when hide */
  destroyPopupOnHide?: boolean;
  /** 'width', 'minWidth', 'height', 'minHeight' */
  stretch?: string;
  /** use preset popup align config from builtinPlacements, can be merged by popupAlign prop */
  popupPlacement?: any;
}

export interface TooltipProps extends RcTriggerProps {
  /** the element target for tooltip */
  children: React.ReactNode;
  placement?: Placement;
}

export const Tooltip: React.SFC<TooltipProps> = ({
  children,
  popupStyle,
  popup,
  placement,
  popupPlacement,
  ...props
}) => {
  const TooltipBase = () => [
    <TooltipArrow className="rc-tooltip-arrow" key="arrow" />,
    <TooltipContent key="content" {...popupStyle}>
      {popup}
    </TooltipContent>,
  ];

  return (
    <>
      <Trigger
        popupPlacement={popupPlacement || placement}
        popup={TooltipBase}
        builtinPlacements={placements}
        {...props}
      >
        {children}
      </Trigger>
      <RcTooltipStyle />
    </>
  );
};

Tooltip.defaultProps = {
  action: ['hover'],
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
  popupClassName: 'vital-popup',
  destroyPopupOnHide: false,
  placement: 'bottom',
};
