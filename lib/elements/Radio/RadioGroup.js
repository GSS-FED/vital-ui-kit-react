// @flow

import * as React from 'react';
import styled from 'styled-components';
import Radio from './Radio';

import type { Items } from './type';

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
