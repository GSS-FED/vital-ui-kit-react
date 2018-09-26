/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';
import ReactResizeDetector from 'react-resize-detector';

const Root = styled.div`
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
`;

type Props = {
  children: React.ReactNode;
};

class ModalWrapper extends React.Component<Props> {
  modal = React.createRef<any>();

  getWidth = (width?: number, height?: number) => {
    if (this.modal.current && width && height) {
      this.modal.current.style.marginTop = `${height / -2}px`;
      this.modal.current.style.marginLeft = `${width / -2}px`;
    }
  };

  render() {
    return (
      <Root ref={this.modal}>
        {React.Children.only(this.props.children)}
        <ReactResizeDetector
          handleHeight
          handleWidth
          onResize={this.getWidth}
        />
      </Root>
    );
  }
}

export default ModalWrapper;
