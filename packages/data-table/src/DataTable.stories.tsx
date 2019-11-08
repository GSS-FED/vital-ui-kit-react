import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import DataTable from './DataTable';
import makeData from './makeData';
import { Caret } from './Caret';
import { Avatar } from '../../avatar';

storiesOf('Packages | DataTable', module)
  .addDecorator(withKnobs)
  .add('Basic DataTable', TableExample);

const AvatarWrapper = styled(Avatar)`
  margin-right: 8px;
  vertical-align: middle;
`;
const LeftCaret = styled.span`
  & svg {
    width: 8px;
    color: #848492;
    transform: rotate(90deg);
  }
`;

const DownCaret = styled.span`
  & svg {
    width: 8px;
    color: #848492;
    transform: rotate(180deg);
  }
`;
function TableExample() {
  const fakeData = makeData(0);
  const isExpanded = boolean('isExpanded', true);
  const isRowSelect = boolean('isRowSelect', true);
  const isSortBy = boolean('isSortBy', true);
  const isPagination = boolean('isPagination', true);
  const renderRowSubComponent = ({ row }) => (
    <div>
      <p>name: {row.values.name}</p>
      <p>age: {row.values.age}</p>
      <p>gender:{row.values.gender}</p>
      <p>address:{row.values.address}</p>
    </div>
  );
  const fakeColumns = [
    isExpanded
      ? {
          // Use Cell to render an expander for each row.
          // We can use the getExpandedToggleProps prop-getter
          // to build the expander.
          Header: () => null, // No header
          id: 'expander', // It needs an ID
          Cell: ({ row }) =>
            row.isExpanded ? (
              <DownCaret {...row.getExpandedToggleProps()}>
                <Caret />
              </DownCaret>
            ) : (
              <LeftCaret {...row.getExpandedToggleProps()}>
                <Caret />
              </LeftCaret>
            ),
        }
      : undefined,
    isRowSelect
      ? {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <input
              type="checkbox"
              {...getToggleAllRowsSelectedProps()}
            />
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <input
                type="checkbox"
                {...row.getToggleRowSelectedProps()}
              />
            </div>
          ),
        }
      : undefined,
    {
      Header: 'Name',
      accessor: 'name',
      renderer: original => {
        return (
          <>
            <AvatarWrapper
              size="small"
              circle={true}
              src={original.avatar}
            />
            {original.name}
          </>
        );
      },
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Tags',
      accessor: 'tags',
    },
    {
      Header: 'Random',
      accessor: 'random',
    },
  ].filter(x => x);
  return (
    <DataTable
      columns={fakeColumns}
      data={fakeData}
      renderRowSubComponent={renderRowSubComponent}
      isSortBy={isSortBy}
      isRowSelect={isRowSelect}
      isExpanded={isExpanded}
      isPagination={isPagination}
    />
  );
}
