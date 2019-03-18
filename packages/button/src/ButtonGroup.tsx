/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import { BoxProps, superBoxStyle } from '@vital-ui/react-utils';
import styled from 'styled-components';

export interface ButtonGroupProps extends BoxProps {
  vertical?: boolean;
  /** Horizontal margin between buttons */
  marginHorizontal?: string;
}

/**
 * @name ButtonGroup
 * @description Button component with group
 * ```tsx
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
 * ```
 */
export const ButtonGroup = styled('div')<ButtonGroupProps>`
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
