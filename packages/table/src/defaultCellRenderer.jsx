// @flow
/* eslint-disable jsx-a11y/mouse-events-have-key-events  */
import * as React from 'react';
import styled, { css } from 'styled-components';

const Cell = styled.div`
  color: #456296;
  border-bottom: 1px solid #d8e3f6;
  padding-left: 20px;
  display: flex;
  align-items: center;

  ${({ isEven }) =>
    isEven &&
    css`
      background-color: #f7f9fd;
    `};

  ${({ hoveredRow }) =>
    hoveredRow &&
    css`
      background-color: #eef2fc;
    `};
`;

const defaultCellRenderer = data => ({
  columnIndex,
  key,
  rowIndex,
  style,
  columns,
  onHover,
  hoveredColumnIndex,
  hoveredRowIndex,
}) => (
  <Cell
    onMouseOver={() => onHover({ rowIndex, columnIndex })}
    isEven={rowIndex % 2 === 0}
    hoveredColumn={hoveredColumnIndex === columnIndex}
    hoveredRow={hoveredRowIndex === rowIndex}
    key={key}
    style={style}
  >
    {data[rowIndex][columns[columnIndex].props.dataKey]}
  </Cell>
);
export default defaultCellRenderer;
