/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled, { css } from 'styled-components';

import Badge from '../Badge';

const TabBadge = styled(Badge)`
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 4.975rem;
  margin: 0 -5px 0 4px;
`;

const Root = styled.div`
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
    color: ${theme.tab.item.current.color}
    background-color: ${theme.tab.item.current.bg};
  `};
`;

const Span = styled.span`
  vertical-align: middle;
  display: inline-block;
`;

const Label = Span.extend`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -1px;
  margin-bottom: 1px;
`;

type Props = {
  label: React.Node,
  current?: boolean,
  badge?: number | string,
  panel: React.Node,
  index: number,
  onTabChange: (panel: React.Node, index: number) => {}
};

class TabItem extends React.Component<Props> {
  static defaultProps = {
    current: false,
    badge: null
  };

  render() {
    const {
      current,
      onTabChange,
      index,
      label,
      badge,
      panel,
      ...props
    } = this.props;
    return (
      <Root
        current={current}
        onClick={() => onTabChange(panel, index)}
        {...props}
      >
        {label && (
        <Label>
          {label}
        </Label>
)}
        {badge && <TabBadge inverse={!current} label={badge} />}
      </Root>
    );
  }
}

export default TabItem;
