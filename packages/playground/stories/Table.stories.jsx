/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */

import React, { Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { AutoSizer, SortDirection } from 'react-virtualized';
import faker from 'faker';
import {
  SimpleTable,
  Column,
  Table,
  defaultCellRenderer,
} from '../../web/src';
import { CheckBoxExample } from './examples/Checkbox.stories';

// Table data as an array of objects
const list = new Array(100).fill(true).map(() => ({
  name: faker.name.findName(),
  description: faker.name.jobTitle(),
  location: faker.address.city(),
}));

storiesOf('Table', module)
  .addDecorator(withKnobs)
  // .addDecorator(centered)
  .add(
    'AutoResize',
    withInfo()(() => (
      <div
        style={{
          width: '100%',
          height: '300px',
        }}
      >
        <AutoSizer>
          {({ width, height }) => (
            <SimpleTable
              hasVerticalBorder
              hasHorizontalBorder
              width={width}
              height={height}
              rowCount={list.length}
              rowGetter={({ index }) => list[index]}
            >
              <Column dataKey="name" label="Name" width={width / 3} />
              <Column
                dataKey="location"
                label="Location"
                width={width / 3}
              />
              <Column
                dataKey="description"
                label="Description"
                width={width / 3}
              />
            </SimpleTable>
          )}
        </AutoSizer>
      </div>
    )),
  )
  .add(
    'Fixed column',
    withInfo()(() => (
      <div
        style={{
          width: '500px',
          height: '400px',
        }}
      >
        <AutoSizer>
          {({ width, height }) => (
            <Table
              hasVerticalBorder
              hasHorizontalBorder
              width={width}
              height={height}
              rowCount={list.length}
              sort={sort}
              cellRenderer={defaultCellRenderer(list)}
            >
              <Column
                dataKey="checkbox"
                width={50}
                fixed
              />
              <Column dataKey="name" label="Name" width={200} fixed />
              <Column
                dataKey="location"
                label="Location"
                width={100}
              />
              <Column
                dataKey="description"
                label="Description"
                width={300}
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    )),
  );

function sort({ sortBy, sortDirection }) {
  console.log('====================================');
  console.log(sortBy, sortDirection);
  console.log('====================================');
}
