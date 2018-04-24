/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node, Component } from 'react';
import styled from 'styled-components';

import Badge from '../Badge';
import PillsGroup from './PillsGroup';

const textWidth = props => {
  if (props.vertical && props.badge) {
    return 'calc(100% - 40px)';
  } else if (props.vertical) {
    return '100%';
  }
  return 'auto';
};

const Root = styled.div`
  background-color: ${props => (props.selected ? '#2A4880' : 'transparent')};
  color: ${props => (props.selected ? '#fff' : '#456296')};
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

  ${props => !props.selected && `
    &:hover {
      background-color: #d8e2f5;
      color: #456296;
    }

    &:active {
      background-color: #c3d1eb;
      color: #456296;
    }
  `
  };
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
  /** show badge if needed */
  badge?: string | number,
  /** The current state */
  current?: boolean,
  vertical?: boolean,
  onSelect: (id: string | number) => mixed,
};

class Pill extends Component<Props> {
  handleSelect = () => {
    this.props.onSelect(this.props.id);
  };

  static Group = PillsGroup;

  render() {
    const { vertical, current, badge, id, label, ...props } = this.props;
    return (
      <Root
        vertical={vertical}
        selected={current === id}
        onClick={this.handleSelect}
        {...props}>
        <Text vertical={vertical} badge={badge}>
          {label}
        </Text>
        {badge && <PillBadge label={badge} />}
      </Root>
    );
  }
}

export default Pill;
