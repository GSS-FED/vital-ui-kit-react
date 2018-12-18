/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { tween, styler, easing } from 'popmotion';
import { Badge } from '@vital-ui/react-badge';
import { defaultTheme } from '@vital-ui/react-theme';

import { ListTitleWrapper, ListLi, ListTitle } from './styled';
import SubListItem from './SubListItem';
import { Arrow } from './Arrow';

const Icon = styled('div')<any>`
  pointer-events: none;
  color: ${({ open, theme }) => (open ? `${theme.info}` : 'inherit')};
  transform: ${props =>
    props.open ? `rotateZ(-180deg)` : `rotateZ(0deg)`};
  transition: transform 0.1s ease-in;
  transform-origin: center center;
`;

Icon.defaultProps = {
  theme: defaultTheme,
};

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InnerWrapper = styled.ul`
  will-change: height;
  background-color: ${({ theme }) => theme.list.item.bg};
  overflow: hidden;
`;

InnerWrapper.defaultProps = {
  theme: defaultTheme,
};

const BadgeWrapper = styled(ListTitle)<any>`
  text-align: right;
  padding-right: ${props => (props.hasIconRight ? '20px' : '0')};
`;

type Props = {
  /** Children node inside ListItem, nested ListItem */
  children?: React.ReactNode;
  /** Expand state, will toggle open on click by default */
  open?: boolean;
  /** The title of the current ListItem */
  title?: React.ReactNode;
  /** Whether it has link ref style */
  hasLink?: boolean;
  /** Badge on right, show if exist */
  badge?: React.ReactNode;
  /** Size of the right icon */
  iconSize?: number;
  /** `onClick`, **it will not override the default expand event** */
  onClick?: () => void;
  style?: React.CSSProperties;
  /** default: `vital__ListItem` */
  className?: string;
  /** @private Light or Dark theme */
  themed?: 'light' | 'dark';
  /** @private  Check if it is a children */
  level?: number;
  /** @private Pass down from ListGroup */
  collapse?: boolean;
  /** @private */
  dispatchClose?: (level: number) => void;
  /** @private */
  border?: boolean;
};

type State = {
  open: boolean;
};

class ListItem extends React.Component<Props, State> {
  static defaultProps = {
    children: null,
    level: 0,
    isChildren: false,
    open: false,
    badge: null,
    onClick: null,
    style: undefined,
    iconSize: 10,
    className: '',
  };

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
      if (
        !!this.props.collapse &&
        !this.state.open &&
        this.props.dispatchClose
      ) {
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

  renderBadge = () => {
    if (
      typeof this.props.badge === 'string' ||
      typeof this.props.badge === 'number'
    ) {
      return (
        <BadgeWrapper
          hasIconRight={this.props.children || this.props.hasLink}
        >
          <Badge>{this.props.badge}</Badge>
        </BadgeWrapper>
      );
    }
    return this.props.badge;
  };

  render() {
    const {
      title,
      children,
      hasLink,
      level,
      themed,
      badge,
      border,
      style,
      className,
    } = this.props;

    return (
      <ListLi
        style={style}
        className={cn('vital__ListItem', className)}
      >
        <ListTitleWrapper
          className="vital__ListItem-wrapper"
          hasChildren={!!children}
          hasLink={hasLink}
          onClick={this.onItemClick}
          level={level}
          border={border}
          themed={themed}
        >
          <ListTitle className="vital__ListItem-title">
            {title}
          </ListTitle>
          <RightWrapper>
            {badge && this.renderBadge()}
            {(children || hasLink) && (
              <Icon open={this.state.open} size={this.props.iconSize}>
                <Arrow />
              </Icon>
            )}
          </RightWrapper>
        </ListTitleWrapper>
        {children && (
          <InnerWrapper
            ref={s => {
              this.child = s;
            }}
          >
            <SubListItem
              isChildren={!!children}
              level={level! + 1}
              themed={themed}
            >
              {children}
            </SubListItem>
          </InnerWrapper>
        )}
      </ListLi>
    );
  }
}

export default ListItem;
