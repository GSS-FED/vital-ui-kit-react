/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node, Component } from 'react';
import styled from 'styled-components';
import { tween, styler, easing } from 'popmotion';

import { List, ListWrapper, ListContent } from '../ListGroup/styled';
import IconBase from '../Icon/';

const Icon = styled(IconBase)`
  position: absolute;
  right: 15px;
  pointer-events: none;
  color: ${props => (props.open ? '#00C3FF' : 'inherit')};
  transform: ${props => (props.open ? `rotateZ(-180deg)` : `rotateZ(0deg)`)};
  transition: all 0.2s ease;
  transform-origin: center center;
`;

const InnerWrapper = styled.ul`
  will-change: height;
  background-color: #f7f9fd;
  opacity: ${props => (props.open ? 1 : 0)};
  overflow: hidden;
  transition: all 0.2s ease;
`;

type Props = {
  open?: boolean,
  children?: Node,
  content: Node,
  hasLink: boolean,
  onClick?: () => mixed,
};

type State = {
  open: boolean,
};

class ListItem extends Component<Props, State> {
  state = {
    open: this.props.open || false,
  };
  child: HTMLElement;

  componentDidMount() {
    if (this.child) {
      this.child.style.display = this.state.open ? '' : 'none';
    }
  }

  onItemClick = () => {
    if (this.child) {
      this.startAnimation();
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  };

  startAnimation = () => {
    const stylerBall = styler(this.child);
    if (!this.state.open) {
      this.child.style.display = '';
    }
    tween({
      from: { height: this.state.open ? this.child.clientHeight : 0 },
      to: { height: this.state.open ? 0 : this.child.clientHeight },
      ease: easing.easeInOut,
    }).start({
      update: stylerBall.set,
      complete: () => {
        this.setState(prevState => ({
          open: !prevState.open
        }), () => {
          setTimeout(() => {
            if (!this.state.open) {
              this.child.style.display = 'none';
            }
            this.child.style.height = null;
          }, 50);
        })
      }
    });
  }



  iconHandler = () =>
    this.props.children ? 'icon-chevron-down' : 'icon-chevron-right';

  render() {
    const { content, children, hasLink, ...props } = this.props;
    return (
      <ListWrapper>
        <List hasChildren={!!children} onClick={this.onItemClick}>
          <ListContent>{content}</ListContent>
          {(children || hasLink) && (
            <Icon
              open={this.state.open}
              className={this.iconHandler()}
              size="10"
            />
          )}
        </List>
        {children && (
          <InnerWrapper
            {...props}
            innerRef={s => {
              this.child = s;
            }}
            open={this.state.open}
          >
            {children}
          </InnerWrapper>
        )}
      </ListWrapper>
    );
  }
}

export default ListItem;
