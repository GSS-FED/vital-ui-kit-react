/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import { Box, BoxProps } from '@vital-ui/react-utils';
import {
  CheckboxContext,
  CheckboxContextProps,
} from './CheckboxContext';

export interface CheckboxGroupProps
  extends BoxProps,
    CheckboxContextProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CheckboxGroup: React.SFC<CheckboxGroupProps> = ({
  children,
  style,
  className,
  icon,
  round,
  disabled,
  ...props
}) => (
  <Box
    style={style}
    className={cn('vital__checkbox-group', className)}
    {...props}
  >
    <CheckboxContext.Provider
      value={{
        icon,
        round,
        disabled,
      }}
    >
      {children}
    </CheckboxContext.Provider>
  </Box>
);
