/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { injectGlobal } from 'styled-components';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { Welcome } from '@storybook/react/demo';

import { Button, Icon } from '@vital-ui/react';

storiesOf('Components | Button', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo('Buttons default style')(
      withNotes('This is note')(() => (
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
      )),
    ),
  )
  .add(
    'Flat',
    withInfo('Buttons Flat style')(
      withNotes('')(() => (
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
      )),
    ),
  )
  .add(
    'Light',
    withInfo('Button Light Style')(
      withNotes('')(() => (
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
      )),
    ),
  )
  .add(
    'Disable',
    withInfo('Buttons disable style')(
      withNotes('')(() => (
        <Button disabled={boolean('Disabled', true)}>
          {text('Label', 'Disable Button')}
        </Button>
      )),
    ),
  )
  .add(
    'Link',
    withInfo('Link style')(
      withNotes('')(() => (
        <Button
          link
          dark={boolean('Dark', false)}
          underline={boolean('Underline', false)}
        >
          {text('Label', 'Link Button')}
        </Button>
      )),
    ),
  )
  .add(
    'Subtle',
    withInfo('subtle style')(
      withNotes('')(() => (
        <Button subtle>{text('Label', 'Subtle Button')}</Button>
      )),
    ),
  )
  .add(
    'Circular style',
    withInfo('')(
      withNotes('')(() => (
        <Button circle={boolean('circle', true)}>
          <Icon name="plus" color="#3b5998" />
        </Button>
      )),
    ),
  )
  .add(
    'ButtonGroup',
    withInfo('Button Group')(
      withNotes('')(() => (
        <Button.Group>
          <Button>{text('Label', 'Button')}</Button>
          <Button>{text('Label', 'Button')}</Button>
          <Button>{text('Label', 'Button')}</Button>
        </Button.Group>
      )),
    ),
  );
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>); // storiesOf('Label', module) //   .addDecorator(withKnobs) //   .add( //     'Input Label', //     withInfo(`info`)( //       withNotes('This is label')(() => ( //         <Label>Hello {text('Label', 'Eric')}</Label> //       )), //     ), //   );
