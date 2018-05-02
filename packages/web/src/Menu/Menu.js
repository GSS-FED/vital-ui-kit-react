/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const Root = styled.div`
  display: inline-block;
  height: 100%;
`;

type Props = {
  border?: boolean,
  children?: React.Node,
}

class Menu extends React.Component<Props> {
  static defaultProps = {
    border: true,
  }
  static Item = MenuItem;

  render() {
    const { children, border, ...props } = this.props;
    return (
      <Root {...props}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {
            border,
            ...props
          })
        ))}
      </Root>
    );
  }
}

export default Menu;
