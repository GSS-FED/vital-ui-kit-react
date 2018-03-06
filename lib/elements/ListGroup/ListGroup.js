// @flow

import React, { type Node, PureComponent } from 'react';
import styled, { css } from 'styled-components';

import Badge from '../Badge';
import IconBase from '../Icon/';

import '../../styles/global.css';

const linkStyle = props => {
  if (props.href || props.hasChildren) {
    return css`
      transition: all 0.2s ease;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: #d8e3f6;
        color: #419ffe;
        text-decoration: none;
      }
    `;
  }
  return null;
};

const Root = styled.ul`
  background-color: ${props => (props.themed === 'dark' ? '#456297' : '#fff')};
  list-style: none;
`;

const ListWrapper = styled.li``;

const List = styled.div`
  box-sizing: border-box;
  position: relative;
  display: table;
  width: 100%;
  margin-bottom: -1px;
  padding: 0.75rem 1.3rem;
  color: ${props => (props.themed === 'dark' ? '#fff' : '#456297')};
  font-size: 1.125rem;
  word-break: break-word;
  border-bottom: 1px solid #d8e3f6;
  border-top: 1px solid #d8e3f6;
  ${props => linkStyle(props)};
`;

const ListContent = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const BadgeWrapper = styled(ListContent)`
  text-align: right;
  padding-right: ${props => (props.href ? '20px' : '0')};
`;

const InnerWrapper = styled(Root)`
  will-change: height;
  background-color: #f7f9fd;
  opacity: ${props => (props.open ? 1 : 0)};
  height: ${props => (props.open ? `${props.childrenHeight}px` : 0)};
  transition: all 0.2s ease;
`;

const InnerList = styled(List)`
  padding-left: 2.5rem;
  border: none;
`;

const Icon = styled(IconBase)`
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -5px;
  pointer-events: none;


`;

type ListItemType = {
  content: Node,
  badge?: string | number,
  href?: string,
  id?: string,
  children?: Array<ListItemType>,
  open?: boolean,
  childrenHeight?: number
};

type State = {
  items: Array<ListItemType>
};

type Props = {
  themed?: 'light' | 'dark',
  items: Array<ListItemType>
};

class ListGroup extends PureComponent<Props, State> {
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
            : item
      )
    });
  };

  iconHandler = (item: ListItemType) =>
    item.children ? 'chevron-down' : 'chevron-right';

  renderChildren = (item: ListItemType, index: number) => (
    <InnerWrapper
      open={item.open}
      childrenHeight={item.childrenHeight}
      innerRef={c => this.nodes.set(index, c)}
    >
      {item.children &&
        item.children.map((child, i) => (
          <ListWrapper key={child.id || i}>
            <InnerList>{child.content}</InnerList>
          </ListWrapper>
        ))}
    </InnerWrapper>
  );

  render() {
    const { themed } = this.props;
    return (
      <Root themed={themed}>
        {this.state.items.map((item, i) => (
          <ListWrapper key={item.id || i}>
            <List
              onClick={() => this.onListOpen(i)}
              href={item.href}
              themed={themed}
              hasChildren={item.children}
            >
              <ListContent>{item.content}</ListContent>
              <BadgeWrapper href={item.href}>
                {item.badge && <Badge label={item.badge} />}
              </BadgeWrapper>
              {(item.href || item.children) && (
                <Icon open={item.open} name={this.iconHandler(item)} size="10" />
              )}
            </List>
            {this.renderChildren(item, i)}
          </ListWrapper>
        ))}
      </Root>
    );
  }
}

export default ListGroup;
