/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import { isElement } from '@vital-ui/react-utils';

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
  children: React.ReactNode[];
  defaultActiveIndex?: number;
  beforeTabChange?: (index: number) => void;
  afterTabChange?: (index: number) => void;
  style?: React.CSSProperties;
  /** default: `vital__tabs` */
  className?: string;
};

type State = {
  activeIndex: number;
};

/* tslint:disable-next-line */
const noop = () => {};

export class Tabs extends React.Component<Props, State> {
  static Tab: typeof TabItem = TabItem;

  static Panel: typeof TabPanel = TabPanel;

  static defaultProps = {
    defaultActiveIndex: 0,
    beforeTabChange: noop,
    afterTabChange: noop,
  };

  state = {
    activeIndex: this.props.defaultActiveIndex || 0,
  };

  onTabChange = (panel: React.ReactNode, index: number) => {
    const { beforeTabChange, afterTabChange } = this.props;
    if (beforeTabChange) {
      beforeTabChange(index);
    }

    this.setState(
      {
        activeIndex: index,
      },
      () => {
        if (afterTabChange) {
          afterTabChange(index);
        }
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
              if (
                child &&
                isElement(child) &&
                child.type === TabItem
              ) {
                if (this.state.activeIndex === i) {
                  activePanel = child.props.panel;
                }
                return React.cloneElement(child, {
                  index: i,
                  current: this.state.activeIndex === i,
                  onTabChange: this.onTabChange,
                });
              }
              return undefined;
            })}
          </TabList>
        </Root>
        {activePanel && <div>{activePanel}</div>}
      </React.Fragment>
    );
  }
}
