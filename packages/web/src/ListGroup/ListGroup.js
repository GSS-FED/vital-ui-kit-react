/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node, Component } from 'react';

import { ListGroupWrapper } from './styled';

type Props = {
  /** Children of ListItem */
  children: Array<Node>,
  /** Light or dark theme */
  themed?: 'light' | 'dark',
  /** Border around ListGroup and ListItem */
  border?: boolean,
  /** Customize Icon */
  icon?: string | Node,
  /** Collapse mode, show one item one time */
  collapse?: boolean
};

type State = {
  open: boolean
};

class ListGroup extends Component<Props, State> {
  nodes: Map<number, HTMLElement> = new Map();

  setNodes = (i: number, el: HTMLElement) => {
    this.nodes.set(i, el);
  };

  renderChildren = () =>
    React.Children.map(this.props.children, (child, i) =>
      React.cloneElement(child, {
        ref: node => {
          this.setNodes(i, node);
        },
        themed: this.props.themed,
        collapse: this.props.collapse,
        border: this.props.border,
        dispatchClose: this.dispatchClose,
      })
    );

  dispatchClose = (level: number) => {
    this.nodes.forEach(node => {
      if (node.props.level === level && node.state.open) {
        node.startAnimation();
      }
    })
  };

  render() {
    const { themed, border, collapse, children, ...props } = this.props;
    return (
      <ListGroupWrapper
        {...props}
        themed={themed}
        border={border}
        collapse={collapse}
      >
        {this.renderChildren()}
      </ListGroupWrapper>
    );
  }
}

export default ListGroup;
