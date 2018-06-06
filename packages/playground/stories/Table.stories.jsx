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
import { Table, Column } from '@gssfed/react-table';

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
    withInfo(`info
    `)(
      withNotes('Theming with Vital UI Kit components')(() => (
        <div>
          <Table
            width={500}
            headerHeight={20}
            height={300}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            <Column
              headerRenderer={headerRenderer}
              dataKey="name"
              label="Name"
              width={133}
              cellDataGetter={({ rowData }) => rowData.index}
              cellRenderer={({cellData}) => cellData}
            />
            <Column
              headerRenderer={headerRenderer}
              dataKey="location"
              label="Location"
              width={133}
              cellDataGetter={({ rowData }) => rowData.index}
              cellRenderer={({cellData}) => cellData}
            />
            <Column
              headerRenderer={headerRenderer}
              dataKey="description"
              label="Description"
              width={133}
              cellDataGetter={({ rowData }) => rowData.index}
              cellRenderer={({cellData}) => cellData}
            />
          </Table>
        </div>
      )),
    ),
  );

function headerRenderer({
  columnData,
  dataKey,
  disableSort,
  label,
  sortBy,
  sortDirection,
}) {
  return <div>{label}</div>;
}
