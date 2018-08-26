/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

const Root = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.tab.panel.bg};
  color: ${({ theme }) => theme.tab.panel.color};
  font-size: 0.93333rem;
  padding: 10px;
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

class TabPanel extends React.Component<Props> {
  render() {
    const { className, style } = this.props;
    return (
      <Root
        className={cn('vital__tab-panel', className)}
        style={style}
      >
        {this.props.children}
      </Root>
    );
  }
}

export default TabPanel;
