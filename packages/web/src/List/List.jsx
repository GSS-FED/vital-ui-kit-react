/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';

import { ListWrapper } from './styled';
import ListItem from './ListItem';
import ListContent from './ListContent';

type Props = {
  /** Children of ListItem */
  children: Array<React.Node>,
  /** Light or dark theme */
  themed?: 'light' | 'dark',
  /** Border around List and ListItem */
  border?: boolean,
  /** Customize Icon */
  icon?: string | React.Node,
  /** Collapse mode, show one item one time */
  collapse?: boolean,
};

type State = {
  open: boolean,
};

class List extends React.Component<Props, State> {
  static defaultProps = {
    themed: 'light',
    border: false,
    icon: null,
    collapse: false,
  };

  static Item = ListItem;

  static Content = ListContent;

  nodes: Map<number, ListItem> = new Map();

  setNodes = (i: number, el: ListItem) => {
    this.nodes.set(i, el);
  };

  dispatchClose = (level: number) => {
    this.nodes.forEach(node => {
      if (node.props.level === level && node.state.open) {
        node.startAnimation();
      }
    });
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
      }),
    );

  render() {
    const {
      themed,
      border,
      collapse,
      children,
      ...props
    } = this.props;
    return (
      <ListWrapper
        {...props}
        themed={themed}
        border={border}
        collapse={collapse}
      >
        {this.renderChildren()}
      </ListWrapper>
    );
  }
}

export default List;
