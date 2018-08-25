import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import { Flex } from '../../packages/utils/src';

storiesOf('utils | Flex', module).add(
  'Basic',
  withInfo(`Basic Flex div`)(() => (
    <Flex
      alignItems="center"
      color="white"
      bg="#fedfed"
      height="300px"
      justifyContent="center"
    >
      Flexbox
    </Flex>
  )),
);
