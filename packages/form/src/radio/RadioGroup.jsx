/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import Radio from './Radio';

const Root = styled.div``;

type Props = {
  items: Array<{
    name: string,
    value: string,
    label: string,
    defaultChecked?: boolean,
  }>,
  onRadioChange: () => void,
  isDisabled?: boolean,
  /** default: `vital__radio-group` */
  className?: string,
  style?: CSSStyleDeclaration,
};

/**
 * @render react
 * @name Radio
 * @description Group of radio buttons
 * @example
 * <RadioGroup items={[{name: 'color', value: 'red', label: 'Red'}, {name: 'color', value: 'blue', label: 'Blue', defaultChecked: true}, {name: 'color', value:'yello', label: 'Yellow'}]} />
 */
const RadioGroup = ({
  isDisabled,
  items,
  onRadioChange,
  style,
  className,
  ...props
}: Props) => (
  <Root style={style} className={cn('vital__radio-group', className)}>
    {items.map(item => (
      <Radio
        isDisabled={isDisabled}
        {...item}
        key={item.value}
        {...props}
        onChange={onRadioChange}
      />
    ))}
  </Root>
);

RadioGroup.defaultProps = {
  isDisabled: false,
  style: undefined,
  className: '',
};

export default RadioGroup;