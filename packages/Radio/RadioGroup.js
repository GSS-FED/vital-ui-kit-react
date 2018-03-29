/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import Radio from './Radio';

import { Items } from './type';

const Root = styled.div``;

type Props = {
  items: Items,
  onRadioChange: () => void,
  isDisabled?: boolean,
};

const RadioGroup = ({ isDisabled, items, onRadioChange, ...props }: Props) => (
  <Root>
    {items.map(item => (
      <Radio isDisabled={isDisabled} {...item} key={item.value} {...props} onChange={onRadioChange} />
    ))}
  </Root>
);

export default RadioGroup;
