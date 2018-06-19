/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import { withTheme } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import ButtonGroup from './ButtonGroup';
import ButtonElement from './styled';

type Nature =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'alarm'
  | 'warning';

type Size = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

type Props = {
  /** Vital_Button */
  className?: string,
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
  /** Circle button */
  circle?: boolean,
  /** Selected state */
  selected?: boolean,
  style?: CSSStyleDeclaration,
};

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

class Button extends React.Component<Props> {
  static defaultProps = {
    children: '',
    nature: 'default',
    theme: defaultTheme,
    size: 'medium',
    circle: false,
    light: false,
    flat: false,
    link: false,
    subtle: false,
    selected: false,
    onClick: () => {},
    style: undefined,
    className: '',
  };

  static Group = ButtonGroup;

  render() {
    const {
      children,
      className,
      style,
      onClick,
      ...props
    } = this.props;
    return (
      <ButtonElement
        className={cn('Vital_Button', className)}
        style={style}
        onClick={onClick}
        {...props}
      >
        {children}
      </ButtonElement>
    );
  }
}

// $FlowFixMe https://github.com/styled-components/styled-components/issues/1785
export default withTheme(Button);
