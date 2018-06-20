/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import TabItem from './TabItem';

const Root = styled.ul`
  display: inline-block;
`;

type Props = {
  children: TabItem[],
  style?: CSSStyleDeclaration,
  /** default: `vital-tab-list` */
  className?: string,
};

const TabList = ({ style, className, children, ...props }: Props) => (
  <Root
    className={cn('vital__tab-list', className)}
    style={style}
    {...props}
  >
    {children}
  </Root>
);

TabList.defaultProps = {
  style: undefined,
  className: '',
};

export default TabList;
