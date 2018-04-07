import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  text-align: ${props => props.textAlign || 'left'};

  thead {
    border-bottom: ${props => props.hasHorizontalBorder && `1px solid #D8E3F6`};

    ${props =>
      props.isResponsive &&
      `
      th {
        @media (max-width: 800px) {
          display: block;
          text-align: right;
        }
      }

      @media (max-width: 800px) {
        float: left;
        border: 0;
        border-right: 1px solid #D8E3F6;
        border-bottom: 1px solid #D8E3F6;
      }
    `};
  }

  th {
    color: #456297;
    padding: 0.6667rem 1.3333rem;
    border-right: ${props => props.hasVerticalBorder && `1px solid #D8E3F6`};

    &:last-child {
      border: 0;
    }
  }

  tbody {
    ${props =>
      props.isResponsive &&
      `
      @media (max-width: 800px) {
        display: block;
        width: auto;
        position: relative;
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
        }
    `};
    tr {
      transition: background-color 0.3s ease;

      ${props => props.isResponsive && `
      @media (max-width: 800px) {
        display: inline-block;
        font-size: 1rem;
        vertical-align: top;
        }
      `};

      ${props =>
        props.hasHightlight &&
        `
        &:hover {
          background-color: #D8E3F6;
        }
      `};

      ${props =>
        props.isStriped &&
        `
        &:nth-child(odd) {
          background-color: #F7F9FE;

          &:hover {
            background-color: #D8E3F6;
          }
        }
    `};
    }

    td {
      ${props => props.isResponsive && `
      @media (max-width: 800px) {
          display: block;
          text-align: right;
        }
      `};
    }
  }

  tr {
    border-bottom: ${props => props.hasHorizontalBorder && `1px solid #D8E3F6`};

    &:last-child {
      border: 0;
    }
  }

  td {
    padding: 0.6667rem 1.3333rem;
    color: #456297;
    border-right: ${props => props.hasVerticalBorder && `1px solid #D8E3F6`};
    &:last-child {
      border: 0;
    }
  }
`;