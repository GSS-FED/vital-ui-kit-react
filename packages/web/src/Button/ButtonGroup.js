/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  > button:not(:last-child) {
    margin-right: ${props => props.vertical ? 0 : props.marginHorizontal};
  }

  > button {
    display: inline-block;
  }
`;

/**
 * @render react
 * @name ButtonGroup
 * @description Vital Buttons Group
 * @example
 * <ButtonGroup>
 *   <Button nature="default" size="xlarge">Default</Button>
 *   <Button nature="primary" size="large">Default</Button>
 *   <Button nature="success" size="medium">Default</Button>
 *   <Button nature="info" size="small">Default</Button>
 *   <Button nature="alarm" size="xsmall">Default</Button>
 *   <Button nature="warning">Default</Button>
 *   <Button flat>Default</Button>
 *   <Button subtle>Default</Button>
 *   <Button light>Default</Button>
 *   <Button link>Default</Button>
 * </ButtonGroup>
 */

type Props = {
  /** horizontal margin between buttons */
  marginHorizontal?: string,
  /** Buttons as children */
  children: React.Node,
}

const ButtonGroup = ({ children, marginHorizontal = '5px' ,...props }: Props) => (
  <Root {...props} marginHorizontal={marginHorizontal}>{children}</Root>
);

export default ButtonGroup;
