/**
 * TODO: rework
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Icon from '@vital-ui/react-icon';

import ButtonBase from '@vital-ui/react-button';

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

const Item: React.SFC<{
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}> = ({ children, selected, onClick, ...props }) => (
  <ListWrapper {...props}>
    <Button subtle selected={selected} onClick={onClick}>
      {children}
    </Button>
  </ListWrapper>
);

Item.defaultProps = {
  selected: false,
};

type Props = {
  /** total page size */
  pageSize: number;
  /** current active page size */
  current: number;
  onClick?: () => void;
};

/**
 * @render react
 * @name Pagination
 * @description display pages
 * @example
 * <Pagination
 *  pageSize={5}
 *  current={3}
 *  onChange={() => {}}
 * />
 */

const Pagination = ({ pageSize, current, onClick }: Props) => (
  <Root>
    <Item onClick={onClick}>First</Item>
    <Item onClick={onClick}>
      <Icon
        style={{ marginRight: '5px' }}
        name="chevron-left"
        size="12"
      />
      Prev
    </Item>
    {new Array(pageSize).map(size => (
      <Item
        onClick={onClick}
        selected={size + 1 === current}
        key={size}
      >
        {size + 1}
      </Item>
    ))}
    <Item onClick={onClick}>
      Next
      <Icon
        style={{ marginLeft: '5px' }}
        name="chevron-right"
        size="12"
      />
    </Item>
    <Item onClick={onClick}>Last</Item>
  </Root>
);

export default Pagination;
