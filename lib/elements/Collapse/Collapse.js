// @flow

import React, { Component, type Node } from 'react';

import CollapseContent from './CollapseContent';
import ListGroupBase from '../ListGroup/ListGroupBase';

import type { ListItemType } from '../ListGroup/type';

type Props = {
  themed?: 'light' | 'dark',
  items: Array<ListItemType>,
  border?: boolean,
  renderListWrapper: (props: any) => Node,
};

type State = {
  items: Array<ListItemType>
};

class Collapse extends Component<Props, State> {
  static ListItemWrapper: (props: any) => Node;
  static defaultProps = {
    themed: 'light',
    border: false,
  }
  state = {
    items: this.props.items
  };
  nodes: Map<number, HTMLElement> = new Map();

  onListOpen = (index: number) => {
    const node = this.nodes.get(index);

    this.setState({
      items: this.state.items.map(
        (item, i) =>
          i === index
            ? {
                ...item,
                open: !item.open,
                childrenHeight: node ? node.scrollHeight : 0
              }
            : { ...item, open: false, childrenHeight: 0 }
      )
    });
  };

  setNodes = (i: number, c: HTMLElement) => {
    this.nodes.set(i, c);
  };

  render() {
    return (
      <ListGroupBase
        collapse={Boolean(true)}
        nodes={this.nodes}
        setNodes={this.setNodes}
        onListOpen={this.onListOpen}
        renderChilden={item => (
          <CollapseContent themed={this.props.themed} border={this.props.border}>
            {item.children}
          </CollapseContent>
        )}
        renderListWrapper={this.props.renderListWrapper}
        border={this.props.border}
        data={this.state.items}
        {...this.props}
      />
    );
  }
}

Collapse.ListItemWrapper = ListGroupBase.ListItemWrapper;

export default Collapse;
