// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
  type TableProps,
  Table as BaseTable,
  AutoSizer,
  // $FlowFixMe
} from 'react-virtualized';
import './style.css';
import defaultRowRenderer from './defaultRowRenderer';
import defaultHeaderRowRenderer from './defaultHeaderRowRenderer';

BaseTable.propTypes.children = () => {};

const StyledTable: React.ComponentType<TableProps> = styled(
  BaseTable,
)`
  color: ;
  font-size: 15px;
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
  };

  static HeaderRowRenderer = defaultHeaderRowRenderer;

  render() {
    const {
      hasHorizontalBorder,
      hasVerticalBorder,
      headerStyle,
      rowStyle,
      style,
      rowHeight,
      striped,
      ...props
    } = this.props;

    return (
      <AutoSizer>
        {({ width }) => (
        <StyledTable
          rowHeight={rowHeight}
          style={{
            ...style,
          }}
          headerStyle={{
            ...headerStyle,
            // borderBottom: hasHorizontalBorder
            //   ? '1px solid #D8E3F6'
            //   : 'none',
          }}
          rowStyle={{
            ...rowStyle,
            borderBottom: hasHorizontalBorder
              ? '1px solid #D8E3F6'
              : 'none',
          }}
          {...props}
        >
          {this.props.children}
        </StyledTable>

        )}
      </AutoSizer>
    );
  }
}

export default Table;
