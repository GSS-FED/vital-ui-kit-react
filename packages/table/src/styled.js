import styled, { css } from 'styled-components';

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
