import styled, { css } from 'styled-components';

// -------------------------------------
//   Header's components
// -------------------------------------

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #0e86fe;
  background-color: #f7f9fd;
  h3 {
    flex: 0 1 220px;
    padding: 0 12px;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
  }
`;

export const HeaderBtn = styled.div`
  padding: 0 12px;
  cursor: pointer;
  line-height: 1;
  user-select: none;
`;

export const ArrowIconSvg = styled.svg`
  width: 15px;
  fill: #0e86fe;
`;

// -------------------------------------
//   Month table's components
// -------------------------------------

export const MonthTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  thead {
    background-color: #f7f9fd;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
    z-index: 2;
  }
  tbody {
    background-image: linear-gradient(to top, #00a8ff, #0078ff);
    color: #fff;
  }
  th {
    padding: 8px 4px;
    font-size: 12px;
    font-weight: normal;
    text-align: center;
  }
  td {
    padding: 4px;
    text-align: center;
    vertical-align: middle;
  }
`;

type DayCellProps = {
  isSelected: boolean;
  isToday?: boolean;
  disabled: boolean;
};

export const DayCell = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  user-select: none;
  &[disabled] {
    cursor: default;
    pointer-events: none;
    opacity: 0.2;
  }
  &:hover {
    border-color: #fff;
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  ${({ isSelected }: DayCellProps) =>
    isSelected &&
    css`
      background-color: #00d3e2;
      &:active {
        background-color: #00c4d2;
      }
    `};
`;

export const TodayText = styled.span`
  font-size: 12px;
  transform: scale(0.62);
`;
