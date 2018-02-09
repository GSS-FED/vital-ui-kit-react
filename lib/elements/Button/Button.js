// @flow

import * as React from 'react';

import ButtonElement from './styled';
import { defaultTheme } from './constant';

type Props = {
  children?: React.Node,
  onClick?: () => void,
  nature?: string,
  default?: boolean,
  flat?: boolean,
  light?: boolean,
  link?: boolean,
  size?: string,
  theme?: any,
  circle?: boolean,
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
  onClick: () => {},
};

export default Button;
