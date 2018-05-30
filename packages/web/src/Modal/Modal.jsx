/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ModalWrapper from './ModalWrapper';

type Props = {
  show?: boolean,
  children: Node
};

type State = {
  windowWidth: number,
  windowHeight: number
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
  backdrop-filter: blur(5px);
`;

class Modal extends React.Component<Props, State> {
  static defaultProps = {
    show: false
  };

  state = {
    windowWidth: 0,
    windowHeight: 0
  };

  componentDidMount() {
    this.handleUpdate();
    window.addEventListener('resize', this.handleUpdate);
  }

  componentWillUnmount() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    window.removeEventListener('resize', this.handleUpdate);
  }

  handleUpdate = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  modal: HTMLElement;

  container: HTMLElement;

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
      // $FlowFixMe
      document.body
    );
  }
}

export default Modal;
