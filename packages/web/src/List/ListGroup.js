/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node, Component } from 'react';

import { ListGroupWrapper } from './styled';

type Props = {
  children: Array<Node>,
  themed?: 'light' | 'dark',
  border?: boolean,
  icon?: string | Node,
  collapse?: boolean
};

class List extends Component<Props> {

  renderChildren = () => React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        themed: this.props.themed,
        collapse: this.props.collapse,
        border: this.props.border
      })
    )

  render() {
    const { themed, border, collapse, children, ...props } = this.props;
    return (
      <ListGroupWrapper
        {...props}
        themed={themed}
        border={border}
        collapse={collapse}
      >
        {this.renderChildren()}
      </ListGroupWrapper>
    );
  }
}

export default List;
