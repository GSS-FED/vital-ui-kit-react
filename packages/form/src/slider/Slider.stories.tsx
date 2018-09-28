import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Slider } from '.';
import { Button } from '@vital-ui/react-button';

storiesOf('Packages | Form/Slider', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(``)(
      withNotes('')(() => (
        <Slider
          size={select(
            'size',
            {
              small: 'small',
              medium: 'medium',
              large: 'large',
            },
            'medium',
          )}
          disabled={boolean('disabled', false)}
          hasButton={boolean('hasButton', false)}
          value={0}
          max={number('max', 100)}
          min={number('min', 0)}
          step={number('step', 10)}
        />
      )),
    ),
  )
  .add(
    'with Custom Button',
    withInfo(`info`)(
      withNotes('Slider with Custom Button')(() => (
        <Slider
          value={50}
          max={100}
          min={0}
          step={10}
          decreaseButton={
            <Button size="small" circle flat>
              -
            </Button>
          }
          increaseButton={
            <Button size="small" circle flat>
              +
            </Button>
          }
        />
      )),
    ),
  );
