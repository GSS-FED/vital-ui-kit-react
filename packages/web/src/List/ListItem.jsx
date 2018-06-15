/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { tween, styler, easing } from 'popmotion';
import IconBase from '@vital-ui/react-icon';

import { TitleWrapper, List, Title } from './styled';
import Badge from '../Badge';
import SubListItem from './SubListItem';

const ICON_SIZE = 10;

const Icon = styled(IconBase)`
  position: absolute;
  right: 15px;
  top: calc(50% - ${ICON_SIZE / 2}px);
  pointer-events: none;
  color: ${({ open, theme }) => (open ? `${theme.info}` : 'inherit')};
  transform: ${props =>
    props.open ? `rotateZ(-180deg)` : `rotateZ(0deg)`};
  transition: all 0.05s ease-in;
  transform-origin: center center;
`;

const InnerWrapper = styled.ul`
  will-change: height;
  background-color: ${({ theme }) => theme.list.item.bg};
  overflow: hidden;
`;

const BadgeWrapper = styled(Title)`
  text-align: right;
  padding-right: ${props => (props.hasIconRight ? '20px' : '0')};
`;

type Props = {
  /** Children node inside ListItem, nested ListItem */
  children?: React.Node,
  /** Expand state, will toggle open on click by default */
  open?: boolean,
  /** The title of the current ListItem */
  title: Node,
  /** Whether it has link ref style */
  hasLink: boolean,
  /** Badge on right, show if exist */
  badge?: Node,
  /** `onClick`, **it will not override the default expand event** */
  onClick?: () => mixed,
  /** @private Light or Dark theme */
  themed: 'light' | 'dark',
  /** @private  Check if it is a children */
  level?: number,
  /** @private Pass down from ListGroup */
  collapse: boolean,
  /** @private */
  dispatchClose: (level: number) => mixed,
  /** @private */
  border: boolean,
};

type State = {
  open: boolean,
};

class ListItem extends React.Component<Props, State> {
  static defaultProps = {
    children: null,
    level: 0,
    isChildren: false,
    open: false,
    badge: null,
    onClick: null,
  };

  state = {
    open: this.props.open || false,
  };

  componentDidMount() {
    if (this.child) {
      this.child.style.display = this.state.open ? '' : 'none';
    }
  }

  onItemClick = () => {
    if (this.child) {
      if (!!this.props.collapse && !this.state.open) {
        this.props.dispatchClose(this.props.level || 0);
      }
      this.startAnimation();
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  };

  startAnimation = () => {
    const stylerBall = styler(this.child);
    // Animation after state change
    if (!this.state.open) {
      this.child.style.display = '';
    }
    tween({
      from: { height: this.state.open ? this.child.clientHeight : 0 },
      to: { height: this.state.open ? 0 : this.child.clientHeight },
      duration: 200,
      ease: this.state.open ? easing.easeIn : easing.easeOut,
    }).start({
      update: stylerBall.set,
      complete: () => {
        this.setState(
          prevState => ({
            open: !prevState.open,
          }),
          () => {
            setTimeout(() => {
              if (!this.state.open) {
                this.child.style.display = 'none';
              }
              this.child.style.height = '';
            }, 50);
          },
        );
      },
    });
  };

  iconHandler = () =>
    this.props.children ? 'chevron-down' : 'chevron-right';

  child: ?HTMLElement;

  renderBadge = () => (
    <BadgeWrapper
      hasIconRight={this.props.children || this.props.hasLink}
    >
      <Badge label={this.props.badge} />
    </BadgeWrapper>
  );

  render() {
    const {
      title,
      children,
      hasLink,
      level,
      themed,
      badge,
      border,
    } = this.props;

    return (
      <List>
        <TitleWrapper
          hasChildren={!!children}
          hasLink={hasLink}
          onClick={this.onItemClick}
          level={level}
          border={border}
          themed={themed}
        >
          <Title>{title}</Title>
          {badge && this.renderBadge()}
          {(children || hasLink) && (
            <Icon
              open={this.state.open}
              name={this.iconHandler()}
              size={ICON_SIZE}
            />
          )}
        </TitleWrapper>
        {children && (
          <InnerWrapper
            innerRef={s => {
              this.child = s;
            }}
          >
            <SubListItem
              isChildren={!!children}
              level={level + 1}
              themed={themed}
            >
              {children}
            </SubListItem>
          </InnerWrapper>
        )}
      </List>
    );
  }
}

export default ListItem;
