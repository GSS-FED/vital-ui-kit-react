// @flow

import * as React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Root = styled.div`
  > button:not(:last-child) {
    margin-right: ${props => props.vertical ? 0 : props.marginHorizontal};
  }
`;

type Props = {
  marginHorizontal?: string,
  children: React.Node,
}

const ButtonGroup = ({ children, marginHorizontal = '5px' ,...props }: Props) => (
  <Root {...props} marginHorizontal={marginHorizontal}>{children}</Root>
);

export default ButtonGroup;
