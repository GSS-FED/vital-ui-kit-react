/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ResizeObserver from 'resize-observer-polyfill';

type Props = {
  show: boolean,
  children: Node
};

type State = {
  innerWidth: number,
  innerHeight: number,
  windowWidth: number,
  windowHeight: number
};

const OverLay = styled.div`
  background-color: #2d3139;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.5;
`;

const ModalWrapper = styled.div`
  position: absolute;
`;

class Modal extends React.Component<Props, State> {
  state = {
    innerWidth: 0,
    innerHeight: 0,
    windowWidth: 0,
    windowHeight: 0
  };
  static defaultProps = {
    show: false
  };

  overlay: HTMLElement;
  modal: HTMLElement;

  componentDidMount() {
    this.handleUpdate();
    if (this.modal.firstChild) {
      this.getWidth();
    }
    this.handleUpdate();
    const resizeObserver = new ResizeObserver(this.handleUpdate);
    resizeObserver.observe(this.overlay);
  }

  handleUpdate = () => {
    this.setState({
      windowWidth: this.overlay.offsetWidth,
      windowHeight: this.overlay.offsetHeight
    });
  };

  getWidth = () => {
    this.setState({
      innerWidth: this.modal.firstChild.offsetWidth,
      innerHeight: this.modal.firstChild.offsetHeight
    });
  };

  getContainer = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    return container;
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return ReactDOM.createPortal(
      <OverLay
        innerRef={s => {
          this.overlay = s;
        }}
      >
        <ModalWrapper
          innerRef={s => {
            this.modal = s;
          }}
          style={{
            left: (this.state.windowWidth - this.state.innerWidth) / 2,
            top: (this.state.windowHeight - this.state.innerHeight) / 2
          }}
        >
          {React.Children.only(this.props.children)}
        </ModalWrapper>
      </OverLay>,
      this.getContainer()
    );
  }
}

export default Modal;
