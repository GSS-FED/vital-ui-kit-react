/** @flow */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */

import * as React from 'react';

import cn from 'classnames';
// import Column from './Column';
import { findDOMNode } from 'react-dom';
import { MultiGrid } from 'react-virtualized';
import type {
  Alignment,
  CellPosition,
  ScrollParams,
  RenderedSection,
} from 'react-virtualized';

import defaultRowRenderer from './SimpleTable/defaultRowRenderer';
import defaultHeaderRowRenderer from './SimpleTable/defaultHeaderRowRenderer';
import defaultCellRenderer from './defaultCellRenderer';
import SortDirection from './SortDirection';
import accessibilityOverscanIndicesGetter from './accessibilityOverscanIndicesGetter';
import { HeaderCell } from './styled';

export type CellRendererParams = {
  columns: any[],
  columnIndex: number,
  isScrolling: boolean,
  isVisible: boolean,
  key: string,
  parent: Object,
  rowIndex: number,
  style: Object,
};

export type CellRenderer = (
  props: CellRendererParams,
) => React.Element<*>;

type Props = {
  'aria-label'?: string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight?: boolean,

  cellRenderer: CellRenderer,
  /** One or more Columns describing the data displayed in this row */
  children: React.Node,

  /** Optional CSS class name */
  className?: string,

  /** Disable rendering the header at all */
  disableHeader?: boolean,

  /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: number,

  /** Optional custom CSS class name to attach to inner Grid element. */
  gridClassName?: string,

  /** Optional inline style to attach to inner Grid element. */
  gridStyle?: CSSStyleDeclaration,

  hasHorizontalBorder?: boolean,
  hasVerticalBorder?: boolean,

  /** Optional CSS class to apply to all column headers */
  headerClassName?: string,

  /** Fixed height of header row */
  headerHeight: number,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: any[],
   *   style: any
   * }): PropTypes.node
   */
  headerRowRenderer?: ({
    className: string,
    column: any[],
    style: CSSStyleDeclaration,
  }) => React.Node,

  /** Optional custom inline style to attach to table header columns. */
  headerStyle?: CSSStyleDeclaration,

  /** Fixed/available height for out DOM element */
  height: number,

  /** Optional id */
  id?: string | number,

  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
  noRowsRenderer?: () => mixed,

  /**
   * Optional callback when a column's header is clicked.
   * ({ columnData: any, dataKey: string }): void
   */
  onHeaderClick?: ({ columnData: any, dataKey: string }) => void,

  /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */
  onRowClick?: ({ index: number }) => void,

  /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */
  onRowDoubleClick?: ({ index: number }) => void,

  /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */
  onRowMouseOut?: ({ index: number }) => void,

  /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */
  onRowMouseOver?: ({ index: number }) => void,

  /**
   * Callback invoked when a user right-clicks on a table row.
   * ({ index: number }): void
   */
  onRowRightClick?: ({ index: number }) => void,

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered?: ({
    startIndex: number,
    stopIndex: number,
  }) => void,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll?: ({
    clientHeight: number,
    scrollHeight: number,
    scrollTop: number,
  }) => void,

  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter?: () => mixed,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount?: number,

  /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */
  rowClassName: string | (({ index: number }) => string),

  /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */
  rowGetter: ({ index: number }) => any,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight?: number | (({ index: number }) => number),

  /** Number of rows in table. */
  rowCount: number,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */
  rowRenderer: ({
    className: string,
    columns: any[],
    index: number,
    isScrolling: boolean,
    onRowClick: ?Function,
    onRowDoubleClick: ?Function,
    onRowMouseOver: ?Function,
    onRowMouseOut: ?Function,
    rowData: any,
    style: any,
  }) => React$Element<any>,

  /** Optional custom inline style to attach to table rows. */
  rowStyle?: | CSSStyleDeclaration
    | (({ index: number }) => CSSStyleDeclaration),

  /** See Grid#scrollToAlignment */
  scrollToAlignment: Alignment,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: number,

  /** Vertical offset. */
  scrollTop?: number,

  striped?: boolean,

  /**
   * Sort function to be called if a sortable header is clicked.
   * Should implement the following interface: ({
   *   defaultSortDirection: 'ASC' | 'DESC',
   *   event: MouseEvent,
   *   sortBy: string,
   *   sortDirection: SortDirection
   * }): void
   */
  sort?: ({
    defaultSortDirection: 'ASC' | 'DESC',
    event: MouseEvent,
    sortBy: string,
    sortDirection: SortDirection,
  }) => void,

  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
  sortBy?: string,

  /** Table data is currently sorted in this direction (if it is sorted at all) */
  sortDirection?: SortDirection.ASC | SortDirection.DESC,

  /** Optional inline style */
  style?: CSSStyleDeclaration,

  /** Tab index for focus */
  tabIndex?: number,

  /** Width of list */
  width: number,
};

