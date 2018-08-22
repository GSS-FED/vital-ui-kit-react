/**
 * TODO: rework
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React from 'react';
import styled, { css } from 'styled-components';

import withIcon from './components/withIcon';
import defaultIcon from './selection.json';

const Svg = styled.svg`
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `};
`;

function getIcon(iconName: any, iconPaths: any) {
  const icon = iconPaths.icons.find(
    (i: any) => i.icon.tags.indexOf(iconName) > -1,
  );
  if (icon) {
    return {
      path: icon.icon.paths.join(' '),
      width: icon.icon.width,
    };
  }
  // eslint-disable-next-line
  console.warn(
    `Could not find the name of the Icon: ${iconName}. Please check your icons file tags.`,
  );
  return null;
}

type Props = {
  name: string,
  size?: number,
  color?: string,
  icon?: any,
  onClick?: () => void,
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

const Icon: React.SFC<Props> = ({
  name,
  size,
  onClick,
  color,
  icon = defaultIcon,
  ...props
}) => {
  const iconInfo = getIcon(name, icon);
  if (!iconInfo) {
    return null;
  }
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${iconInfo.width || 1024} 1024`}
      onClick={onClick}
      {...props}
    >
      {iconInfo.path && <path d={iconInfo.path} fill={color} />}
    </Svg>
  );
};

Icon.defaultProps = {
  size: 16,
  icon: defaultIcon,
  color: 'currentColor',
};

export default withIcon(Icon);
