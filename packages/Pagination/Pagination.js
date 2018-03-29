/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import { Button as ButtonBase } from '../Button';
import Icon from '../Icon/';

const Root = styled.ul`
  font-size: 0;
`;

const Button = styled(ButtonBase)`
  font-size: 0.875rem;
`;

const ListWrapper = styled.li`
  display: inline-block;
  vertical-align: middle;
  font-size: 0.875rem;
`;

type Props = {
  /** total page size */
  pageSize: number,
  /** current active page size */
  current: number
};

function Item({
  children,
  selected,
  ...props
}: {
  children: React.Node,
  selected?: boolean
}) {
  return (
    <ListWrapper {...props}>
      <Button subtle selected={selected}>
        {children}
      </Button>
    </ListWrapper>
  );
}


/**
 * @render react
 * @name Pagination
 * @description display pages
 * @example
 * <Pagination
 *  pageSize={5}
 *  current={3}
 * />
 */

const Pagination = ({ pageSize, current }: Props) => (
  <Root>
    <Item>First</Item>
    <Item>
      <Icon
        style={{ marginRight: '5px' }}
        className="icon-chevron-left"
        size="12"
      />
      Prev
    </Item>
    {[...Array(pageSize).keys()].map(size => (
      <Item selected={size + 1 === current} key={size}>
        {size + 1}
      </Item>
    ))}
    <Item>
      Next
      <Icon
        style={{ marginLeft: '5px' }}
        className="icon-chevron-right"
        size="12"
      />
    </Item>
    <Item>Last</Item>
  </Root>
);

export default Pagination;
