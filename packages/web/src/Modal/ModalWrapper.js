/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: absolute;
  z-index: 10000;
`;

type Props = {
  children: React.Node,
  windowWidth: number,
  windowHeight: number,
}

class ModalWrapper extends React.Component<Props> {
  state = {
    modalTop: 0,
    modalLeft: 0,
  }

  componentDidMount() {
    this.getWidth();
  }

  getWidth = () => {
    this.setState({
      modalTop: (this.props.windowHeight - this.modal.firstChild.offsetHeight) / 2,
      modalLeft: (this.props.windowWidth - this.modal.firstChild.offsetWidth) / 2,
    });
  }

  model: HTMLElement;

  render() {
    return (
      <Root
        innerRef={s => {
          this.modal = s;
        }}
        style={{
          top: this.state.modalTop,
          left: this.state.modalLeft
        }}
      >
        {React.Children.only(this.props.children)}
      </Root>
    );
  }
}

export default ModalWrapper;
