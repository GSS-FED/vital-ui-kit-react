import * as React from 'react';
import Trigger from 'rc-trigger';
// import 'rc-trigger/assets/index.css';

import { PopupContent } from './PopupContent';
import { placements, Placement } from './placements';

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

export interface PopupProps {
  /** whether popup is visible */
  popupVisible?: boolean;
  /** which actions cause popup shown */
  action?: Array<'hover' | 'click' | 'focus' | 'contextMenu'>;
  popupAlign?: PopupAlign;
  placement?: Placement;
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

export class Popup extends React.Component<PopupProps> {
  static defaultProps: Partial<PopupProps> = {
    action: ['click'],
    placement: 'bottom',
    popupClassName: 'Vital__Popup',
    destroyPopupOnHide: false,
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0,
  };

  static Content = PopupContent;

  render() {
    const {
      children,
      placement,
      builtinPlacements,
      ...rest
    } = this.props;
    return (
      <Trigger
        popupPlacement={placement}
        builtinPlacements={{ ...placements, ...builtinPlacements }}
        {...rest}
      >
        {children}
      </Trigger>
    );
  }
}
