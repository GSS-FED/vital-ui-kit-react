/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Button,
  Avatar,
  Badge,
  Checkbox,
  Pill,
  Card,
  ImageBackground,
} from '../../src';
import CenterView from './CenterView';

storiesOf('Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => <Avatar shadow />);

storiesOf('Badge', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => <Badge label="Badge" />);

storiesOf('Checkbox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => <Checkbox />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')} active title="Button" />
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')} title="😀 😎 👍 💯" />
  ));
storiesOf('Pill', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => <Pill label="Text" />);
storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => (
    <Card width="90%" shadow style={{ marginBottom: 20 }}>
      <Card.Header title="My Forms" action={<Button title="All" />} />
      <Card.SideLabel color="blue" />
    </Card>
  ));
storiesOf('ImageBackground', module)
  .addDecorator(getStory => (
    <ImageBackground>
      <CenterView>{getStory()}</CenterView>
    </ImageBackground>
  ))
  .add('Basic', () => (
    <Card width="90%" shadow style={{ marginBottom: 20 }}>
      <Card.Header title="My Forms" action={<Button title="All" />} />
      <Card.SideLabel color="blue" />
    </Card>
  ));
