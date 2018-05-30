/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { transitionBase } from '../utils';

const Root = styled.div`
  position: fixed;
  z-index: 10000;
  ${transitionBase}
`;

type Props = {
  children: React.Node,
  windowWidth: number,
  windowHeight: number
};

class ModalWrapper extends React.Component<Props> {

  componentDidMount() {
    this.getWidth();
  }

  model: HTMLElement;

  componentDidUpdate(prevProps: Props, prevState, snapshot) {
    if (snapshot !== null && this.modal) {
      this.modal.style.top = snapshot.modalTop;
      this.modal.style.left = snapshot.modalLeft;
    }
  }

  getSnapshotBeforeUpdate(nextProps: Props) {
    return {
      modalTop: `${(nextProps.windowHeight -
        this.modal.firstChild.offsetHeight) /
        2}px`,
      modalLeft: `${(nextProps.windowWidth -
        this.modal.firstChild.offsetWidth) /
        2}px`
    };
  }

  getWidth = () => {
    this.modal.style.top = `${(this.props.windowHeight -
      this.modal.firstChild.offsetHeight) /
      2}px`;
    this.modal.style.left = `${(this.props.windowWidth -
      this.modal.firstChild.offsetWidth) /
      2}px`;
  };

  render() {
    return (
      <Root
        innerRef={s => {
          this.modal = s;
        }}
      >
        {React.Children.only(this.props.children)}
      </Root>
    );
  }
}

export default ModalWrapper;
