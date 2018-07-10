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

import { Box } from '@vital-ui/react';

const ColorBox = styled(Box)`
  background-clip: content-box, padding-box;
  background-image: linear-gradient(
      to bottom,
      rgba(240, 255, 40, 1) 0%,
      rgba(240, 255, 40, 1) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(240, 40, 40, 1) 0%,
      rgba(240, 40, 40, 1) 100%
    );
`;

storiesOf('utils | Box', module).add(
  'Basic',
  withInfo(`Basic box div`)(() => (
    <ColorBox padding="20px" width="100px">
      This is a box!
    </ColorBox>
  )),
);
