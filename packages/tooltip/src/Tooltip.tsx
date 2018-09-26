/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import Trigger, { RcTriggerProps } from 'rc-trigger';
import 'rc-trigger/assets/index.css';
import './tooltip.css';
import { defaultTheme } from '@vital-ui/react-theme';

import { placements } from './placements';

const TooltipContent = styled.div`
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
  color: ${({ theme }) => theme.tooltip.color};
  background: ${({ theme }) => theme.tooltip.bg};
  border-radius: 4px;
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

export interface TooltipProps extends RcTriggerProps {
  /** the element target for tooltip */
  children: React.ReactNode;
}

export const Tooltip: React.SFC<TooltipProps> = ({
  children,
  popupStyle,
  popup,
  ...props
}) => {
  const TooltipBase = () => [
    <TooltipArrow className="rc-tooltip-arrow" key="arrow" />,
    <TooltipContent key="content" {...popupStyle}>
      {popup}
    </TooltipContent>,
  ];

  return (
    <Trigger
      popup={TooltipBase}
      builtinPlacements={placements}
      {...props}
    >
      {children}
    </Trigger>
  );
};

Tooltip.defaultProps = {
  action: ['hover'],
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
  popupClassName: 'vital-popup',
  destroyPopupOnHide: false,
};
