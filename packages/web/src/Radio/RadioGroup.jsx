/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import Radio from './Radio';

const Root = styled.div``;

type Props = {
  items: Array<{
    name: string,
    value: string,
    label: string,
    defaultChecked?: boolean
  }>,
  onRadioChange: () => void,
  isDisabled?: boolean
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
  ...props
}: Props) => (
  <Root>
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
  isDisabled: false
};

export default RadioGroup;
