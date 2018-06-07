// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
  type TableProps,
  Table as BaseTable,
  Column as BaseColumn,
  // $FlowFixMe
} from 'react-virtualized';
import './style.css';
import Column from './Column';
import defaultRowRenderer from './defaultRowRenderer';
import defaultHeaderRowRenderer from './defaultHeaderRowRenderer';

/* eslint-disable */
BaseTable.propTypes.children = props => {
  // const type = Column || BaseColumn;
  // const children = React.Children.toArray(props.children);
  // for (let i = 0; i < children.length; i++) {
  //   const childType = children[i].type;
  //   console.log(Column)
  //   console.log(BaseColumn)
  //   console.log(childType !== BaseColumn)
  //   if (
  //     childType !== Column || childType !== BaseColumn 
  //     // &&
  //     // !(
  //     //   childType.prototype instanceof Column ||
  //     //   childType.prototype instanceof BaseColumn
  //     // )
  //   ) {
  //     return new Error('Table only accepts children of type Column');
  //   }
  // }
};
/* eslint-enable */

const StyledTable: React.ComponentType<TableProps> = styled(
  BaseTable,
)`
  color: #456297;
  font-size: 15px;
`;

type Props = TableProps & {
  hasHorizontalBorder?: boolean,
};

class Table extends React.Component<Props> {
  static defaultProps = {
    ...BaseTable.defaultProps,
    rowRenderer: defaultRowRenderer,
    headerRowRenderer: defaultHeaderRowRenderer,
    hasHorizontalBorder: false,
    rowHeight: 40,
  };

  static HeaderRowRenderer = defaultHeaderRowRenderer;

  render() {
    const {
      hasHorizontalBorder,
      headerStyle,
      rowStyle,
      style,
      rowHeight,
      ...props
    } = this.props;

    return (
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
    );
  }
}

export default Table;
