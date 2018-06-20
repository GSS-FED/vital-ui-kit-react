/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

import TabItem from './TabItem';
import TabList from './TabList';
import TabPanel from './TabPanel';

const Root = styled.div`
  background: ${({ theme }) => theme.tab.bg};
  width: auto;
  border-radius: 4px 4px 0 0;
  padding: 8px 0 0 12px;
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  children: TabList,
  defaultActiveIndex?: number,
  beforeTabChange?: (index: number) => void,
  afterTabChange?: (index: number) => void,
  style?: CSSStyleDeclaration,
  /** default: `vital__tabs` */
  className?: string,
};

type State = {
  activeIndex: number,
};

class Tabs extends React.Component<Props, State> {
  static defaultProps = {
    defaultActiveIndex: 0,
    beforeTabChange: () => {},
    afterTabChange: () => {},
    style: undefined,
    className: '',
  };

  state = {
    activeIndex: this.props.defaultActiveIndex || 0,
  };

  static Tab = TabItem;

  static Panel = TabPanel;

  onTabChange = (panel: React.Node, index: number) => {
    const { beforeTabChange, afterTabChange } = this.props;
    if (beforeTabChange) beforeTabChange(index);

    this.setState(
      {
        activeIndex: index,
      },
      () => {
        if (afterTabChange) afterTabChange(index);
      },
    );
  };

  render() {
    const {
      children,
      defaultActiveIndex,
      style,
      className,
      ...props
    } = this.props;
    let activePanel = null;
    return (
      <React.Fragment>
        <Root
          style={style}
          className={cn('vital__tabs', className)}
          {...props}
        >
          <TabList>
            {React.Children.map(this.props.children, (child, i) => {
              if (child.type === TabItem) {
                if (this.state.activeIndex === i) {
                  activePanel = child.props.panel;
                }
                return React.cloneElement(child, {
                  index: i,
                  current: this.state.activeIndex === i,
                  onTabChange: this.onTabChange,
                });
              }
              return null;
            })}
          </TabList>
        </Root>
        {activePanel && <div>{activePanel}</div>}
      </React.Fragment>
    );
  }
}

export default Tabs;
