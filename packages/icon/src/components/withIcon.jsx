// @flow

import React, { type ComponentType } from 'react';

import IconContext from './IconContext';

function withIcon(Component: ComponentType<*>) {
  return function Icon(props: any) {
    return (
      <IconContext.Consumer>
        {value => <Component {...props} icon={value.icon} />}
      </IconContext.Consumer>
    );
  };
}

export default withIcon;
