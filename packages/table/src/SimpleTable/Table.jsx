// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
  type TableProps,
  Table as BaseTable,
  // $FlowFixMe
} from 'react-virtualized';
import '../style.css';
import defaultRowRenderer from './defaultRowRenderer';
import defaultHeaderRowRenderer from './defaultHeaderRowRenderer';

BaseTable.propTypes.children = () => {};

const StyledTable: React.ComponentType<TableProps> = styled(
  BaseTable,
)`
`;

type Props = TableProps & {
  hasHorizontalBorder?: boolean,
  striped?: boolean,
};

class Table extends React.Component<Props> {
  static defaultProps = {
    ...BaseTable.defaultProps,
    rowRenderer: defaultRowRenderer,
    headerRowRenderer: defaultHeaderRowRenderer,
    hasHorizontalBorder: false,
    rowHeight: 40,
    striped: true,
    headerHeight: 40,
  };

  static HeaderRowRenderer = defaultHeaderRowRenderer;
  
  static RowRenderer = defaultRowRenderer;

  render() {
    const {
      hasHorizontalBorder,
      hasVerticalBorder,
      striped,
      ...props
    } = this.props;

    return (
      <StyledTable
        {...props}
      >
        {this.props.children}
      </StyledTable>
    );
  }
}

export default Table;
