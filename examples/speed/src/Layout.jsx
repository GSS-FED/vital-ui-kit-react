/**
 * TODO: rework
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
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
Content.displayName = 'Content';

type Props = {
  children: React.ReactNode,
};

/**
 * @render react
 * @name Layout
 * @desc Layout component contains Header, Sidebar and Content
 * @example
 * <Layout>
 *  <Layout.Header />
 *  <Layout.Sidebar />
 *  <Layout.Content />
 * </Layout>
 */
class Layout extends React.Component<Props> {
  static Header = Header;

  static Sidebar = Sidebar;

  static Content = Content;

  render() {
    const { children, ...props } = this.props;
    const childrenArray = React.Children.map(
      this.props.children,
      child => child,
    );
    const header = childrenArray.filter(
      // @ts-ignore
      child => child.type.displayName === 'Header',
    );
    const main = childrenArray.filter(
      // @ts-ignore
      child => child.type.displayName !== 'Header',
    );
    return (
      <Root {...props}>
        {header && <Header>{header}</Header>}
        <Main>{main}</Main>
      </Root>
    );
  }
}

export default Layout;
