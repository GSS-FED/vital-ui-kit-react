/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const StyledCheckboxGroup = styled.div``;

type Props = {
  children: React.Node,
  className?: string,
  style?: CSSStyleDeclaration,
};

const CheckboxGroup = ({
  children,
  style,
  className,
  ...props
}: Props) => (
  <StyledCheckboxGroup
    style={style}
    className={cn('vital__checkbox-group', className)}
    {...props}
  >
    {children}
  </StyledCheckboxGroup>
);

CheckboxGroup.defaultProps = {
  className: '',
  style: undefined,
};

export default CheckboxGroup;
