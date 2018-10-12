declare module 'rc-trigger' {
  import React from 'react';
  export interface RcTriggerProps {
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

  export default class extends React.Component<Props> {}
}
