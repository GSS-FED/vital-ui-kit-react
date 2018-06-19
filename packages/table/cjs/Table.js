'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactVirtualized = require('react-virtualized');

var _defaultRowRenderer = require('./SimpleTable/defaultRowRenderer');

var _defaultRowRenderer2 = _interopRequireDefault(_defaultRowRenderer);

var _defaultHeaderRowRenderer = require('./SimpleTable/defaultHeaderRowRenderer');

var _defaultHeaderRowRenderer2 = _interopRequireDefault(_defaultHeaderRowRenderer);

var _defaultCellRenderer = require('./defaultCellRenderer');

var _defaultCellRenderer2 = _interopRequireDefault(_defaultCellRenderer);

var _SortDirection = require('./SortDirection');

var _SortDirection2 = _interopRequireDefault(_SortDirection);

var _accessibilityOverscanIndicesGetter = require('./accessibilityOverscanIndicesGetter');

var _accessibilityOverscanIndicesGetter2 = _interopRequireDefault(_accessibilityOverscanIndicesGetter);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/mouse-events-have-key-events  */

// $FlowFixMe


/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */
var Table = function (_React$PureComponent) {
  _inherits(Table, _React$PureComponent);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.handleCheckboxChange = function (_ref) {
      var rowIndex = _ref.rowIndex,
          checked = _ref.checked;

      if (rowIndex === 0) {
        _this.setState({
          selectedIndex: checked ? [] : [].concat(_toConsumableArray(Array(_this.props.rowCount).keys()))
        });
      } else {
        _this.setState(function (prevState) {
          return {
            selectedIndex: checked ? prevState.selectedIndex.filter(function (x) {
              return x !== rowIndex;
            }) : [].concat(_toConsumableArray(prevState.selectedIndex), [rowIndex])
          };
        });
      }
      _this.forceUpdateGrid();
    };

    _this._checkboxWrapper = function (_ref2) {
      var label = _ref2.label,
          checkbox = _ref2.checkbox;
      return React.createElement(
        _styled.HeaderLabel,
        {
          className: 'ReactVirtualized__Table__headerTruncatedText',
          key: 'label',
          title: label
        },
        checkbox
      );
    };

    _this._createGrid = function (_ref3) {
      var columns = _ref3.columns,
          rowIndex = _ref3.rowIndex,
          isScrolling = _ref3.isScrolling,
          key = _ref3.key,
          parent = _ref3.parent,
          style = _ref3.style,
          columnIndex = _ref3.columnIndex,
          isVisible = _ref3.isVisible,
          rowStyleObject = _ref3.rowStyleObject,
          rowClass = _ref3.rowClass;
      var _this$props = _this.props,
          hasHorizontalBorder = _this$props.hasHorizontalBorder,
          hasVerticalBorder = _this$props.hasVerticalBorder,
          striped = _this$props.striped;

      if (rowIndex === 0) {
        var _column = columns[columnIndex];
        return _this._createHeader({
          column: _column,
          index: columnIndex,
          style: style
        });
      }

      var isEven = rowIndex % 2 === 0 && striped;
      var cellProps = {
        isVisible: isVisible,
        key: key,
        style: style,
        columnIndex: columnIndex,
        rowIndex: rowIndex - 1,
        parent: parent,
        isScrolling: isScrolling,
        columns: columns,
        rowStyleObject: rowStyleObject,
        rowClass: rowClass,
        hasHorizontalBorder: hasHorizontalBorder,
        hasVerticalBorder: hasVerticalBorder,
        striped: striped,
        isEven: isEven,
        hoveredColumn: _this.state.hoveredColumnIndex === columnIndex - 1,
        hoveredRow: _this.state.hoveredRowIndex === rowIndex - 1,
        onHover: _this._onHoverCell
      };
      var hasCheckbox = columns.length > 0 && columns[0].props.dataKey === 'checkbox';
      if (hasCheckbox && columnIndex === 0) {
        var checkbox = columns[columnIndex].props.checkboxRenderer({
          rowIndex: rowIndex,
          selectedIndex: _this.state.selectedIndex,
          handleCheckboxChange: _this.handleCheckboxChange
        });
        return React.createElement(
          _styled.CheckboxCell,
          _extends({
            isEven: isEven
          }, cellProps, {
            onMouseOver: function onMouseOver() {
              return cellProps.onHover({
                rowIndex: rowIndex - 1,
                columnIndex: columnIndex
              });
            }
          }),
          checkbox
        );
      }
      return _this.props.cellRenderer(cellProps);
    };

    _this._onHoverCell = function (_ref4) {
      var rowIndex = _ref4.rowIndex,
          columnIndex = _ref4.columnIndex;

      _this.setState({
        hoveredColumnIndex: columnIndex,
        hoveredRowIndex: rowIndex
      });
    };

    _this._getHeaderColumns = function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          disableHeader = _this$props2.disableHeader;

      var items = disableHeader ? [] : React.Children.toArray(children);
      return items;
    };

    _this._onScroll = function (_ref5) {
      var clientHeight = _ref5.clientHeight,
          scrollHeight = _ref5.scrollHeight,
          scrollTop = _ref5.scrollTop;
      var onScroll = _this.props.onScroll;

      if (onScroll) {
        onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
      }
    };

    _this._onSectionRendered = function (_ref6) {
      var rowOverscanStartIndex = _ref6.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref6.rowOverscanStopIndex,
          rowStartIndex = _ref6.rowStartIndex,
          rowStopIndex = _ref6.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;

      if (onRowsRendered) {
        onRowsRendered({
          overscanStartIndex: rowOverscanStartIndex,
          overscanStopIndex: rowOverscanStopIndex,
          startIndex: rowStartIndex,
          stopIndex: rowStopIndex
        });
      }
    };

    _this._setRef = function (ref) {
      _this.Grid = ref;
    };

    _this.state = {
      scrollbarWidth: 0,
      hoveredColumnIndex: undefined,
      hoveredRowIndex: undefined,
      selectedIndex: []
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** TODO: See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref7) {
      var alignment = _ref7.alignment,
          index = _ref7.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref8) {
      var columnIndex = _ref8.columnIndex,
          rowIndex = _ref8.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref9$columnIndex = _ref9.columnIndex,
          columnIndex = _ref9$columnIndex === undefined ? 0 : _ref9$columnIndex,
          _ref9$rowIndex = _ref9.rowIndex,
          rowIndex = _ref9$rowIndex === undefined ? 0 : _ref9$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }

    /** TODO: See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** TODO: See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          disableHeader = _props.disableHeader,
          gridClassName = _props.gridClassName,
          gridStyle = _props.gridStyle,
          headerHeight = _props.headerHeight,
          height = _props.height,
          id = _props.id,
          noRowsRenderer = _props.noRowsRenderer,
          rowClassName = _props.rowClassName,
          rowStyle = _props.rowStyle,
          scrollToIndex = _props.scrollToIndex,
          style = _props.style,
          width = _props.width,
          rowCount = _props.rowCount;
      var scrollbarWidth = this.state.scrollbarWidth;


      var availableRowsHeight = disableHeader ? height : height - headerHeight;

      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: -1 }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: -1 }) : rowStyle;

      // Precompute and cache column styles before rendering rows and columns to speed things up
      this._cachedColumnStyles = [];
      var columns = this._getHeaderColumns();
      var fixedColumnCount = columns.filter(function (column) {
        return column.props.fixed === true;
      }).length;
      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
      return React.createElement(
        'div',
        {
          className: (0, _classnames2.default)('ReactVirtualized__Table', className),
          id: id,
          role: 'grid',
          style: style
        },
        React.createElement(_reactVirtualized.MultiGrid, _extends({}, this.props, {
          width: width,
          className: (0, _classnames2.default)('ReactVirtualized__Table__Grid', gridClassName),
          cellRenderer: function cellRenderer(props) {
            return _this2._createGrid(_extends({
              columns: columns
            }, props, {
              rowClass: rowClass,
              rowStyleObject: rowStyleObject
            }));
          },
          columnWidth: function columnWidth(_ref10) {
            var index = _ref10.index;
            return columns[index].props.width;
          },
          columnCount: columns.length,
          enableFixedColumnScroll: true,
          enableFixedRowScroll: true,
          fixedRowCount: 1,
          fixedColumnCount: fixedColumnCount,
          height: availableRowsHeight,
          id: undefined,
          noContentRenderer: noRowsRenderer,
          onScroll: this._onScroll,
          rowCount: rowCount,
          onSectionRendered: this._onSectionRendered,
          ref: this._setRef,
          role: 'rowgroup',
          scrollbarWidth: scrollbarWidth,
          scrollToRow: scrollToIndex,
          style: _extends({}, gridStyle, {
            overflowX: 'hidden'
          })
        }))
      );
    }
  }, {
    key: '_createHeader',
    value: function _createHeader(_ref11) {
      var column = _ref11.column,
          index = _ref11.index,
          style = _ref11.style;
      var _props2 = this.props,
          headerClassName = _props2.headerClassName,
          headerStyle = _props2.headerStyle,
          onHeaderClick = _props2.onHeaderClick,
          sort = _props2.sort,
          sortBy = _props2.sortBy,
          sortDirection = _props2.sortDirection,
          hasHorizontalBorder = _props2.hasHorizontalBorder,
          hasVerticalBorder = _props2.hasVerticalBorder;
      var _column$props = column.props,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          defaultSortDirection = _column$props.defaultSortDirection,
          disableSort = _column$props.disableSort,
          checkboxRenderer = _column$props.checkboxRenderer,
          headerRenderer = _column$props.headerRenderer,
          id = _column$props.id,
          label = _column$props.label;

      var sortEnabled = !disableSort && sort && dataKey !== 'checkbox';

      var classNames = (0, _classnames2.default)('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });

      var renderedHeader = dataKey === 'checkbox' ? this._checkboxWrapper({
        label: label,
        checkbox: checkboxRenderer({
          handleCheckboxChange: this.handleCheckboxChange,
          rowIndex: index,
          selectedIndex: this.state.selectedIndex
        })
      }) : headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });

      var headerOnClick = void 0;
      var headerOnKeyDown = void 0;
      var headerTabIndex = void 0;
      var headerAriaSort = void 0;
      var headerAriaLabel = void 0;

      if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        var isFirstTimeSort = sortBy !== dataKey;

        // If this is the firstTime sort of this column, use the column default sort order.
        // Otherwise, invert the direction of the sort.
        // eslint-disable-next-line
        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === _SortDirection2.default.DESC ? _SortDirection2.default.ASC : _SortDirection2.default.DESC;

        var onClick = function onClick(event) {
          if (sortEnabled && sort) {
            sort({
              defaultSortDirection: defaultSortDirection,
              event: event,
              sortBy: dataKey,
              sortDirection: newSortDirection
            });
          }
          if (onHeaderClick) {
            onHeaderClick({ columnData: columnData, dataKey: dataKey, event: event });
          }
        };

        var onKeyDown = function onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick(event);
          }
        };

        headerAriaLabel = column.props['aria-label'] || label || dataKey;
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }

      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === _SortDirection2.default.ASC ? 'ascending' : 'descending';
      }

      // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942
      return React.createElement(
        _styled.HeaderCell,
        {
          hasHorizontalBorder: hasHorizontalBorder,
          hasVerticalBorder: hasVerticalBorder,
          'aria-label': headerAriaLabel,
          'aria-sort': headerAriaSort,
          className: classNames,
          id: id,
          key: 'Header-Col' + index,
          onClick: headerOnClick,
          onKeyDown: headerOnKeyDown,
          role: 'columnheader',
          style: _extends({}, headerStyle, style),
          tabIndex: headerTabIndex
        },
        renderedHeader
      );
    }
  }, {
    key: '_getRowHeight',
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;


      return typeof rowHeight === 'function' ? rowHeight({ index: rowIndex }) : rowHeight;
    }
  }, {
    key: '_setScrollbarWidth',
    value: function _setScrollbarWidth() {
      if (this.Grid) {
        // eslint-disable-next-line
        var Grid = (0, _reactDom.findDOMNode)(this.Grid);
        if (Grid) {
          // $FlowFixMe
          var clientWidth = Grid.clientWidth || 0;
          // $FlowFixMe
          var offsetWidth = Grid.offsetWidth || 0;
          var _scrollbarWidth = offsetWidth - clientWidth;
          this.setState({ scrollbarWidth: _scrollbarWidth });
        }
      }
    }
  }]);

  return Table;
}(React.PureComponent);

Table.defaultProps = {
  cellRenderer: _defaultCellRenderer2.default,
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 40,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: _accessibilityOverscanIndicesGetter2.default,
  overscanRowCount: 10,
  rowRenderer: _defaultRowRenderer2.default,
  headerRowRenderer: _defaultHeaderRowRenderer2.default,
  hasVerticalBorder: false,
  hasHorizontalBorder: false,
  striped: false,
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {},
  rowHeight: 40
};
exports.default = Table;