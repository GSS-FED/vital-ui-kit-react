/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import cn from 'classnames';

import AvatarBadge from './AvatarBadge';
import { avatarSizes } from './constants';
import DEFAULT_AVATAR from '../assets/default-avatar.svg';
import DEFAULT_AVATAR_OUTLINE from '../assets/default-avatar-o.svg';
import DEFAULT_AVATAR_M from '../assets/default-avatar-m.svg';
import DEFAULT_AVATAR_F from '../assets/default-avatar-f.svg';
import DEFAULT_AVATAR_M_O from '../assets/default-avatar-m-o.svg';
import DEFAULT_AVATAR_F_O from '../assets/default-avatar-f-o.svg';

const Root = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  width: ${({ size }) => avatarSizes[size].size};
  height: ${({ size }) => avatarSizes[size].size};
  border-radius: ${({ size, round }) =>
    round ? '50%' : avatarSizes[size].borderRadius};
  background-color: ${({ theme }) => theme.grey200};
  box-sizing: border-box;
`;

Image.defaultProps = {
  theme: defaultTheme,
};

type SizeType = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
type Gender = 'male' | 'female';

type Props = {
  /** Image src html attr of the avatar. */
  src?: string,
  /** Circle style. */
  round?: boolean,
  /** Avatar size, default is `medium`, `xlarge`, `large`, `medium`, `small`, `xsmall` */
  size?: SizeType,
  /** Value for the right top badge */
  badge?: string,
  gender?: Gender,
  outline?: boolean,
  containerStyle?: CSSStyleDeclaration,
  imageStyle?: CSSStyleDeclaration,
  badgeStyle?: CSSStyleDeclaration,
  /** Default is `vital__avatar` */
  containerClassName?: string,
  /** Default is `vital__avatar-image` */
  imageClassName?: string,
  /** Default is `vital__avatar-badge` */
  badgeClassName?: string,
};

/**
 * @render react
 * @name Avatar
 * @description Vital UI Kit Avatar Component
 * @example
 * <Avatar
 *  badge="99+"
 *  size="large"
 *  gender="male"
 *  round
 * />
 */

const Avatar = ({
  src,
  round,
  size,
  badge,
  outline,
  gender,
  containerStyle,
  imageStyle,
  badgeStyle,
  containerClassName,
  imageClassName,
  badgeClassName,
  ...props
}: Props) => {
  const renderBadge = (): ?Node => {
    if (!badge) {
      return null;
    }

    return (
      <AvatarBadge
        className={cn('vital__avatar-badge', badgeClassName)}
        label={badge}
        size={size}
        round={round}
        style={badgeStyle}
      />
    );
  };

  const renderDefaultAvatar = (): string => {
    if (src) {
      return src;
    }
    if (outline && gender) {
      if (gender === 'female') return DEFAULT_AVATAR_F_O;
      if (gender === 'male') return DEFAULT_AVATAR_M_O;
      return DEFAULT_AVATAR_OUTLINE;
    }
    if (!outline && gender) {
      if (gender === 'female') return DEFAULT_AVATAR_F;
      if (gender === 'male') return DEFAULT_AVATAR_M;
      return DEFAULT_AVATAR;
    }
    if (outline && !gender) {
      return DEFAULT_AVATAR_OUTLINE;
    }
    return DEFAULT_AVATAR;
  };

  return (
    <Root
      style={containerStyle}
      className={cn('vital__avatar', containerClassName)}
      {...props}
    >
      <Image
        className={cn('vital__avatar-image', imageClassName)}
        src={renderDefaultAvatar()}
        size={size}
        round={round}
        style={imageStyle}
        {...props}
      />
      {renderBadge()}
    </Root>
  );
};

Avatar.defaultProps = {
  badge: null,
  src: null,
  gender: undefined,
  round: false,
  size: 'medium',
  outline: false,
  imageStyle: undefined,
  containerStyle: undefined,
  badgeStyle: undefined,
  containerClassName: '',
  imageClassName: '',
  badgeClassName: '',
};

export default Avatar;
