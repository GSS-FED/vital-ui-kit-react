/**
 * TODO: rework
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import { ListRoot } from './styled';
import ListItem from './ListItem';
import ListContent from './ListContent';

type Props = {
  /** Children of ListItem */
  children: Array<React.ReactNode>;
  /** Light or dark theme */
  themed?: 'light' | 'dark';
  /** Border around List and ListItem */
  border?: boolean;
  /** Customize Icon */
  icon?: string | React.ReactNode;
  /** Collapse mode, show one item one time */
  collapse?: boolean;
  style?: React.CSSProperties;
  /** default: `vital__list` */
  className?: string;
};

type State = {
  open: boolean;
};

class List extends React.Component<Props, State> {
  static defaultProps = {
    themed: 'light',
    border: false,
    icon: null,
    collapse: false,
    style: undefined,
    className: '',
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
    React.Children.map(this.props.children, (child: any, i) =>
      React.cloneElement(child, {
        ref: (node: any) => {
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
      style,
      className,
      ...props
    } = this.props;
    return (
      <ListRoot
        style={style}
        className={cn('vital__list', className)}
        {...props}
        themed={themed}
        border={border}
        collapse={collapse}
      >
        {this.renderChildren()}
      </ListRoot>
    );
  }
}

export default List;
