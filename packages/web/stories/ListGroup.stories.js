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

import { ListGroup, ListContent, ListItem } from '../src';

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
            themed={select('themed', { light: 'light', dark: 'dark' })}
          >
            <ListItem title="Level 1" badge="99+" >
              <ListItem title="Level 2">
                <ListItem title="Level 3">
                  <ListItem title="Level 4">
                    <ListItem title="Level 5" />
                  </ListItem>
                  <ListItem title="Level 4" />
                  <ListItem title="Level 4" />
                </ListItem>
                <ListItem title="Level 3" />
                <ListItem title="Level3" />
              </ListItem>
            </ListItem>
          </ListGroup>
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
            themed={select('Themed', { light: 'light', dark: 'dark' })}
          />
        </Display>
      )),
    ),
  );
