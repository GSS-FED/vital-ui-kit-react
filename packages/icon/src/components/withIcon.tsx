import React from 'react';

import IconContext from './IconContext';

function withIcon(Component: React.ComponentType<any>) {
  function IconComponent(props: any) {
    return (
      <IconContext.Consumer>
        {value => <Component {...props} icon={value.icon} />}
      </IconContext.Consumer>
    );
  }

  // @ts-ignore
  IconComponent.displayName = `withIcon(${Component.displayName ||
    Component.name})`;

  return IconComponent;
}

export default withIcon;
