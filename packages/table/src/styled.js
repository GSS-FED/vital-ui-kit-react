import styled, { css } from 'styled-components';

// ----- Header ----- //
export const HeaderLabel = styled.span`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const HeaderCell = styled.div`
  color: #456297;
  font-weight: 500;
  align-items: center;
  display: flex;

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
`;

// ----- Body ----- //
export const Cell = styled.div`
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

export const Span = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CheckboxCell = styled(Cell)`
  padding-right: 0;
`;
