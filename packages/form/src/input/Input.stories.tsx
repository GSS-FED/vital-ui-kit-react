import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';
import { Input } from '.';
import { FieldInput } from '../FieldInput';
import { Pen, Share } from '@vital-ui/react-icon';

storiesOf('Packages | Form/Input', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <FieldInput
      required={boolean('Required 1', true)}
      align={select('Align', {
        left: 'Left',
        right: 'Right',
      })}
      label="Username"
      inline={boolean('Inline', false)}
    >
      <Input
        placeholder={text('Placeholder 1', 'Enter your username')}
      />
    </FieldInput>
  ))
  .add('With Icon', () => (
    <>
      <Input placeholder="Right side icon" rightIcon={<Pen />} />
      <br />
      <Input placeholder="Left side icon" leftIcon={<Share />} />
    </>
  ));
