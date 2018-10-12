/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';
import {
  trunTo,
  superBoxStyle,
  BoxProps,
} from '@vital-ui/react-utils';
import cn from 'classnames';

const inverseOrNot = ({
  inverse,
  theme,
}: {
  inverse: boolean;
  theme: any;
}) => `
  background-color: ${
    inverse ? theme.badge.inverseBg : theme.badge.bg
  };
  color: ${inverse ? theme.badge.inverseColor : theme.badge.color};
`;

interface RootProps extends BoxProps {
  /** Iverse style */
  inverse?: boolean;
}

const Root = styled<RootProps, 'span'>('span')`
  display: inline-block;
  vertical-align: middle;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.725rem;

  ${inverseOrNot};
  ${superBoxStyle};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

export interface BadgeProps extends RootProps {
  /** Text on the badge */
  children: React.ReactNode;
  /** Show 99+ if number is more than 100 */
  trunc?: boolean;
  /** className, default is 'vital__badge' */
  className?: string;
  style?: React.CSSProperties;
}

/**
 * @render react
 * @name Badge
 * @description Vital UI Kit Badge Label
 * @example
 * <Badge>99</Badge>
 */

export const Badge: React.SFC<BadgeProps> = ({
  children,
  trunc = true,
  inverse = false,
  className,
  style,
  ...props
}) => (
  <Root
    inverse={inverse}
    className={cn('vital__badge', className)}
    style={style}
    {...props}
  >
    {(trunc && typeof children === 'string') ||
    typeof children === 'number'
      ? trunTo(children)
      : children}
  </Root>
);
