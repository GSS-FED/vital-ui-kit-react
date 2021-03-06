/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

import { Badge } from '@vital-ui/react-badge';

const TabBadge = styled(Badge)`
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 4.975rem;
  margin: 0 -5px 0 4px;
`;

const Root = styled.div<{ current: boolean }>`
  display: inline-block;
  padding: 5px 20px 4px;
  line-height: 1.4;
  font-size: 1rem;
  color: ${({ theme }) => theme.tab.item.color};
  background-color: ${({ theme }) => theme.tab.item.bg};
  border-radius: 4px 4px 0 0;
  margin-right: 2px;
  cursor: pointer;

  ${({ current, theme }) =>
    current &&
    css`
      color: ${theme.tab.item.current.color};
      background-color: ${theme.tab.item.current.bg};
    `};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

const Span = styled.span`
  vertical-align: middle;
  display: inline-block;
`;

const Label = styled(Span)`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -1px;
  margin-bottom: 1px;
`;

type Props = {
  label?: React.ReactNode;
  current?: boolean;
  badge?: number | string;
  panel?: React.ReactNode;
  index?: number;
  onTabChange?: (panel: React.ReactNode, index?: number) => void;
  style?: React.CSSProperties;
  /** default: `vital__tab-item` */
  className?: string;
};

class TabItem extends React.Component<Props> {
  static defaultProps = {
    current: false,
    badge: null,
  };

  render() {
    const {
      current = false,
      onTabChange,
      index,
      label,
      badge,
      panel,
      style,
      className,
      ...props
    } = this.props;
    return (
      <Root
        className={cn('vital__tab-item', className)}
        style={style}
        current={current}
        onClick={() => {
          if (onTabChange) {
            onTabChange(panel, index);
          }
        }}
        {...props}
      >
        {label && <Label>{label}</Label>}
        {badge && <TabBadge inverse={!current}>{badge}</TabBadge>}
      </Root>
    );
  }
}

export default TabItem;
