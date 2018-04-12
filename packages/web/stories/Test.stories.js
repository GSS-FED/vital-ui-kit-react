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
  select
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { ListGroup, ListItem } from '../src/List';

storiesOf('Test', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is ListGroup')(() => (
        <div style={{ padding: '20px' }}>
          <ListGroup
          // themed="dark"
          >
            <ListItem content="1" >
              <ListItem content="2">
                <ListItem content="3">
                  <ListItem content="4">
                    <ListItem content="5" />
                  </ListItem>
                  <ListItem content="4" />
                  <ListItem content="4" />
                </ListItem>
                <ListItem content="3" />
                <ListItem content="3" />
              </ListItem>
            </ListItem>
            <ListItem content="yoyo" />
          </ListGroup>
        </div>
      ))
    )
  );


// .add(
//   'Tree/ Accordion',
//   withInfo(`info`)(
//     withNotes('This is ListGroup')(() => (
//       <Display>
//         <ListGroup
//           items={itemsWithChildren}
//           themed={select('Themed', { light: 'light', dark: 'dark' })}
//         />
//       </Display>
//     )),
//   ),
// );
