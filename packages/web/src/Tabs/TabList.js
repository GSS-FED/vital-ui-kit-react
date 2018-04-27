/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';

import TabItem from './TabItem';

const Root = styled.ul`
  display: inline-block;
`;

type Props = {
  children: TabItem,
  activeIndex: number,
  onTabClick: () => {},
};

class TabList extends React.Component<Props> {
  state = {};

  renderChildren = () => React.Children.map(this.props.children, (child, i) => {
      if (child.type === TabItem) {
        return React.cloneElement(child, {
          index: i,
          active: this.props.activeIndex === i,
          onTabClick: this.props.onTabClick
        });
      }
      return child
    });

  render() {
    const { children, ...props } = this.props;
    return <Root {...props}>{this.renderChildren()}</Root>;
  }
}

export default TabList;
