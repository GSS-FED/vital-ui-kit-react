// @flow
/* eslint-disable jsx-a11y/mouse-events-have-key-events  */
import * as React from 'react';
import styled, { css } from 'styled-components';

const Cell = styled.div`
  color: #456296;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;

  ${({ hasHorizontalBorder }) =>
    hasHorizontalBorder &&
    css`
      border-bottom: 1px solid #d8e3f6;
    `};

  ${({ hasVerticalBorder }) =>
    hasVerticalBorder &&
    css`
      border-right: 1px solid #d8e3f6;
    `};

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

const Span = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

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
  hoveredColumnIndex: number,
  hoveredRowIndex: number,
  rowStyleObject: CSSStyleDeclaration,
  rowClass: string,
  hasHorizontalBorder: boolean,
  hasVerticalBorder: boolean,
  striped: boolean,
};

const defaultCellRenderer = (data: Object[]) => ({
  columnIndex,
  key,
  rowIndex,
  style,
  columns,
  onHover,
  hoveredColumnIndex,
  hoveredRowIndex,
  rowStyleObject,
  rowClass,
  hasHorizontalBorder,
  hasVerticalBorder,
  striped,
}: Props) => {
  const isEven = rowIndex % 2 === 0 && striped;
  return (
    <Cell
      hasHorizontalBorder={hasHorizontalBorder}
      hasVerticalBorder={hasVerticalBorder}
      className={rowClass}
      onMouseOver={() => onHover({ rowIndex, columnIndex })}
      isEven={isEven}
      hoveredColumn={hoveredColumnIndex === columnIndex}
      hoveredRow={hoveredRowIndex === rowIndex}
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
};
export default defaultCellRenderer;
