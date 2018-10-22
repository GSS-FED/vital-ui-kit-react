/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';

export interface ButtonGroupProps extends BoxProps {
  vertical?: boolean;
  /** Horizontal margin between buttons */
  marginHorizontal?: string;
  /** Buttons as children */
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ButtonGroup = styled<ButtonGroupProps, 'div'>('div')`
  > button:not(:last-child) {
    margin-right: ${({ vertical, marginHorizontal }) =>
      vertical ? 0 : marginHorizontal};
  }

  > button {
    display: inline-block;
  }
  ${superBoxStyle};
`;

ButtonGroup.defaultProps = {
  marginHorizontal: '5px',
  vertical: false,
};
