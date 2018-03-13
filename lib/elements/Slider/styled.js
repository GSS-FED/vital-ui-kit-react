import styled from 'styled-components';
import ButtonBase from '../Button';
import constants from './constants';

const Root = styled.div`
  display: flex;
  position: relative;
  min-width: 200px;
  align-items: center;

  ${props =>
    props.disabled &&
    `
    opacity: .6;
  `};
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: ${props => constants[props.size].handlerSize};
`;

const Track = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  cursor: pointer;
  top: 50%;
  left: 0;
  height: ${props => constants[props.size].trackHeight};
  margin-top: -4px;
  background-repeat: repeat-x;
  border-radius: 4px;
  border-color: #c4d2eb;
  width: 100%;
  background-color: #d8e3f6;
  cursor: pointer;
`;

const Selection = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  background-color: #0e86fe;
  left: 0;
  height: ${props => constants[props.size].trackHeight};
  margin-top: -4px;
  top: 50%;
  width: ${props => `${props.width}px`};
  pointer-events: none;
`;

const Handler = styled.div`
  left: ${props => `${props.left}px`}
  position: absolute;
  border-radius: 100%;
  border-color: #c4d2eb;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(196, 210, 235, 0.3);
  text-indent: -3333px;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  outline: 0;
  border-style: solid;
  border-width: 1px;
  width: ${props =>
     constants[props.size].handlerSize};
  height: ${props => constants[props.size].handlerSize};
  cursor: pointer;

  &:hover {
    border-color: #C4D2EB;
    background-color: #FFFFFF;
    box-shadow: 0 0 0 2px rgba(196, 210, 235, 0.3);
  }
`;

const Button = styled(ButtonBase)`
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
`;

export {
  Root,
  Wrapper,
  Track,
  Selection,
  Handler,
  Button,
}
