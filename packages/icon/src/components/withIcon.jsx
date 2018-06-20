// @flow

import React, { type ComponentType } from 'react';

import IconContext from './IconContext';

function withIcon(Component: ComponentType<*>) {
  return function IconComponent(props: any) {
    return (
      <IconContext.Consumer>
        {value => <Component {...props} icon={value.icon} />}
      </IconContext.Consumer>
    );
  };
}

export default withIcon;
