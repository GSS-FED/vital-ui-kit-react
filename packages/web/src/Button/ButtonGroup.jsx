/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  > button:not(:last-child) {
    margin-right: ${({ vertical, marginHorizontal }) =>
      vertical ? 0 : marginHorizontal};
  }

  > button {
    display: inline-block;
  }
`;

type Props = {
  /** Horizontal margin between buttons */
  marginHorizontal?: string,
  /** Buttons as children */
  children: React.Node,
  style?: CSSStyleDeclaration,
};

const ButtonGroup = ({
  children,
  marginHorizontal,
  ...props
}: Props) => (
  <Root {...props} marginHorizontal={marginHorizontal}>
    {children}
  </Root>
);

ButtonGroup.defaultProps = {
  marginHorizontal: '5px',
  style: null,
}

export default ButtonGroup;
