// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

import ListItemWrapper from './ListItemWrapper';
import ListItem from './ListItem';

import sharedStyle from './styled';
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

type Props = {
  nodes: Map<number, HTMLElement>,
  data: Array<ListItemType>,
  themed: ThemeTyped,
  border?: boolean,
  collapse?: boolean,
  setNodes: (i: number, c: HTMLElement) => void,
  onListOpen: (i: number) => void,
  renderChilden: (item: ListItemType) => Node,
  renderBadge?: (item: ListItemType) => Node,
  renderListWrapper: (props: any) => Node
};

const ListGroupBase = ({
  data,
  renderListWrapper,
  renderBadge,
  ...props
}: Props) => (
  <Root themed={props.themed} {...props}>
    {data.map(
        (item, i) =>
          renderListWrapper ? (
            renderListWrapper({
              children: <ListItem item={item} renderBadge={renderBadge} />,
              key: item.id | i,
              item,
              i,
              ...props
            })
          ) : (
            <ListItemWrapper item={item} i={i} {...props} key={item.id | i}>
              <ListItem item={item} renderBadge={renderBadge} />
            </ListItemWrapper>
          )
      )}
  </Root>
  );

ListGroupBase.ListItemWrapper = ListItemWrapper;

export default ListGroupBase;
