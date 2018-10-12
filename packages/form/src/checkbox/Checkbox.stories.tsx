import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs/react';
import { Checkbox, CheckboxGroup } from '.';
import { Toggle } from '@vital-ui/react-utils';
import { Star } from '@vital-ui/react-icon';

storiesOf('Packages | Form/Checkbox', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Toggle initial={false}>
      {({ on, toggle }) => (
        <Checkbox
          onChange={toggle}
          checked={on}
          round={boolean('round', false)}
          disabled={boolean('disable', false)}
          label={text('Label', 'Label')}
        />
      )}
    </Toggle>
  ))
  .add('Custom Icon', () => (
    <Checkbox checked label="Custom Icon" icon={Star} />
  ))
  .add('CheckboxGroup', () => (
    <CheckboxGroup
      round={boolean('round', false)}
      disabled={boolean('disable', false)}
    >
      <Checkbox label={text('Label', 'Label')} />
      <Checkbox label={text('Label', 'Label')} />
      <Checkbox label={text('Label', 'Label')} />
    </CheckboxGroup>
  ));
