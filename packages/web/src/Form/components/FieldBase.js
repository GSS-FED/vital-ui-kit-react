// @flow
import is from 'styled-is';
import { css } from 'styled-components';

const FieldBase = () => css`
  position: relative;
  display: block;
  width: 100%;
  padding: 0.46633rem 0.8rem;
  font-size: 1rem;
  line-height: 1;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #c4d2eb;
  border-radius: 4px;
  color: #456297;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  outline: 0;
  z-index: 5;

  &::placeholder {
    color: #95acd4;
  }

  &:focus {
    outline: 0;
    border: 1px solid #0e86fe;
    box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
    z-index: 7;
  }

  &:disabled {
    pointer-events: none;
    border-color: #c4d2eb;
    background-color: #eef2fc;

    ${is('alarm')`
      pointer-events: none;
      background-color: #FFD0B8;
      border-color: #EB5000;

      &::placeholder {
        color: #EB5000;
      }
  `};
  }

  ${is('alarm')`
    border-color: #EB5000;
  `} ${is('warning')`
    border-color: #FFB400;
  `};
`;

export default FieldBase;
