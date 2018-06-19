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

// import { Slider, Select, Button } from '@vital-ui/react';

const items = [
  {
    text: 'Dashboard',
    current: true,
  },
  { text: 'Projects', badge: '23' },
  { text: 'Issues', badge: '99+' },
  { text: 'Reports', badge: '6' },
  { text: 'User Center' },
];

// storiesOf('Components | Slider', module)
//   .addDecorator(withKnobs)
//   .add(
//     'Basic',
//     withInfo(`info`)(
//       withNotes('This is slider')(() => (
//         <Slider
//           size={select(
//             'size',
//             {
//               small: 'small',
//               medium: 'medium',
//               large: 'large',
//             },
//             'medium',
//           )}
//           disabled={boolean('disabled', false)}
//           hasButton={boolean('hasButton', false)}
//           value={0}
//           max={number('max', 100)}
//           min={number('min', 0)}
//           step={number('step', 10)}
//         />
//       )),
//     ),
//   )
//   .add(
//     'with Custom Button',
//     withInfo(`info`)(
//       withNotes('This is slider with button')(() => (
//         <Slider
//           value={50}
//           max={100}
//           min={0}
//           step={10}
//           decreaseButton={
//             <Button size="small" circle flat>
//               -
//             </Button>
//           }
//           increaseButton={
//             <Button size="small" circle flat>
//               +
//             </Button>
//           }
//         />
//       )),
//     ),
//   );
