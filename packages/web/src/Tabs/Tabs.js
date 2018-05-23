/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import TabItem from './TabItem';
import TabList from './TabList';
import TabPanel from './TabPanel';

const Root = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(to left, ${theme.info}, ${
      theme.secondaryList[4]
    })`};
  width: auto;
  border-radius: 4px 4px 0 0;
  padding: 8px 0 0 12px;
`;

type Props = {
  children: TabList,
  defaultActiveIndex?: number,
  beforeTabChange?: (index: number) => {},
  afterTabChange?: (index: number) => {}
};

type State = {
  activeIndex: number
};

class Tabs extends React.Component<Props, State> {
  state = {
    activeIndex: this.props.defaultActiveIndex || 0
  };

  static Tab = TabItem;

  static Panel = TabPanel;

  onTabChange = (panel: React.ReactNode, index: number) => {
    const { beforeTabChange, afterTabChange } = this.props;
    if (beforeTabChange) beforeTabChange(index);

    this.setState(
      {
        activeIndex: index
      },
      () => {
        if (afterTabChange) afterTabChange(index);
      }
    );
  };

  render() {
    const { children, defaultActiveIndex, ...props } = this.props;
    let activePanel = null;
    return (
      <React.Fragment>
        <Root {...props}>
          <TabList>
            {React.Children.map(this.props.children, (child, i) => {
              if (child.type === TabItem) {
                if (this.state.activeIndex === i) {
                  activePanel = child.props.panel;
                }
                return React.cloneElement(child, {
                  index: i,
                  current: this.state.activeIndex === i,
                  onTabChange: this.onTabChange
                });
              }
              return null;
            })}
          </TabList>
        </Root>
        {activePanel && (
        <div>
          {activePanel}
        </div>
)}
      </React.Fragment>
    );
  }
}

export default Tabs;
