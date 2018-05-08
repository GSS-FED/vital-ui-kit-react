/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const StyledCheckboxGroup = styled.div``;

type Props = {
  children: React.ReactNode
};

/** @render react
 * @name CheckboxGroup
 * @description Group of checkboxes
 * @example
 * <CheckboxGroup>
 *  <Checkbox
 *    isRound
 *    label="checkbox 1"
 *  />
 *  <Checkbox
 *    isRound
 *    label="checkbox 2"
 *  />
 *  <Checkbox
 *    isRound
 *    label="checkbox 3"
 *  />
 * </CheckboxGroup>
 */
const CheckboxGroup = ({ children, ...props }: Props) => (
  <StyledCheckboxGroup {...props}>{children}</StyledCheckboxGroup>
);

export default CheckboxGroup;
