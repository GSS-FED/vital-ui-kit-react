/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  height: 50px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const Sidebar = styled.div`
  width: 220px;
  flex-shrink: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

Header.displayName = 'Header';
Sidebar.displayName = 'Sidebar';
Sidebar.Content = 'Content';

type Props = {
  children: React.ReactNode
};

class Layout extends React.Component<Props> {
  state = {};

  static Header = Header;
  static Sidebar = Sidebar;
  static Content = Content;

  render() {
    const { children, ...props } = this.props;
    const childrenArray = React.Children.map(this.props.children, child => child);
    const header = childrenArray.filter(child => child.type.displayName === 'Header');
    const main = childrenArray.filter(child => child.type.displayName !== 'Header');
    return (
      <Root {...props}>
        {header && <Header>{header}</Header>}
        <Main>{main}</Main>
      </Root>
    );
  }
}

export default Layout;
