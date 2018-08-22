/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';

import ButtonGroup from './ButtonGroup';
import ButtonElement from './styled';

export type Nature =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'alarm'
  | 'warning';

export type Size = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export interface ButtonProps {
  /** `vital_button` */
  className?: string;
  /** The content of the button */
  children?: React.ReactNode;
  /** on click event */
  onClick?: () => void;
  /** 6 nature state */
  nature?: Nature;
  /** Flat style */
  flat?: boolean;
  /** Subtle style */
  subtle?: boolean;
  /** Light style */
  light?: boolean;
  /** Link style */
  link?: boolean;
  /** Button size */
  size?: Size;
  /** Circle button */
  circle?: boolean;
  /** Selected state */
  selected?: boolean;
  style?: React.CSSProperties;
}

/* tslint:disable-next-line */
const noop = () => {};

/**
 * @render react
 * @name Button
 * @description Button component with group
 * @example
 * <Button.Group>
 *   <Button nature="default" size="xlarge">Default</Button>
 *   <Button nature="primary" size="large">Default</Button>
 *   <Button nature="success" size="medium">Default</Button>
 *   <Button nature="info" size="small">Default</Button>
 *   <Button nature="alarm" size="xsmall">Default</Button>
 *   <Button nature="warning">Default</Button>
 *   <Button flat>Default</Button>
 *   <Button subtle>Default</Button>
 *   <Button light>Default</Button>
 *   <Button link>Default</Button>
 * </Button.Group>
 */

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    children: '',
    nature: 'default' as Nature,
    size: 'medium' as Size,
    circle: false,
    light: false,
    flat: false,
    link: false,
    subtle: false,
    selected: false,
    onClick: noop,
    style: undefined,
    className: '',
  };

  static Group: typeof ButtonGroup = ButtonGroup;

  render() {
    const {
      children,
      className,
      style,
      onClick,
      nature = 'default',
      size = 'medium',
      ...props
    } = this.props;
    return (
      <ButtonElement
        className={cn('vital__button', className)}
        style={style}
        onClick={onClick}
        nature={nature}
        size={size}
        {...props}
      >
        {children}
      </ButtonElement>
    );
  }
}

export default Button;
