import React from 'react';
import styled, { css } from 'styled-components';
import { trunTo } from '@vital-ui/react-utils';
import { defaultTheme } from '@vital-ui/react-theme';
import { badgeSizes, SizeType } from './constants';

const badgeTransformStyle = ({
  size,
  round,
  label,
}: {
  size: SizeType;
  label: string;
  round: boolean;
}) => {
  if (size === 'xlarge') {
    return css`
      padding: 0 5px;
      border-radius: 0.75rem;
      font-size: 0.725rem;
      left: ${round ? '70%' : 'auto'};
      right: ${round ? 'auto' : '-12%'};
      top: ${round ? 0 : `calc(${badgeSizes[size].height} / -2)`};
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
    top: ${round ? 0 : `calc(${badgeSizes[size].height} / -2)`};
    left: ${round ? '70%' : 'auto'};
    right: ${round ? 'auto' : `calc${badgeSizes[size].height} / -2`};

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
  size: SizeType;
  label: string;
  round: boolean;
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
  label: string;
  size?: SizeType;
  round?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AvatarBadge: React.SFC<AvatarBadgeProps> = ({
  label,
  size = 'medium',
  round = false,
  style = undefined,
  className = undefined,
}) => (
  <Root
    label={label}
    size={size}
    round={round}
    style={style}
    className={className}
  >
    {size === 'xlarge' ? trunTo(label) : null}
  </Root>
);

export default AvatarBadge;
