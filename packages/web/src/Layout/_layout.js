/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  ${props => props.hasHeader && `
    grid-template-rows: [row1-start] 50px [row1-end];
  `};

  ${props => props.hasSidebar && `
    grid-template-columns: 220px auto auto auto;
  `};

  grid-template-areas:
    ${props => props.hasHeader && `"header header header header"`}
    ${props => props.hasSidebar ? `
    "sidebar main main main"
    "sidebar main main main";
    `: `
    "main main main main"
    "main main main main";
    `}
`;

const Header = styled.div`
  grid-area: header;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
`;

const Main = styled.div`
  grid-area: main;
`;

Header.displayName = 'Header';
Sidebar.displayName = 'Sidebar';
Sidebar.Main = 'Main';

type Props = {
  children: React.ReactNode
}

class Layout extends React.Component<Props>{
  state = {  }

  static Header = Header
  static Sidebar = Sidebar
  static Main = Main

  render() {
    let hasHeader = false;
    let hasSidebar = false;
    React.Children.map(this.props.children, child => {
      if (child.type.displayName === 'Header') {
        hasHeader = true;
      }
      if (child.type.displayName === 'Sidebar') {
        hasSidebar = true;
      }
    })
    return (
      <Root hasHeader={hasHeader} hasSidebar={hasSidebar}>
        {this.props.children}
      </Root>
    );
  }
}

export default Layout;
