import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

import {
  stateColor,
  BoxProps,
  superBoxStyle,
} from '@vital-ui/react-utils';

interface StatusProps {
  warning?: boolean;
  alarm?: boolean;
  success?: boolean;
}

interface HintProps extends StatusProps, BoxProps {
  children: React.ReactNode;
  /** default vital__hint */
  className?: string;
  style?: React.CSSProperties;
}

export const Hint = styled<HintProps, 'div'>('div').attrs({
  className: props => cn('vital__hint', props.className),
})`
  display: block !important;
  padding-top: 0.4rem;
  font-size: 0.8rem;
  line-height: 1.42857;
  padding-left: 1px;
  white-space: normal;
  color: ${props => stateColor(props, props.theme.form.hint.color)};
  ${superBoxStyle};
`;

Hint.defaultProps = {
  theme: defaultTheme,
  alarm: false,
  warning: false,
  success: false,
};
