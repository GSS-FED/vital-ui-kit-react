/** @flow */
import * as React from 'react';
import styled, { css } from 'styled-components';
import type { RowRendererParams } from './types';

const Row = styled.div`
  color: #456296;
  border-bottom: 1px solid #D8e3f6;

  :hover {
    background-color: #eef2fc;
  }

  div[role='gridcell'] {
    padding-left: 20px;
  }

  ${({ isOdd }) =>
    isOdd &&
    css`
      background-color: #f7f9fd;
    `};
`;

/**
 * Default row renderer for Table.
 */
export default function defaultRowRenderer({
  className,
  columns,
  index,
  key,
  onRowClick,
  onRowDoubleClick,
  onRowMouseOut,
  onRowMouseOver,
  onRowRightClick,
  rowData,
  style,
}: RowRendererParams) {
  const a11yProps = {};
  const rowStyle = () => {
    if (index < 0) {
      return { isHeader: true };
    }
    return index % 2 === 0 ? { isEven: true } : { isOdd: true };
  };

  if (
    onRowClick ||
    onRowDoubleClick ||
    onRowMouseOut ||
    onRowMouseOver ||
    onRowRightClick
  ) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = event =>
        onRowClick({ event, index, rowData });
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = event =>
        onRowDoubleClick({ event, index, rowData });
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = event =>
        onRowMouseOut({ event, index, rowData });
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = event =>
        onRowMouseOver({ event, index, rowData });
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = event =>
        onRowRightClick({ event, index, rowData });
    }
  }

  return (
    <Row
      {...rowStyle()}
      {...a11yProps}
      className={className}
      key={key}
      role="row"
      style={style}
    >
      {columns}
    </Row>
  );
}
