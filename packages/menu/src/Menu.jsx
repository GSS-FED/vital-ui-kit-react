/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const Root = styled.div`
  display: inline-block;
  height: 100%;
`;

type Props = {
  border?: boolean,
  children: React.Node,
  style?: CSSStyleDeclaration,
  /** default: `vital__menu` */
  className?: string,
};

class Menu extends React.Component<Props> {
  static defaultProps = {
    border: true,
    style: undefined,
    className: '',
  };

  static Item = MenuItem;

  render() {
    const {
      children,
      border,
      className,
      style,
      ...props
    } = this.props;
    return (
      <Root
        className={cn('vital__menu', className)}
        style={style}
        {...props}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            border,
            ...props,
          }),
        )}
      </Root>
    );
  }
}

export default Menu;
