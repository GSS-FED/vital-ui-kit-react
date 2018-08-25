declare module 'react-resize-detector' {
  import * as React from 'react';
  export interface ReactResizeDetectorProps
    extends React.Props<ReactResizeDetector> {
    /** Function that will be invoked with width and height arguments */
    onResize?: (width: number, height: number) => void;
    /** Trigger onResize on height change. Default: false */
    handleHeight?: boolean;
    /** Trigger onResize on width change. Default: false */
    handleWidth?: boolean;
    /** Do not trigger onResize when a component mounts. Default: false */
    skipOnMount?: boolean;
    /** Id of the element we want to observe. If none provided, parentElement of the component will be used. Default: "" */
    resizableElementId?: string;
    /** Possible values: throttle and debounce */
    refreshMode?: 'throttle' | 'debounce';
    /** Makes sense only when refreshMode is set. Default: 1000. */
    refreshRate?: number;
    children?: (width: number, height: number) => React.ReactNode;
  }

  declare class ReactResizeDetector extends React.PureComponent<
    ReactResizeDetectorProps
  > {}
  export default ReactResizeDetector;
}
