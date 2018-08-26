import React from 'react';
import styled, { css } from 'styled-components';
import { trunTo } from '@vital-ui/react-utils';
import { defaultTheme } from '@vital-ui/react-theme';
import { badgeSizes, Size } from './constants';

const badgeTransformStyle = ({
  size,
  circle,
  label,
}: {
  size: Size;
  label: string | number;
  circle: boolean;
}) => {
  if (size === 'xlarge') {
    return css`
      padding: 0 5px;
      border-radius: 0.75rem;
      font-size: 0.725rem;
      left: ${circle ? '70%' : 'auto'};
      right: ${circle ? 'auto' : '-12%'};
      top: ${circle ? 0 : `calc(${badgeSizes[size].height} / -2)`};
    `;
  }
  // circle badge style
  return css`
    padding: 0;
    border-radius: 50%;
    font-size: 0;
    width: ${badgeSizes[size].height};
    height: ${badgeSizes[size].height};
    right: calc(${badgeSizes[size].height} / -2);
    top: ${circle ? 0 : `calc(${badgeSizes[size].height} / -2)`};
    left: ${circle ? '70%' : 'auto'};
    right: ${circle ? 'auto' : `calc${badgeSizes[size].height} / -2`};

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

const Root = styled.span<{
  size: Size;
  label: string | number;
  circle: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.avatar.badgeBg};
  color: ${({ theme }) => theme.white};
  vertical-align: middle;
  height: ${({ size }) => badgeSizes[size].height};
  line-height: ${({ size }) => badgeSizes[size].height};
  ${badgeTransformStyle};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

export interface AvatarBadgeProps {
  label: string | number;
  size?: Size;
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