type State = {
  scrollbarWidth: number,
  hoveredColumnIndex?: number,
  hoveredRowIndex?: number,
};

/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */
export default class Table extends React.PureComponent<Props, State> {
  static defaultProps = {
    cellRenderer: defaultCellRenderer,
    disableHeader: false,
    estimatedRowSize: 30,
    headerHeight: 40,
    headerStyle: {},
    noRowsRenderer: () => null,
    onRowsRendered: () => null,
    onScroll: () => null,
    overscanIndicesGetter: accessibilityOverscanIndicesGetter,
    overscanRowCount: 10,
    rowRenderer: defaultRowRenderer,
    headerRowRenderer: defaultHeaderRowRenderer,
    hasVerticalBorder: false,
    hasHorizontalBorder: false,
    striped: false,
    rowStyle: {},
    scrollToAlignment: 'auto',
    scrollToIndex: -1,
    style: {},
    rowHeight: 40,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      scrollbarWidth: 0,
      hoveredColumnIndex: undefined,
      hoveredRowIndex: undefined,
    };
  }

  Grid: MultiGrid;

  _cachedColumnStyles: any[];

  forceUpdateGrid() {
    if (this.Grid) {
      this.Grid.forceUpdate();
    }
  }

  /** TODO: See Grid#getOffsetForCell */
  getOffsetForRow({
    alignment,
    index,
  }: {
    alignment?: Alignment,
    index?: number,
  }) {
    if (this.Grid) {
      const { scrollTop } = this.Grid.getOffsetForCell({
        alignment,
        rowIndex: index,
      });

      return scrollTop;
    }
    return 0;
  }

  /** CellMeasurer compatibility */
  invalidateCellSizeAfterRender({
    columnIndex,
    rowIndex,
  }: CellPosition) {
    if (this.Grid) {
      this.Grid.invalidateCellSizeAfterRender({
        rowIndex,
        columnIndex,
      });
    }
  }

  /** See Grid#measureAllCells */
  measureAllRows() {
    if (this.Grid) {
      this.Grid.measureAllCells();
    }
  }

  /** CellMeasurer compatibility */
  recomputeGridSize({
    columnIndex = 0,
    rowIndex = 0,
  }: CellPosition = {}) {
    if (this.Grid) {
      this.Grid.recomputeGridSize({
        rowIndex,
        columnIndex,
      });
    }
  }

  /** See Grid#recomputeGridSize */
  recomputeRowHeights(index: number = 0) {
    if (this.Grid) {
      this.Grid.recomputeGridSize({
        rowIndex: index,
      });
    }
  }

  /** TODO: See Grid#scrollToPosition */
  scrollToPosition(scrollTop: number = 0) {
    if (this.Grid) {
      this.Grid.scrollToPosition({ scrollTop });
    }
  }

  /** TODO: See Grid#scrollToCell */
  scrollToRow(index: number = 0) {
    if (this.Grid) {
      this.Grid.scrollToCell({
        columnIndex: 0,
        rowIndex: index,
      });
    }
  }

  componentDidMount() {
    this._setScrollbarWidth();
  }

  componentDidUpdate() {
    this._setScrollbarWidth();
  }

  render() {
    const {
      className,
      disableHeader,
      gridClassName,
      gridStyle,
      headerHeight,
      height,
      id,
      noRowsRenderer,
      rowClassName,
      rowStyle,
      scrollToIndex,
      style,
      width,
      rowCount,
    } = this.props;

    const { scrollbarWidth } = this.state;

    const availableRowsHeight = disableHeader
      ? height
      : height - headerHeight;

    const rowClass =
      typeof rowClassName === 'function'
        ? rowClassName({ index: -1 })
        : rowClassName;
    const rowStyleObject =
      typeof rowStyle === 'function'
        ? rowStyle({ index: -1 })
        : rowStyle;

    // Precompute and cache column styles before rendering rows and columns to speed things up
    this._cachedColumnStyles = [];
    const columns = this._getHeaderColumns();
    const fixedColumnCount = columns.filter(
      column => column.props.fixed === true,
    ).length;
    // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
    // This is done because Grid is a pure component and won't update unless its properties or state has changed.
    // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
    return (
      <div
        className={cn('ReactVirtualized__Table', className)}
        id={id}
        role="grid"
        style={style}
      >
        <MultiGrid
          {...this.props}
          width={width}
          className={cn(
            'ReactVirtualized__Table__Grid',
            gridClassName,
          )}
          cellRenderer={props =>
            this._createGrid({
              columns,
              ...props,
              rowClass,
              rowStyleObject,
            })
          }
          columnWidth={({ index }) => columns[index].props.width}
          columnCount={columns.length}
          enableFixedColumnScroll
          enableFixedRowScroll
          fixedRowCount={1}
          fixedColumnCount={fixedColumnCount}
          height={availableRowsHeight}
          id={undefined}
          noContentRenderer={noRowsRenderer}
          onScroll={this._onScroll}
          rowCount={rowCount}
          onSectionRendered={this._onSectionRendered}
          ref={this._setRef}
          role="rowgroup"
          scrollbarWidth={scrollbarWidth}
          scrollToRow={scrollToIndex}
          style={{
            ...gridStyle,
            overflowX: 'hidden',
          }}
        />
      </div>
    );
  }

  _createHeader({
    column,
    index,
    style,
  }: {
    column: React$Element<any>,
    index: number,
    style: CSSStyleDeclaration,
  }) {
    const {
      headerClassName,
      headerStyle,
      onHeaderClick,
      sort,
      sortBy,
      sortDirection,
      hasHorizontalBorder,
      hasVerticalBorder,
    } = this.props;

    const {
      columnData,
      dataKey,
      defaultSortDirection,
      disableSort,
      headerRenderer,
      id,
      label,
    } = column.props;
    const sortEnabled = !disableSort && sort;

    const classNames = cn(
      'ReactVirtualized__Table__headerColumn',
      headerClassName,
      column.props.headerClassName,
      {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled,
      },
    );

    const renderedHeader = headerRenderer({
      columnData,
      dataKey,
      disableSort,
      label,
      sortBy,
      sortDirection,
    });

    let headerOnClick;
    let headerOnKeyDown;
    let headerTabIndex;
    let headerAriaSort;
    let headerAriaLabel;

    if (sortEnabled || onHeaderClick) {
      // If this is a sortable header, clicking it should update the table data's sorting.
      const isFirstTimeSort = sortBy !== dataKey;

      // If this is the firstTime sort of this column, use the column default sort order.
      // Otherwise, invert the direction of the sort.
      // eslint-disable-next-line
      const newSortDirection = isFirstTimeSort
        ? defaultSortDirection
        : sortDirection === SortDirection.DESC
          ? SortDirection.ASC
          : SortDirection.DESC;

      const onClick = event => {
        if (sortEnabled && sort) {
          sort({
            defaultSortDirection,
            event,
            sortBy: dataKey,
            sortDirection: newSortDirection,
          });
        }
        if (onHeaderClick) {
          onHeaderClick({ columnData, dataKey, event });
        }
      };

      const onKeyDown = event => {
        if (event.key === 'Enter' || event.key === ' ') {
          onClick(event);
        }
      };

      headerAriaLabel =
        column.props['aria-label'] || label || dataKey;
      headerTabIndex = 0;
      headerOnClick = onClick;
      headerOnKeyDown = onKeyDown;
    }

    if (sortBy === dataKey) {
      headerAriaSort =
        sortDirection === SortDirection.ASC
          ? 'ascending'
          : 'descending';
    }

    // Avoid using object-spread syntax with multiple objects here,
    // Since it results in an extra method call to 'babel-runtime/helpers/extends'
    // See PR https://github.com/bvaughn/react-virtualized/pull/942
    return (
      <HeaderCell
        hasHorizontalBorder={hasHorizontalBorder}
        hasVerticalBorder={hasVerticalBorder}
        aria-label={headerAriaLabel}
        aria-sort={headerAriaSort}
        className={classNames}
        id={id}
        key={`Header-Col${index}`}
        onClick={headerOnClick}
        onKeyDown={headerOnKeyDown}
        role="columnheader"
        style={{
          ...headerStyle,
          ...style,
        }}
        tabIndex={headerTabIndex}
      >
        {renderedHeader}
      </HeaderCell>
    );
  }

  _createGrid: CellRenderer = ({
    columns,
    rowIndex,
    isScrolling,
    key,
    parent,
    style,
    columnIndex,
    isVisible,
    rowStyleObject,
    rowClass,
  }) => {
    const { hasHorizontalBorder, hasVerticalBorder, striped } = this.props;
    if (rowIndex === 0) {
      const column = columns[columnIndex];
      return this._createHeader({
        column,
        index: columnIndex,
        style,
      });
    }
    return this.props.cellRenderer({
      isVisible,
      key,
      style,
      columnIndex,
      rowIndex: rowIndex - 1,
      parent,
      isScrolling,
      columns,
      rowStyleObject,
      rowClass,
      hasHorizontalBorder,
      hasVerticalBorder,
      striped,
      onHover: this._onHoverCell,
      hoveredColumnIndex: this.state.hoveredColumnIndex,
      hoveredRowIndex: this.state.hoveredRowIndex,
    });
  };

  _onHoverCell = ({ rowIndex, columnIndex }: CellPosition) => {
    this.setState({
      hoveredColumnIndex: columnIndex,
      hoveredRowIndex: rowIndex,
    });
  };

  _getHeaderColumns = () => {
    const { children, disableHeader } = this.props;
    const items: React$Element<any>[] = disableHeader
      ? []
      : React.Children.toArray(children);
    return items;
  };

  _getRowHeight(rowIndex: number) {
    const { rowHeight } = this.props;

    return typeof rowHeight === 'function'
      ? rowHeight({ index: rowIndex })
      : rowHeight;
  }

  _onScroll = ({
    clientHeight,
    scrollHeight,
    scrollTop,
  }: ScrollParams) => {
    const { onScroll } = this.props;
    if (onScroll) {
      onScroll({ clientHeight, scrollHeight, scrollTop });
    }
  };

  _onSectionRendered = ({
    rowOverscanStartIndex,
    rowOverscanStopIndex,
    rowStartIndex,
    rowStopIndex,
  }: RenderedSection) => {
    const { onRowsRendered } = this.props;
    if (onRowsRendered) {
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex,
      });
    }
  };

  _setRef = (ref: ?HTMLElement) => {
    this.Grid = ref;
  };

  _setScrollbarWidth() {
    if (this.Grid) {
      // eslint-disable-next-line
      const Grid = findDOMNode(this.Grid);
      if (Grid) {
        // $FlowFixMe
        const clientWidth: number = Grid.clientWidth || 0;
        // $FlowFixMe
        const offsetWidth: number = Grid.offsetWidth || 0;
        const scrollbarWidth = offsetWidth - clientWidth;
        this.setState({ scrollbarWidth });
      }
    }
  }
}
