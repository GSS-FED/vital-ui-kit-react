import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';

import { Button, ButtonGroup } from '.';
import { Star } from '../../icon/src';

const StyledButton = styled(Button)`
  background: transparent;
  padding: 20px;
`;

storiesOf('Packages | Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button
      nature={select(
        'Nature',
        {
          default: 'default',
          primary: 'primary',
          success: 'success',
          info: 'info',
          alarm: 'alarm',
          warning: 'warning',
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
          default: 'default',
          primary: 'primary',
          success: 'success',
          info: 'info',
          alarm: 'alarm',
          warning: 'warning',
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
          default: 'default',
          primary: 'primary',
          success: 'success',
          info: 'info',
          alarm: 'alarm',
          warning: 'warning',
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
  ))
  .add('extends styles', () => (
    <StyledButton color="red" m="20px">
      StyledButton
    </StyledButton>
  ));
