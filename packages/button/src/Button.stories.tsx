import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';

import {
  Button,
  ButtonGroup,
  FlatButton,
  SubtleButton,
  CircleButton,
  LightButton,
  LinkButton,
} from '.';
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
    <FlatButton
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
    </FlatButton>
  ))
  .add('Light', () => (
    <LightButton
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
    </LightButton>
  ))
  .add('Disable', () => (
    <Button disabled={boolean('Disabled', true)}>
      {text('Label', 'Disable Button')}
    </Button>
  ))
  .add('Link', () => (
    <LinkButton
      dark={boolean('Dark', false)}
      underline={boolean('Underline', false)}
    >
      {text('Label', 'Link Button')}
    </LinkButton>
  ))
  .add('Subtle', () => (
    <SubtleButton>{text('Label', 'Subtle Button')}</SubtleButton>
  ))
  .add('Circular style', () => (
    <CircleButton>
      <Star name="star" color="#3b5998" />
    </CircleButton>
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
