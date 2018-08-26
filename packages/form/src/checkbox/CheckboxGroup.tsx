/**
 * TODO: refactor
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const StyledCheckboxGroup = styled.div``;

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const CheckboxGroup: React.SFC<Props> = ({
  children,
  style,
  className,
  ...props
}) => (
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
