// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Badge from '../Badge';
import ListGroupBase from './ListGroupBase';

import { ListContent, List, ListWrapper } from './styled';
import '../../styles/global.css';

import type { ListItemType } from './type';

const BadgeWrapper = styled(ListContent)`
  text-align: right;
  padding-right: ${props => (props.href ? '20px' : '0')};
`;

const InnerList = styled(List)`
  padding-left: 2.5rem;
  border: none;
`;

type State = {
  items: Array<ListItemType>
};

type Props = {
  icon?: string | Node,
  border?: boolean,
  themed?: 'light' | 'dark',
  items: Array<ListItemType>
};

class ListGroup extends PureComponent<Props, State> {
  static defaultProps = {
    border: true,
    themed: 'light'
  };

  state = {
    items: this.props.items
  };
  nodes: Map<number, HTMLElement> = new Map();

  onListOpen = (index: number) => {
    const node = this.nodes.get(index);

    this.setState({
      items: this.state.items.map(
        (item, i) =>
          i === index && item.children
            ? {
                ...item,
                open: !item.open,
                childrenHeight: node ? node.scrollHeight : 0
              }
            : item
      )
    });
  };

  renderChildren = (item: ListItemType) =>
    item.children &&
    Array.isArray(item.children) &&
    item.children.map((child, i) => (
      <ListWrapper key={child.id || i}>
        <InnerList>{child.content}</InnerList>
      </ListWrapper>
    ));

  renderBadge = (item: ListItemType) => (
    <BadgeWrapper href={item.href}>
      {item.badge && <Badge label={item.badge} />}
    </BadgeWrapper>
  );

  setNodes = (i: number, c: HTMLElement) => {
    this.nodes.set(i, c);
  };

  render() {
    return (
      <ListGroupBase
        nodes={this.nodes}
        setNodes={this.setNodes}
        onListOpen={this.onListOpen}
        renderChilden={this.renderChildren}
        renderBadge={this.renderBadge}
        data={this.state.items}
        {...this.props}
      />
    );
  }
}

export default ListGroup;
