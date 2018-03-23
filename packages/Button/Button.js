// @flow

import * as React from 'react';

import ButtonElement from './styled';
import { defaultTheme } from './constant';

type Nature = 'default' | 'primary' | 'success' | 'info' | 'alarm' | 'warning';

type Size = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

type Props = {
  /** The content of the button */
  children?: React.Node,
  /** on click event */
  onClick?: () => void,
  /** 6 nature state */
  nature?: Nature,
  /** Flat style */
  flat?: boolean,
  /** Subtle style */
  subtle?: boolean,
  /** Light style */
  light?: boolean,
  /** Link style */
  link?: boolean,
  /** Button size */
  size?: Size,
  theme?: any,
  /** Circle button */
  circle?: boolean,
  /** Selected state */
  selected?: boolean,
}

const Button = ({ children, onClick, ...props }: Props) => (
  <ButtonElement onClick={onClick} {...props}>
    {children}
  </ButtonElement>
);


Button.defaultProps = {
  children: 'Button',
  nature: 'default',
  theme: defaultTheme,
  size: 'medium',
  light: false,
  flat: false,
  link: false,
  subtle: false,
  selected: false,
  onClick: () => {},
};

export default Button;
