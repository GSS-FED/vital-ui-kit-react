/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import Badge from '@vital-ui/react-badge';

import PillsGroup from './PillsGroup';

const textWidth = (props: {
  vertical: boolean;
  badge?: string | number;
}) => {
  if (props.vertical && props.badge) {
    return 'calc(100% - 40px)';
  }
  if (props.vertical) {
    return '100%';
  }
  return 'auto';
};

const Root = styled.div<{ selected: boolean; vertical: boolean }>`
  background-color: ${({ theme, selected }) =>
    theme.pill.bg(selected)};
  color: ${({ selected, theme }) => theme.pill.color(selected)};
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

Root.defaultProps = {
  theme: defaultTheme,
};

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -1px;
  margin-bottom: 1px;
  width: ${textWidth};
`;

const PillBadge = styled(Badge)`
  display: inline-block;
  margin: 0 -5px 0 4px;
  float: right;
`;

type Props = {
  /** Require id for each Pills */
  id: string | number;
  /** Content inside Pill */
  label: React.ReactNode;
  /** Show badge if it has one */
  badge?: string | number;
  /** The current state */
  current?: boolean;
  /** Vertical display */
  vertical?: boolean;
  /** Call when pill selected */
  onSelect: (id: string | number) => void;
  style?: React.CSSProperties;
  /** default: `vital__pill */
  className?: string;
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

class Pill extends React.Component<Props> {
  static defaultProps = {
    current: false,
    vertical: false,
  };

  static Group = PillsGroup;

  handleSelect = () => {
    this.props.onSelect(this.props.id);
  };

  render() {
    const {
      vertical = false,
      current = false,
      badge,
      id,
      label,
      style,
      className,
      onSelect,
      ...props
    } = this.props;
    return (
      <Root
        className={cn('vital__pill', className)}
        style={style}
        vertical={vertical}
        selected={current}
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
