/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

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

const MenuButton = styled(Button)`
  display: flex;
  border-radius: 0;
`;

type Props = {
  children: React.Node,
  border?: boolean,
};

class MenuItem extends React.Component<Props> {
  static defaultProps = {
    border: false,
  };

  render() {
    const { border, children, ...props } = this.props;
    return (
      <Root border={border} {...props}>
        <MenuButton subtle>{children}</MenuButton>
      </Root>
    );
  }
}

export default MenuItem;
