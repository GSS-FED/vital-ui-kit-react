/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@vital-ui/react-utils';

interface RootProps extends BoxProps {
  marginHorizontal: string;
  vertical: boolean;
}

const Root = styled<RootProps, any>(Box)`
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

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  render() {
    const {
      children,
      marginHorizontal = '5px',
      vertical = false,
      ...props
    } = this.props;
    return (
      <Root
        vertical={vertical}
        marginHorizontal={marginHorizontal}
        {...props}
      >
        {children}
      </Root>
    );
  }
}
