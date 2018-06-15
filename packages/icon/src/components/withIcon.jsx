// @flow

import React, { type ComponentType } from 'react';

import IconContext from './IconContext';

function withIcon(Component: ComponentType<*>) {
  return function IconComponent(props: any) {
    return (
      <IconContext.Consumer>
        {icon => <Component {...props} icon={icon} />}
      </IconContext.Consumer>
    )
  }
}

export default withIcon;
