import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;
  height: 50px;
  display: table-cell;
  vertical-align: middle;

  &:not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: #d8e3f6;
    }
  }
`;

const Button = styled.button`
  padding: 0 10px;
  margin: 0;
  border: 0;
  border-radius: 0;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  transition: all 120ms ease-in;
  line-height: 50px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${props => (props.primary ? '#0E86FE' : '#456297')};

  &:hover {
    background-color: #d8e3f6;
  }
`;

type Props = {
  label: string,
  primary?: boolean,
};

const FooterButton = ({ label, primary }: Props) => (
  <ButtonWrapper>
    <Button primary={primary}>{label}</Button>
  </ButtonWrapper>
);

export default FooterButton;
