/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const Root = styled.div``;

type Props = {
  border?: boolean,
  children?: React.ReactNode,
}

class Menu extends React.Component<Props> {
  static defaultProps = {
    border: true,
  }
  static Item = MenuItem;
  state = {  }
  render() {
    const { children, border, ...props } = this.props;
    return (
      <Root>
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
