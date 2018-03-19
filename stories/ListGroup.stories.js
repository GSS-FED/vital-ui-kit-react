/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

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
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { ListGroup } from '../packages/';

const items = [
  {
    content: 'Item 01',
    href: 'google.com',
  },
  {
    content: 'Item 02',
  },
  {
    content: 'Item 02',
    badge: '99+',
  },
  {
    content: 'Item 03',
    badge: '99+',
    href: 'google.com',
  },
];

const itemsWithChildren = [
  {
    content: 'Item 01',
    children: [
      {
        content: 'SubItem 01',
        badge: '99+',
        href: 'google.com',
      },
      {
        content: 'SubItem 01',
      },
    ],
  },
  {
    content: 'Item 02',
    children: [
      {
        content: 'SubItem 01',
        badge: '99+',
      },
    ],
  },
  {
    content: 'Item 03',
    children: [
      {
        content: 'SubItem 01',
        badge: '99+',
      },
    ],
  },
];

const itemsWithContent = [
  {
    content: 'Collapse 01',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    content: 'Collapse 02',
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
]

const Display = styled.div`
  padding: 20px;
`;

storiesOf('ListGroup', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is ListGroup')(() => (
        <Display>
          <ListGroup
            items={items}
            themed={select('Themed', { light: 'light', dark: 'dark' })}
          />
        </Display>
      )),
    ),
  )
  .add(
    'Tree/ Accordion',
    withInfo(`info`)(
      withNotes('This is ListGroup')(() => (
        <Display>
          <ListGroup
            items={itemsWithChildren}
            themed={select('Themed', { light: 'light', dark: 'dark' })}
          />
        </Display>
      )),
    ),
  );
