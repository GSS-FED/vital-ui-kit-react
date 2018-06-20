/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

import Button from '@vital-ui/react-button';

const Root = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  border-left: ${({ border, theme }) =>
    border ? theme.borderColor : 'none'};
  height: 100%;

  &:first-child {
    border-left: none;
  }
`;

Root.defaultProps = {
  theme: defaultTheme,
};

const MenuButton = styled(Button)`
  display: flex;
  border-radius: 0;
`;

type Props = {
  children: React.Node,
  border?: boolean,
  style?: CSSStyleDeclaration,
  /** default: `vital__menu-item` */
  className?: string,
};

class MenuItem extends React.Component<Props> {
  static defaultProps = {
    border: false,
    style: undefined,
    className: '',
  };

  render() {
    const {
      style,
      className,
      border,
      children,
      ...props
    } = this.props;
    return (
      <Root
        border={border}
        style={style}
        className={cn('vital__menu-item', className)}
        {...props}
      >
        <MenuButton subtle>{children}</MenuButton>
      </Root>
    );
  }
}

export default MenuItem;
