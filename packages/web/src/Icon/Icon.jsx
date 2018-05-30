/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React from 'react';

import withIcon from './components/withIcon';
import defaultIcon from './selection.json';

function getIcon(iconName, iconPaths) {
  const icon = iconPaths.icons.find(
    i => i.icon.tags.indexOf(iconName) > -1
  );
  if (icon) {
    return {
      path: icon.icon.paths.join(' '),
      width: icon.icon.width
    };
  }
  // eslint-disable-next-line
  console.warn(
    `Could not find the name of the Icon: ${iconName}. Please check your icons file tags.`
  );
  return null;
}

type Props = {
  name: string,
  size?: number,
  color?: string,
  icon?: any,
  onClick?: () => mixed
};

/**
 * @render react
 * @name Icon
 * @description Icon based on icomoon selection.json, render svg path base on the name of tags.
 * @example
 * <Icon
 *  size={12}
 *  color="#FED"
 *  name="wifi"
 * />
 */

const Icon = ({
  name,
  size,
  onClick,
  color,
  icon = defaultIcon,
  ...props
}: Props) => {
  const iconInfo = getIcon(name, icon);
  if (!iconInfo) {
    return null;
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${iconInfo.width || 1024} 1024`}
      onClick={onClick}
      {...props}
    >
      {iconInfo.path && <path d={iconInfo.path} fill={color} />}
    </svg>
  );
};

Icon.defaultProps = {
  size: 16,
  icon: defaultIcon,
  color: 'currentColor',
  onClick: () => {}
};

export default withIcon(Icon);
