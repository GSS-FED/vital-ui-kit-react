import styled, { css } from 'styled-components';
import { Button as ButtonBase } from '../Button';
import constants from './constants';

const Root = styled.div`
  display: flex;
  position: relative;
  min-width: 200px;
  align-items: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `};
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: ${props => constants[props.size].handlerSize};
`;

const Handler = styled.div`
  top: 0;
  position: absolute;
  border-radius: 100%;
  border-color: ${({ theme }) => theme.form.borderColor};
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 0 1px rgba(196, 210, 235, 0.3);
  text-indent: -3333px;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  outline: 0;
  border-style: solid;
  border-width: 1px;
  width: ${props => constants[props.size].handlerSize};
  height: ${props => constants[props.size].handlerSize};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.form.focusBorderColor};
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 0 2px rgba(196, 210, 235, 0.3);
  }
`;

const Button = styled(ButtonBase)`
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
`;

export { Root, Wrapper, Handler, Button };
