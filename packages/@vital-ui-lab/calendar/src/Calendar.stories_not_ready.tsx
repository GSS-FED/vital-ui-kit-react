import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  date,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Calendar } from './Calendar';

const TODAY = new Date();
const YESTERDAY = new Date(+TODAY - 24 * 60 * 60 * 1000);
const TOMORROW = new Date(+TODAY + 24 * 60 * 60 * 1000);
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const YEARS = [2016, 2017, 2018, 2019];

/**
 * custom date knob that returns Date() object
 *
 * @returns {Date}
 */
function dateKnob(...args: any) {
  return new Date(date(...args));
}

storiesOf('Components | Calendar', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo()(() => (
      <Calendar
        assignedMonth={select('assignedMonth', MONTHS, 1)}
        assignedYear={select('assignedYear', YEARS, 2018)}
        selectedDateRange={{
          from: dateKnob('availableDate.from', YESTERDAY),
          to: dateKnob('availableDate.to', TOMORROW),
        }}
        onDateSelect={action('onDateSelect')}
      />
    )),
  );
