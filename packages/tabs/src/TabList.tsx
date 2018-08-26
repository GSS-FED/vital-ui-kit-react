/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Root = styled.ul`
  display: inline-block;
`;

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /** default: `vital-tab-list` */
  className?: string;
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

export default TabList;
