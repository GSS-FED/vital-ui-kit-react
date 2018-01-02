import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Button, Label } from '../lib/';

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', withInfo(`info`)(withNotes('This is note')(() => <Button>{text('Label', 'Hello Button')}</Button>)))
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('Input Label', withInfo(`info`)(withNotes('This is label')(() => <Label>Hello {text('Label', 'Eric')}</Label>)))
