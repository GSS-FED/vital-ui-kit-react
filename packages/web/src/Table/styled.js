import styled, { css } from 'styled-components';

// eslint-disable-next-line
export const StyledTable = styled.table`
  width: 100%;
  text-align: ${props => props.textAlign || 'left'};

  thead {
    border-bottom: ${props =>
      props.hasHorizontalBorder && props.theme.border};

    ${props =>
      props.isResponsive &&
      css`
        th {
          @media (max-width: 800px) {
            display: block;
            text-align: right;
          }
        }

        @media (max-width: 800px) {
          float: left;
          border: 0;
          border-right: ${props.theme.border};
          border-bottom: ${props.theme.border};
        }
      `};
  }

  th {
    color: ${props => props.theme.table.color};
    padding: 0.6667rem 1.3333rem;
    border-right: ${props =>
      props.hasVerticalBorder && props.theme.border};

    &:last-child {
      border: 0;
    }
  }

  tbody {
    ${props =>
      props.isResponsive &&
      css`
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

      ${props =>
        props.isResponsive &&
        css`
          @media (max-width: 800px) {
            display: inline-block;
            font-size: 1rem;
            vertical-align: top;
          }
        `};

      ${props =>
        props.hasHightlight &&
        css`
          &:hover {
            background-color: ${props.theme.hoverBg};
          }
        `};

      ${props =>
        props.isStriped &&
        css`
          &:nth-child(odd) {
            background-color: ${props.theme.striped.odd};

            &:hover {
              background-color: ${props.theme.hoverBg};
            }
          }
        `};
    }

    td {
      ${props =>
        props.isResponsive &&
        css`
          @media (max-width: 800px) {
            display: block;
            text-align: right;
          }
        `};
    }
  }

  tr {
    border-bottom: ${props =>
      props.hasHorizontalBorder && props.theme.border};

    &:last-child {
      border: 0;
    }
  }

  td {
    padding: 0.6667rem 1.3333rem;
    color: #456297;
    border-right: ${props =>
      props.hasVerticalBorder && props.theme.border};
    &:last-child {
      border: 0;
    }
  }
`;
