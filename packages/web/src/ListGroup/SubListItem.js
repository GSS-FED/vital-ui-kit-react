/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node, Fragment } from 'react';

type Props = {
  children: Node,
  level: number,
  isChildren: boolean,
  themed: 'light' | 'dark',
};

const SubListItem = ({ children, level, isChildren, themed }: Props) => {
  const renderChildren = () => React.Children.map(children, child =>
      React.cloneElement(child, {
        level,
        isChildren,
        themed
      })
    );
  return <Fragment>{renderChildren()}</Fragment>;
};

export default SubListItem;
