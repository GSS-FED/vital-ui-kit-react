/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import cn from 'classnames';

import { AvatarBadge } from './AvatarBadge';
import { avatarSizes, Size } from './constants';
import { defaultAvatarSets } from './default-avatar';

type SizeStyleProps = {
  size: Size;
  circle?: boolean;
  builtinTheme?: typeof builtinTheme;
};

const sizeStyle = css<SizeStyleProps>`
  width: ${({ size }) => builtinTheme[size].size};
  height: ${({ size }) => builtinTheme[size].size};
  border-radius: ${({ size, circle }) =>
    circle ? '50%' : builtinTheme[size].borderRadius};
`;

const Root = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img<SizeStyleProps>`
  background-color: ${({ theme }) => theme.grey200};
  box-sizing: border-box;
  ${sizeStyle};
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  ${sizeStyle};
`;

Image.defaultProps = {
  theme: defaultTheme,
};

const builtinTheme = {
  ...avatarSizes,
};

type Gender = 'male' | 'female';

export interface AvatarProps {
  /** Default sets of avatar */
  bulltinAvatars?: typeof defaultAvatarSets;
  /** Each Avatar size and borderRadius if circle  */
  builtinTheme?: typeof builtinTheme;
  /** Image src html attr of the avatar. */
  src?: string;
  /** @deprecated Circle style. */
  round?: boolean;
  /** Circle style. */
  circle?: boolean;
  /** Avatar size, default is `medium`, `xlarge`, `large`, `medium`, `small`, `xsmall` */
  size?: Size;
  /** Value for the right top badge */
  badge?: React.ReactNode;
  gender?: Gender;
  outline?: boolean;
  containerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  badgeStyle?: React.CSSProperties;
  /** Default is `vital__avatar` */
  containerClassName?: string;
  /** Default is `vital__avatar-image` */
  imageClassName?: string;
  /** Default is `vital__avatar-badge` */
  badgeClassName?: string;
}

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
export class Avatar extends React.Component<AvatarProps> {
  static defaultProps = {
    bulltinAvatars: defaultAvatarSets,
    builtinTheme,
    badge: null,
    src: null,
    gender: undefined,
    circle: false,
    size: 'medium',
    outline: false,
    imageStyle: undefined,
    containerStyle: undefined,
    badgeStyle: undefined,
    containerClassName: '',
    imageClassName: '',
    badgeClassName: '',
  };

  static Badge: typeof AvatarBadge = AvatarBadge;

  render() {
    const {
      src,
      round,
      circle,
      size = 'medium',
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
    } = this.props;
    return (
      <Root
        style={containerStyle}
        className={cn('vital__avatar', containerClassName)}
        {...props}
      >
        {src ? (
          <Image
            className={cn('vital__avatar-image', imageClassName)}
            src={src}
            size={size!}
            circle={circle}
            style={imageStyle}
            {...props}
          />
        ) : (
          <ImageWrapper
            className={cn('vital__avatar-image-wrapper')}
            size={size}
            circle={circle}
          >
            {this.renderDefaultAvatar()}
          </ImageWrapper>
        )}
        {this.renderBadge()}
      </Root>
    );
  }

  private renderDefaultAvatar = (): JSX.Element => {
    const {
      outline,
      gender,
      bulltinAvatars,
      size,
      builtinTheme,
    } = this.props;
    const defaultAvatarRenderer = bulltinAvatars || defaultAvatarSets;
    const avatarProps = {
      width: builtinTheme![size!].size,
      height: builtinTheme![size!].size,
    };
    if (outline && gender) {
      if (gender === 'female') {
        return defaultAvatarRenderer.femaleOutline(avatarProps);
      }
      if (gender === 'male') {
        return defaultAvatarRenderer.maleOutLine(avatarProps);
      }
      return defaultAvatarRenderer.outline(avatarProps);
    }
    if (!outline && gender) {
      if (gender === 'female') {
        return defaultAvatarRenderer.female(avatarProps);
      }
      if (gender === 'male') {
        return defaultAvatarRenderer.male(avatarProps);
      }
      return defaultAvatarRenderer.default(avatarProps);
    }
    if (outline && !gender) {
      return defaultAvatarRenderer.outline(avatarProps);
    }
    return defaultAvatarRenderer.default(avatarProps);
  };

  private renderBadge = () => {
    const {
      badge,
      size,
      round,
      circle = round,
      badgeStyle,
      badgeClassName,
    } = this.props;
    if (!badge) {
      return null;
    }
    if (typeof badge === 'string' || typeof badge === 'number') {
      return (
        <AvatarBadge
          className={cn('vital__avatar-badge', badgeClassName)}
          label={badge}
          size={size}
          circle={circle}
          style={badgeStyle}
        />
      );
    }
    return badge;
  };
}
