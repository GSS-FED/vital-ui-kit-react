/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';

type Props = {
  children: React.ReactNode;
  level: number;
  isChildren: boolean;
  themed?: 'light' | 'dark';
};

const SubListItem = ({
  children,
  level,
  isChildren,
  themed,
}: Props) => {
  const renderChildren = () =>
    React.Children.map(children, (child: any) =>
      React.cloneElement(child, {
        level,
        isChildren,
        themed,
      }),
    );
  return <React.Fragment>{renderChildren()}</React.Fragment>;
};

export default SubListItem;
