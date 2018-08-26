/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import PriorityNav from 'react-priority-navigation';
import cn from 'classnames';

const Root = styled.div`
  position: relative;
  width: 100%;
  white-space: nowrap;
`;

export interface PillGroupProps {
  children: React.ReactNode;
  /** Vertical display */
  vertical?: boolean;
  /** The default active, match with pill's id */
  defaultActiveIndex?: number;
  style?: React.CSSProperties;
  className?: string;
  /** Get DropdownList item */
  getDropdownListProps?: (
    items: any,
  ) => React.ReactElement<HTMLElement>;
}

type State = {
  current: number;
};

export class PillsGroup extends React.Component<
  PillGroupProps,
  State
> {
  static defaultProps = {
    defaultActiveIndex: null,
    vertical: false,
    current: null,
    style: undefined,
    className: '',
    getDropdownListProps: undefined,
  };

  state = {
    current: this.props.defaultActiveIndex || 0,
  };

  onSelect = (index: number) => {
    this.setState({
      current: index,
    });
  };

  renderChildren = () =>
    React.Children.map(
      this.props.children,
      (child: React.ReactElement<any>, index: number) =>
        React.cloneElement(child, {
          current: this.state.current === index,
          onSelect: this.onSelect,
          vertical: this.props.vertical,
          index,
        }),
    );

  render() {
    const {
      vertical,
      style,
      className,
      getDropdownListProps,
    } = this.props;
    if (vertical) {
      return (
        <Root
          className={cn('vital__pill-group', className)}
          style={style}
        >
          {this.renderChildren()}
        </Root>
      );
    }
    return (
      <PriorityNav
        className={cn('vital__pill-group', className)}
        // @ts-ignore
        style={style}
        // @ts-ignore
        vertical={vertical}
        // @ts-ignore
        current={this.state.current}
        dropdownList={
          getDropdownListProps || (item => <div>{item}</div>)
        }
      >
        {this.renderChildren()}
      </PriorityNav>
    );
  }
}
