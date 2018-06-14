// @flow
/* eslint-disable jsx-a11y/mouse-events-have-key-events  */
import * as React from 'react';

import { Cell, Span } from './styled';

type Props = {
  columnIndex: number,
  key: string,
  rowIndex: number,
  style: CSSStyleDeclaration,
  columns: React$Element<any>[],
  onHover: (props: {
    rowIndex: number,
    columnIndex: number,
  }) => mixed,
  rowStyleObject: CSSStyleDeclaration,
  rowClass: string,
  hasHorizontalBorder: boolean,
  hasVerticalBorder: boolean,
  isEven: boolean,
  hoveredColumn: boolean,
  hoveredRow: boolean,
};

const defaultCellRenderer = (data: Object[]) => ({
  columnIndex,
  key,
  rowIndex,
  style,
  columns,
  onHover,
  rowStyleObject,
  rowClass,
  hasHorizontalBorder,
  hasVerticalBorder,
  isEven,
  hoveredColumn,
  hoveredRow,
}: Props) => (
  <Cell
    hasHorizontalBorder={hasHorizontalBorder}
    hasVerticalBorder={hasVerticalBorder}
    className={rowClass}
    onMouseOver={() => onHover({ rowIndex, columnIndex })}
    isEven={isEven}
    hoveredColumn={hoveredColumn}
    hoveredRow={hoveredRow}
    key={key}
    style={{
        ...rowStyleObject,
        ...style,
      }}
  >
    <Span>
      {data[rowIndex][columns[columnIndex].props.dataKey]}
    </Span>
  </Cell>
  );
export default defaultCellRenderer;
