import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

import { stateColor } from '@vital-ui/react-utils';

const Root = styled.div<{
  warning: boolean;
  alarm: boolean;
  success: boolean;
}>`
  display: block !important;
  padding-top: 0.4rem;
  font-size: 0.8rem;
  line-height: 1.42857;
  padding-left: 1px;
  white-space: normal;
  color: ${props => stateColor(props, props.theme.form.hint.color)};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  text: string;
  alarm?: boolean;
  warning?: boolean;
  success?: boolean;
  /** default vital__hint */
  className?: string;
  style?: React.CSSProperties;
};

const Hint: React.SFC<Props> = ({
  className,
  style,
  text,
  alarm = false,
  warning = false,
  success = false,
}) => (
  <Root
    style={style}
    className={cn('vital__hint', className)}
    alarm={alarm}
    warning={warning}
    success={success}
  >
    {text}
  </Root>
);

Hint.defaultProps = {
  alarm: false,
  warning: false,
  success: false,
};

export default Hint;
