import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';

import { Button, ButtonGroup } from '.';
import { Star } from '../../icon/src';

storiesOf('Packages | Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button
      nature={select(
        'Nature',
        {
          default: 'Default',
          primary: 'Primary',
          success: 'Success',
          info: 'Info',
          alarm: 'Alarm',
          warning: 'Warning',
        },
        'default',
      )}
      size={select(
        'Size',
        {
          xsmall: 'xsmall',
          small: 'small',
          medium: 'medium',
          large: 'large',
          xlarge: 'xlarge',
        },
        'medium',
      )}
    >
      {text('Label', 'Default Button')}
    </Button>
  ))
  .add('Flat', () => (
    <Button
      flat={boolean('flat', true)}
      nature={select(
        'Nature',
        {
          default: 'Default',
          primary: 'Primary',
          success: 'Success',
          info: 'Info',
          alarm: 'Alarm',
          warning: 'Warning',
        },
        'default',
      )}
    >
      {text('Label', 'Flat Button')}
    </Button>
  ))
  .add('Light', () => (
    <Button
      light={boolean('Light', true)}
      nature={select(
        'Nature',
        {
          default: 'Default',
          primary: 'Primary',
          success: 'Success',
          info: 'Info',
          alarm: 'Alarm',
          warning: 'Warning',
        },
        'default',
      )}
    >
      {text('Label', 'Light Button')}
    </Button>
  ))
  .add('Disable', () => (
    <Button disabled={boolean('Disabled', true)}>
      {text('Label', 'Disable Button')}
    </Button>
  ))
  .add('Link', () => (
    <Button
      link
      dark={boolean('Dark', false)}
      underline={boolean('Underline', false)}
    >
      {text('Label', 'Link Button')}
    </Button>
  ))
  .add('Subtle', () => (
    <Button subtle>{text('Label', 'Subtle Button')}</Button>
  ))
  .add('Circular style', () => (
    <Button circle={boolean('circle', true)}>
      <Star name="star" color="#3b5998" />
    </Button>
  ))
  .add('ButtonGroup', () => (
    <ButtonGroup>
      <Button>{text('Label', 'Button')}</Button>
      <Button>{text('Label', 'Button')}</Button>
      <Button>{text('Label', 'Button')}</Button>
    </ButtonGroup>
  ));
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>); // storiesOf('Label', module) //   .addDecorator(withKnobs) //   .add( //     'Input Label', //     withInfo(`info`)( //       withNotes('This is label')(() => ( //         <Label>Hello {text('Label', 'Eric')}</Label> //       )), //     ), //   );
