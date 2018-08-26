/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div<{
  marginHorizontal: string;
  vertical: boolean;
}>`
  > button:not(:last-child) {
    margin-right: ${({ vertical, marginHorizontal }) =>
      vertical ? 0 : marginHorizontal};
  }

  > button {
    display: inline-block;
  }
`;

export interface ButtonGroupProps {
  vertical?: boolean;
  /** Horizontal margin between buttons */
  marginHorizontal?: string;
  /** Buttons as children */
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const ButtonGroup: React.SFC<ButtonGroupProps> = ({
  children,
  marginHorizontal = '5px',
  vertical = false,
  ...props
}) => (
  <Root
    vertical={vertical}
    marginHorizontal={marginHorizontal}
    {...props}
  >
    {children}
  </Root>
);