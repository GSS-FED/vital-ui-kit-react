/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ModalWrapper from './ModalWrapper';

type Props = {
  show: boolean,
  children: Node
};

type State = {
  modalTop: number,
  modalLeft: number,
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
  backdrop-filter: blur(5px);
`;

class Modal extends React.Component<Props, State> {
  state = {
    windowWidth: 0,
    windowHeight: 0,
  };
  static defaultProps = {
    show: false
  };

  modal: HTMLElement;
  container: HTMLElement;

  componentDidMount() {
    this.handleUpdate();
    window.addEventListener('resize', this.handleUpdate)
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.parentNode.removeChild(this.container)
    }
    window.removeEventListener('resize', this.handleUpdate);
  }

  handleUpdate = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  };

  render() {
    if (!this.props.show) {
      return null;
    }
      return ReactDOM.createPortal(
        <div className="VitalModal">
          <OverLay />
          <ModalWrapper
            windowWidth={this.state.windowWidth}
            windowHeight={this.state.windowHeight}
          >
            {React.Children.only(this.props.children)}
          </ModalWrapper>
        </div>,
        document.body
      );
  }
}

export default Modal;
