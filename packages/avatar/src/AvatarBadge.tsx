import React from 'react';
import styled, { css } from 'styled-components';
import { trunTo } from '@vital-ui/react-utils';
import { defaultTheme } from '@vital-ui/react-theme';
import { AvatarSize } from './constants';

const badgeTransformStyle = ({
  size,
  circle,
  label,
  theme,
}: {
  size: AvatarSize;
  label: string | number;
  circle: boolean;
  theme: any;
}) => {
  if (size === 'xlarge') {
    return css`
      padding: 0 5px;
      border-radius: 0.75rem;
      font-size: 0.725rem;
      left: ${circle ? '70%' : 'auto'};
      right: ${circle ? 'auto' : '-12%'};
      top: ${circle
        ? 0
        : `calc(${theme.avatar[size].badgeHeight} / -2)`};
    `;
  }
  // circle badge style
  return css`
    padding: 0;
    border-radius: 50%;
    font-size: 0;
    width: ${theme.avatar[size].badgeHeight};
    height: ${theme.avatar[size].badgeHeight};
    right: calc(${theme.avatar[size].badgeHeight} / -2);
    top: ${circle
      ? 0
      : `calc(${theme.avatar[size].badgeHeight} / -2)`};
    left: ${circle ? '70%' : 'auto'};
    right: ${circle
      ? 'auto'
      : `calc${theme.avatar[size].badgeHeight} / -2`};

    &:before {
      content: '';
      position: absolute;
      top: calc(50% - (3px / 2));
      left: calc(50% - (3px / 2));
      background: ${label ? '#fff' : 'transparent'};
      border-radius: 50%;
      width: 3px;
      height: 3px;
    }
  `;
};

type RootProps = {
  size: AvatarSize;
  label: string | number;
  circle: boolean;
};

const Root = styled<RootProps, 'span'>('span')`
  position: absolute;
  background-color: ${({ theme }) => theme.avatar.badgeBg};
  color: ${({ theme }) => theme.colors.white};
  vertical-align: middle;
  height: ${({ size, theme }) => theme.avatar[size].badgeHeight};
  line-height: ${({ size, theme }) => theme.avatar[size].badgeHeight};
  ${badgeTransformStyle};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

export interface AvatarBadgeProps {
  label: string | number;
  size?: AvatarSize;
  circle?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const AvatarBadge: React.SFC<AvatarBadgeProps> = ({
  label,
  size = 'medium',
  circle = false,
  style = undefined,
  className = undefined,
}) => (
  <Root
    label={label}
    size={size}
    circle={circle}
    style={style}
    className={className}
  >
    {size === 'xlarge' ? trunTo(label) : null}
  </Root>
);
