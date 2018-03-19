// @flow

import * as React from 'react';

import ButtonElement from './styled';
import { defaultTheme } from './constant';

type nature = 'default' | 'primary' | 'success' | 'info' | 'alarm' | 'warning';

type size = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

type Props = {
  children?: React.Node,
  onClick?: () => void,
  nature?: nature,
  default?: boolean,
  flat?: boolean,
  subtle?: boolean,
  light?: boolean,
  link?: boolean,
  size?: size,
  theme?: any,
  circle?: boolean,
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
  default: true,
  light: false,
  flat: false,
  link: false,
  subtle: false,
  selected: false,
  onClick: () => {},
};

export default Button;
