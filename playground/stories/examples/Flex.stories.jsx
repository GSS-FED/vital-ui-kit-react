/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Flex } from '@vital-ui/react';

storiesOf('utils | Flex', module).add(
  'Basic',
  withInfo(`Basic box div`)(() => (
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
