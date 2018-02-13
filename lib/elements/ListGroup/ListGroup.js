// @flow

import React, { type Node, PureComponent, Fragment } from 'react';
import styled, { css } from 'styled-components';

import Badge from '../Badge';
import Icon from '../Icon/';

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
  border-top: 1px solid #d8e3f6;
  border-bottom: 1px solid #d8e3f6;
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

type ListItemType = {
  content: Node,
  badge?: string | number,
  href?: string,
  id?: string,
  children?: Array<ListItemType>,
  open?: boolean,
};

const InnerWrapper = styled(Root)`
  background-color: #f7f9fd;
  max-height: ${props => props.open ? 'auto' : 0};
  opacity: ${props => props.open ? 1 : 0};
  transition: all 0.2s ease;
`;

const InnerList = styled(List)`
  padding-left: 2.5rem;
  border: none;
`;

type State = {
  items: Array<ListItemType>,
};

type Props = {
  themed?: 'light' | 'dark',
  items: Array<ListItemType>,
};

class ListGroup extends PureComponent<Props, State> {
  state = {
    items: this.props.items,
  };

  onListOpen = (item: ListItemType) => {
    // this.setState({
    //   items: {
    //     ...items,
    //   }
    // })
  }

  iconHandler = (item: ListItemType) => {
    if (item.children) {
      return 'chevron-down';
    } else if (item.open) {
      return 'chevron-up';
    }
    return 'chevron-right';
  };

  renderChildren = (item: ListItemType) => (
    <InnerWrapper open={item.open}>
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
          <div>
            <ListWrapper key={item.id || i}>
              <List
                onClick={this.onListOpen(item)}
                href={item.href}
                themed={themed}
                hasChildren={item.children}>
                <ListContent>{item.content}</ListContent>
                <BadgeWrapper href={item.href}>
                  {item.badge && <Badge label={item.badge} />}
                </BadgeWrapper>
                {(item.href || item.children) && (
                  <Icon
                    name={this.iconHandler(item)}
                    size="10"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '15px',
                      marginTop: '-5px',
                      pointerEnvets: 'none',
                    }}
                  />
                )}
              </List>
            </ListWrapper>
            {this.renderChildren(item)}
          </div>
        ))}
      </Root>
    );
  }
}

export default ListGroup;

// const ListGroup = ({ items, themed }: Props) => (

// );

// export default ListGroup;
