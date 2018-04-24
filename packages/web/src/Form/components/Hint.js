// @flow

import * as React from 'react';
import styled from 'styled-components';

import { stateColor } from '../../utils';

const Root = styled.div`
  display: block !important;
  padding-top: 0.4rem;
  font-size: 0.8rem;
  line-height: 1.42857;
  padding-left: 1px;
  white-space: normal;
  color: ${props => stateColor(props)};
`;

type Props = {
  text: string,
  alarm?: boolean,
  warning?: boolean,
  success?: boolean,
};

const Hint = ({ text, alarm, warning, success }: Props) => (
  <Root alarm={alarm} warning={warning} success={success}>
    {text}
  </Root>
);

export default Hint;
