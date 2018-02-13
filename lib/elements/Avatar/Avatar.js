// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

import { AvatarBadge } from './';
import { avatarSizes } from './constants';
import DEFAULTAVATAR from '../../assets/img/avatar/default-avatar.svg';

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

type Props = {
  src?: string,
  /** Default is false, check if you want ciruclar avatar */
  round?: boolean,
  size?: SizeType,
  badge?: string,
};

const Avatar = ({ src, round = false, size = 'medium', badge }: Props) => {
  const renderBadge = (): ?Node => {
    if (!badge) {
      return null;
    }

    return <AvatarBadge label={badge} size={size} round={round} />;
  };

  return (
    <Root>
      <Image src={src || DEFAULTAVATAR} size={size} round={round} />
      {renderBadge()}
    </Root>
  );
};

export default Avatar;
