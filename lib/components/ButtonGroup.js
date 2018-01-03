import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledButtonGroup = styled.div`
  & > button:not(:last-child) {
    margin-right: ${props => props.horizontal || props.vertical ? 0 : '5px'};
  }
`;

const ButtonGroup = ({ children, ...props }) => (
  <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
);

export default ButtonGroup;
