import styled, { css } from 'styled-components';
import ButtonBase from '@vital-ui/react-button';
import { defaultTheme } from '@vital-ui/react-theme';
import constants from './constants';
import { Size } from './types';

const Root = styled.div`
  display: flex;
  position: relative;
  min-width: 200px;
  align-items: center;

  ${({ disabled }: { disabled: boolean }) =>
    disabled &&
    css`
      opacity: 0.6;
    `};
`;

const Wrapper = styled.div<{ size: Size; disabled: boolean }>`
  display: block;
  position: relative;
  width: 100%;
  height: ${props => constants[props.size].handlerSize};
`;

const Handler = styled.div<{ size: Size }>`
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

Handler.defaultProps = {
  theme: defaultTheme,
};

export { Root, Wrapper, Handler, Button };
