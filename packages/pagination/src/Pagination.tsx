/**
 * TODO: rework
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Icon from '@vital-ui/react-icon';

import { Button as ButtonBase } from '@vital-ui/react-button';

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        data-prefix="fas"
        data-icon="chevron-left"
        role="img"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        />
      </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        data-prefix="fas"
        data-icon="chevron-right"
        role="img"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
        />
      </svg>
    </Item>
    <Item onClick={onClick}>Last</Item>
  </Root>
);

export default Pagination;
