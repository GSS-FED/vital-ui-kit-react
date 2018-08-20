/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  z-index: 10000;
`;

type Props = {
  children: React.ReactNode;
  windowWidth: number;
  windowHeight: number;
};

class ModalWrapper extends React.Component<Props> {
  modal = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.getWidth();
  }

  componentDidUpdate(prevProps: Props, _: {}, snapshot: any) {
    if (snapshot !== null && this.modal.current) {
      this.modal.current.style.top = snapshot.modalTop;
      this.modal.current.style.left = snapshot.modalLeft;
    }
  }

  getSnapshotBeforeUpdate(nextProps: Props) {
    return {
      modalTop: `${(nextProps.windowHeight -
        this.modal.current!.firstChild!.offsetHeight) /
        2}px`,
      modalLeft: `${(nextProps.windowWidth -
        this.modal.current!.firstChild!.offsetWidth) /
        2}px`,
    };
  }

  getWidth = () => {
    if (this.modal.current) {
      this.modal.current.style.top = `${(this.props.windowHeight -
        this.modal.current!.firstChild!.offsetHeight) /
        2}px`;
      this.modal.current.style.left = `${(this.props.windowWidth -
        this.modal.current!.firstChild!.offsetWidth) /
        2}px`;
    }
  };

  render() {
    return (
      <Root innerRef={this.modal}>
        {React.Children.only(this.props.children)}
      </Root>
    );
  }
}

export default ModalWrapper;
