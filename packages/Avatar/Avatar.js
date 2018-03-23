// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

import AvatarBadge from './AvatarBadge';
import { avatarSizes } from './constants';
import DEFAULT_AVATAR from './assets/default-avatar.svg';
import DEFAULT_AVATAR_OUTLINE from './assets/default-avatar-o.svg';
import DEFAULT_AVATAR_M from './assets/default-avatar-m.svg';
import DEFAULT_AVATAR_F from './assets/default-avatar-f.svg';
import DEFAULT_AVATAR_M_O from './assets/default-avatar-m-o.svg';
import DEFAULT_AVATAR_F_O from './assets/default-avatar-f-o.svg';

const Root = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  width: ${props => avatarSizes[props.size].size};
  height: ${props => avatarSizes[props.size].size};
  border-radius: ${props =>
    props.round ? '50%' : avatarSizes[props.size].borderRadius};
  background-color: #f0f0f0;
  box-sizing: border-box;
`;

type SizeType = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
type Gender = 'male' | 'female';

type Props = {
  src?: string,
  round?: boolean,
  size?: SizeType,
  badge?: string,
  gender?: Gender,
  outline?: boolean
};

/**
 * @render react
 * @name Avatar
 * @description Avatar UI Component
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
  ...props
}: Props) => {
  const renderBadge = (): ?Node => {
    if (!badge) {
      return null;
    }

    return <AvatarBadge label={badge} size={size} round={round} />;
  };

  const renderDefaultAvatar = (): string => {
    if (src) {
      return src;
    }
    if (outline && gender) {
      if (gender === 'female') return DEFAULT_AVATAR_F_O;
      if (gender === 'male') return DEFAULT_AVATAR_M_O;
      return DEFAULT_AVATAR_OUTLINE;
    } else if (!outline && gender) {
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
    <Root>
      <Image src={renderDefaultAvatar()} size={size} round={round} {...props} />
      {renderBadge()}
    </Root>
  );
};

Avatar.defaultProps = {
  round: false,
  size: 'medium',
  outline: false
};

export default Avatar;
