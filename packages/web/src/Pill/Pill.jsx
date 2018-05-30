/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node, Component } from 'react';
import styled, { css } from 'styled-components';

import Badge from '../Badge';
import PillsGroup from './PillsGroup';

const textWidth = props => {
  if (props.vertical && props.badge) {
    return 'calc(100% - 40px)';
  }
  if (props.vertical) {
    return '100%';
  }
  return 'auto';
};

const Root = styled.div`
  background-color: ${({ theme, selected }) =>  theme.pill.bg(selected)};
  color: ${({ selected, theme }) =>
    theme.pill.color(selected)};
  font-size: 1rem;
  position: relative;
  z-index: 5;
  display: ${props => (props.vertical ? 'block' : 'inline-block')};
  padding: 6px 22px 7px;
  line-height: 1.3;
  border-radius: 2.16667rem;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: ${props => (props.vertical ? '0' : '10px')};
  margin-right: ${props => (props.vertical ? '0' : '10px')};

  ${({ selected, theme }) =>
    !selected &&
    css`
    &:hover {
      background-color: ${theme.pill.hover.bg};
      color: ${theme.pill.hover.color};
    }

    &:active {
      background-color: ${theme.pill.active.bg};
      color: ${theme.pill.active.color};
    }
  `};
`;

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -1px;
  margin-bottom: 1px;
  width: ${props => textWidth(props)};
`;

const PillBadge = styled(Badge)`
  display: inline-block;
  margin: 0 -5px 0 4px;
  float: right;
`;

type Props = {
  /** Require id for each Pills */
  id: string | number,
  /** Content inside Pill */
  label: Node,
  /** Show badge if it has one */
  badge?: string | number,
  /** The current state */
  current?: boolean,
  /** Vertical display */
  vertical?: boolean,
  /** Call when pill selected */
  onSelect: (id: string | number) => {}
};

/**
 * @render react
 * @name Pill
 * @description Group of Pills
 * @example
 *       <Pill.Group default={1}>
 *        <Pill id={1} label="Dashboard" badge="23" />
 *        <Pill id={2} label="Projects" badge="99+" />
 *        <Pill id={3} label="Issues" badge="6" />
 *        <Pill id={4} label="Reports" />
 *        <Pill id={5} label="User Center" />
 *      </Pill.Group>
 */

class Pill extends Component<Props> {
  static defaultProps = {
    badge: null,
    current: false,
    vertical: false,
  }

  static Group = PillsGroup;

  handleSelect = () => {
    this.props.onSelect(this.props.id);
  };

  render() {
    const {
      vertical,
      current,
      badge,
      id,
      label,
      ...props
    } = this.props;
    return (
      <Root
        vertical={vertical}
        selected={current === id}
        onClick={this.handleSelect}
        {...props}
      >
        <Text vertical={vertical} badge={badge}>
          {label}
        </Text>
        {badge && <PillBadge label={badge} />}
      </Root>
    );
  }
}

export default Pill;
