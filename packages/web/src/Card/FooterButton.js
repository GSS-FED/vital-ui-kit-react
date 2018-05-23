/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
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
  background-color: ${({ theme }) => theme.white};
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
  color: ${({ primary, theme }) =>
    primary ? theme.secondaryList[4] : theme.primaryList[6]};

  &:hover {
    background-color: ${({ theme }) => theme.primaryList[2]};
  }
`;

type Props = {
  children: React.Node,
  primary?: boolean,
  onClick: () => {}
};

const FooterButton = ({
  children,
  primary,
  onClick,
  ...props
}: Props) => (
  <ButtonWrapper {...props} onClick={onClick}>
    <Button primary={primary}>
      {children}
    </Button>
  </ButtonWrapper>
);

FooterButton.defaultProps = {
  primary: false
};

export default FooterButton;
