/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const StyledCheckboxGroup = styled.div``;

type Props = {
  children: React.ReactNode
};

const CheckboxGroup = ({ children, ...props }: Props) => (
  <StyledCheckboxGroup {...props}>
    {children}
  </StyledCheckboxGroup>
);

export default CheckboxGroup;
