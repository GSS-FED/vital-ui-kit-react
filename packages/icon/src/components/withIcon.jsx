// @flow

import React, { type ComponentType } from 'react';

import IconContext from './IconContext';

function withIcon(Component: ComponentType<*>) {
  function IconComponent(props: any) {
    return (
      <IconContext.Consumer>
        {value => <Component {...props} icon={value.icon} />}
      </IconContext.Consumer>
    );
  }

  IconComponent.displayName = `withIcon(${Component.displayName ||
    Component.name})`;

  return IconComponent;
}

export default withIcon;
