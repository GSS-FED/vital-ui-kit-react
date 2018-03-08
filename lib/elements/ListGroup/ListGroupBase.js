// @flow

import React, { type Node, Fragment } from 'react';
import styled from 'styled-components';

import IconBase from '../Icon/';
import ListItemWrapper from './ListItemWrapper';

import sharedStyle, { ListContent, ListWrapper } from './styled';
import '../../styles/global.css';

import type { ListItemType, ThemeTyped } from './type';

const Root = styled.ul`
  list-style: none;
  word-break: break-word;
  word-wrap: break-word;
  overflow: hidden;
  border-radius: ${props => (props.collapse ? '4px' : 0)};
  ${props =>
    props.border
      ? sharedStyle.themeWithBorder
      : sharedStyle.themeWithoutBorder};
`;

const Icon = styled(IconBase)`
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -5px;
  pointer-events: none;
  color: ${props => (props.open? '#00C3FF' : 'inherit')};
  transform: ${props => (props.open ? `rotateZ(-180deg)` : `rotateZ(0deg)`)};
  transition: all 0.2s ease;
`;

const InnerWrapper = styled(Root)`
  will-change: height;
  background-color: #f7f9fd;
  opacity: ${props => (props.open ? 1 : 0)};
  height: ${props => (props.open ? `${props.childrenHeight}px` : 0)};
  transition: all 0.2s ease;
`;

type Props = {
  nodes: Map<number, HTMLElement>,
  data: Array<ListItemType>,
  themed: ThemeTyped,
  border?: boolean,
  collapse?: boolean,
  setNodes: (i: number, c: HTMLElement) => void,
  onListOpen: (i: number) => void,
  renderChilden: (item: ListItemType) => Node,
  renderBadge?: (item: ListItemType) => Node
};

const ListGroupBase = ({
  setNodes,
  nodes,
  themed,
  onListOpen,
  data,
  renderChilden,
  renderBadge,
  renderListWrapper,
  ...props
}: Props) => {
  const ListChildren = item => (
    <Fragment>
      <ListContent>{item.content}</ListContent>
      {renderBadge && renderBadge(item)}
      {(item.href || item.children) && (
        <Icon open={item.open} name={iconHandler(item)} size="10" />
      )}
    </Fragment>
  );
  const iconHandler = item =>
    item.children ? 'chevron-down' : 'chevron-right';
  return (
    <Root themed={themed} {...props}>
      {data.map((item, i) => (
        <ListWrapper key={item.id || i} {...props}>
          {renderListWrapper ? (
            renderListWrapper({
              children: ListChildren(item),
              item,
              i,
              themed,
              onListOpen,
              ...props
            })
          ) : (
            <ListItemWrapper
              item={item}
              i={i}
              onListOpen={onListOpen}
              href={item.href}
              themed={themed}
              hasChildren={item.children}
              {...props}
            >
              {ListChildren(item)}
            </ListItemWrapper>
          )}
          <InnerWrapper
            open={item.open}
            childrenHeight={item.childrenHeight}
            innerRef={c => setNodes(i, c)}
          >
            {renderChilden(item)}
          </InnerWrapper>
        </ListWrapper>
      ))}
    </Root>
  );
};

ListGroupBase.ListItemWrapper = ListItemWrapper;

export default ListGroupBase;
