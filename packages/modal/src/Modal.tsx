/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import ModalWrapper from './ModalWrapper';

const isBrowser = typeof window !== 'undefined';

type ModalProps = {
  show?: boolean;
  children: React.ReactNode;
  mountElement?: HTMLElement;
};

const OverLay = styled.div`
  background-color: ${props => props.theme.grey800};
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.5;
`;

OverLay.defaultProps = {
  theme: defaultTheme,
};

export function Modal({
  show = false,
  ...props
}: ModalProps): ReactPortal {
  const getNode = () => props.mountElement || document.body;

  if (!show || !isBrowser) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="vital__modal">
      <OverLay />
      <ModalWrapper>
        {React.Children.only(props.children)}
      </ModalWrapper>
    </div>,
    getNode(),
  );
}
