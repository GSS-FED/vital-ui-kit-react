/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

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
import faker from 'faker';
import { Table, Column } from '../../table/src';
import { AutoSizer } from 'react-virtualized';

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
    'Basic',
    withInfo()(() => (
      <div>
        <Table
          hasHorizontalBorder
          headerHeight={20}
          width={500}
          height={300}
          rowCount={list.length}
          rowGetter={({ index }) => list[index]}
        >
          <Column dataKey="name" label="Name" width={500 / 3} />
          <Column
            dataKey="location"
            label="Location"
            width={500 / 3}
          />
          <Column
            dataKey="description"
            label="Description"
            width={500 / 3}
          />
        </Table>
      </div>
    )),
  )
  .add(
    'AutoResize',
    withInfo()(() => (
      <AutoSizer>
        {({ width, height }) => {
          console.log(height, width)
          return (
          <Table
            hasHorizontalBorder
            headerHeight={20}
            width={width}
            height={height}
            rowCount={list.length}
            rowHeight={30}
            rowGetter={({ index }) => list[index]}
          >
          <Column dataKey="name" label="Name" width={500 / 3} />
          <Column
            dataKey="location"
            label="Location"
            width={500 / 3}
          />
          <Column
            dataKey="description"
            label="Description"
            width={500 / 3}
          />
          </Table>
        )}}
      </AutoSizer>
    )),
  );
