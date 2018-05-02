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
  border-left: ${props => props.border ? '1px solid #D8E2F5' : 'none'};
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
}


class MenuItem extends React.Component<Props> {
  render() {
    return (
      <Root border={this.props.border} {...this.props}>
        <MenuButton subtle>{this.props.children}</MenuButton>
      </Root>
    );
  }
}

export default MenuItem;
