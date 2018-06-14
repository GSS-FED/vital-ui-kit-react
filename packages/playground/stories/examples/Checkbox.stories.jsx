/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */

import React from 'react';
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

import { Checkbox, CheckboxGroup } from '../../../web/src';

export class CheckBoxExample extends React.Component {
  state = {
    checked: false,
  };

  handleChange = e => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  };

  render() {
    const { label, isRound, isDisabled } = this.props;
    return (
      <Checkbox
        isRound={isRound}
        isDisabled={isDisabled}
        checked={this.state.checked}
        label={label}
        onChange={this.handleChange}
      />
    );
  }
}

storiesOf('Components | Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'Checkbox',
    withInfo()(
      withNotes('This is checkbox')(() => (
        <CheckBoxExample
          isRound={boolean('Round', false)}
          isDisabled={boolean('Disable', false)}
          label={text('Label', 'Label')}
        />
      )),
    ),
  )
  .add(
    'CheckboxGroup',
    withInfo(`info`)(
      withNotes('This is checkboxgroup')(() => (
        <CheckboxGroup>
          <CheckBoxExample
            isRound={boolean('Round', false)}
            isDisabled={boolean('Disable', false)}
            label={text('Label', 'Label')}
          />
          <CheckBoxExample
            isRound={boolean('Round', false)}
            isDisabled={boolean('Disable', false)}
            label={text('Label', 'Label')}
          />
          <CheckBoxExample
            isRound={boolean('Round', false)}
            isDisabled={boolean('Disable', false)}
            label={text('Label', 'Label')}
          />
        </CheckboxGroup>
      )),
    ),
  );
