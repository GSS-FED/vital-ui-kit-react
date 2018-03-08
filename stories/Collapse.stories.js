/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Collapse } from '../lib/';

const Display = styled.div`
  padding: 20px;
`;

const itemsWithContent = [
  {
    content: 'Collapse 01',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    content: 'Collapse 02',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    content: 'Collapse 02',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    content: 'Collapse 02',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    content: 'Collapse 02',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    content: 'Collapse 02',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }
];

const CustomListWrapper = styled(Collapse.ListItemWrapper)`
  background-color: ${props => props.item.open ? '#456297' : '#fff'};
  color: ${props => props.item.open ? '#fff' : '#456297'};
  margin-bottom: 10px;
`;

storiesOf('Collapse', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is Collapse')(() => (
        <Collapse
          themed={select('themed', { light: 'light', dark: 'dark' })}
          items={itemsWithContent}
          border={boolean('border', false)}
        />
      ))
    )
  )
  .add(
    'Custom Element',
    withInfo(`info`)(
      withNotes('This is Collapse')(() => (
        <Collapse
          themed={select('themed', { light: 'light', dark: 'dark' })}
          items={itemsWithContent}
          border={boolean('border', false)}
          renderListWrapper={props => <CustomListWrapper {...props} />}
        />
      ))
    )
  );
