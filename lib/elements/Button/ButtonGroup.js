// @flow

import * as React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledButtonGroup = styled.div`
  > button:not(:last-child) {
    margin-right: ${props => props.horizontal || props.vertical ? 0 : '5px'};
  }
`;

type Props = {
  children: React.Node,
}

const ButtonGroup = ({ children, ...props }: Props) => (
  <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
);

export default ButtonGroup;
