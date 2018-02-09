// @flow

import * as React from 'react';
import styled from 'styled-components';

const stateColor = (props) => {
  if (props.alarm) return `#EB5000`;
  if (props.warning) return `#FFB400`;
  if (props.success) return `#2BCD86`;
  return `#7189b6`;
}

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
