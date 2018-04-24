/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React from 'react';

import withIcon from './components/withIcon';


function getIcon(iconName, iconPaths) {
  const icon = iconPaths.icons.find(i => i.icon.tags.indexOf(iconName) > -1);
  if (icon) {
    return {
      path: icon.icon.paths.join(' '),
      width: icon.icon.width
    };
  }
  // eslint-disable-next-line
  console.warn(`Could not find the name of the Icon: ${iconName}. Please check your icons file tags.`)
  return null;
}

type Props = {
  name: string,
  size?: number,
  color?: string,
  icon: object,
  onClick?: () => {},
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

const Icon = ({ name, size = 16, onClick, color, ...props }: Props) => {
  const iconInfo = getIcon(name, props.icon);
  if (!iconInfo) {
    return null;
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${iconInfo.width || 1024} 1024`} onClick={onClick} {...props}>
      {iconInfo.path && <path d={iconInfo.path} fill={color || 'currentColor'} />}
    </svg>
  );
};

export default withIcon(Icon);
