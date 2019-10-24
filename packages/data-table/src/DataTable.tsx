import React from 'react';
import styled from 'styled-components';
import {
  useTable,
  usePagination,
  useSortBy,
  useExpanded,
  useRowSelect,
} from 'react-table';
import { Avatar } from '../../avatar';
import { Chevron } from './Chevron';
import { Sort } from './Sort';

interface PaginationButtonProps {
  disabled: boolean;
}

const DataTableWrapper = styled.div`
  text-align: center;
`;
const TableWrapper = styled.table`
  border-spacing: 0;
  width: 100%;
  font-size: 14px;
  th,
  td {
    margin: 0;
    padding: 8px 24px;
    font-weight: normal;
    color: #848494;
    text-align: left;
  }
`;
const TableHead = styled.thead`
  text-align: left;
  border-bottom: 2px solid #f0f0f2;
  & tr {
    background: #fff;
  }
  & th {
    padding: 8px 24px;
    color: #000;
    font-weight: 300;
  }
`;
const TableBody = styled.tbody`
  tr:nth-child(even) {
    background: #fff;
    transition: all 0.3s;
    &:hover {
      background: #f0f0f2;
    }
  }
  tr:nth-child(odd) {
    background-color: #f9f9fa;
    transition: all 0.3s;
    &:hover {
      background: #f0f0f2;
    }
  }
`;
const AvatarWrapper = styled(Avatar)`
  margin-right: 8px;
  vertical-align: middle;
`;

const TablePagination = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 24px;
  background: #f9f9fa;
`;
const PaginationButton = styled.div<PaginationButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: ${props => (props.disabled ? '.3' : '1')};
  color: #848492;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  transition: all 0.3s;
  margin-right: 8px;
  min-width: 24px;
  border-radius: 12px;
  padding: 4px 8px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background: #f0f0f2;
  }
`;
const PaginationInputWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #848492;
  padding: 4px 8px;
`;

interface PaginationInputProps {
  type: string;
  defaultValue?: any;
  onChange: (e: any) => void;
}

const PaginationInput = styled.input<PaginationInputProps>`
  max-width: 56px;
  margin-left: 8px;
  padding: 4px;
  text-align: center;
`;

const PaginationButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;
const PageBtnGroup = styled.ul`
  display: flex;
  align-items: center;
`;

interface PageBtnProps {
  current?: boolean;
  onClick: () => void;
}

const PageBtn = styled.li<PageBtnProps>`
  cursor: pointer;
  color: ${props => (props.current ? '#FFF' : '#848492')};
  background: ${props => (props.current ? '#848492' : 'none')};
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  padding: 0 4px;
  transition: all 0.3s;
  margin-right: 4px;
  &:last-child {
    margin-right: 8px;
  }
  &:hover {
    background: ${props => (props.current ? '#848492' : '#f0f0f2')};
  }
`;

interface IconProps {
  left?: boolean;
}
// TODO: name
const Icon = styled.div<IconProps>`
  width: 8px;
  line-height: 8px;
  transform: ${props => (props.left ? 'rotate(180deg)' : 'none')};
  margin-right: ${props => (props.left ? '4px' : '0')};
  margin-left: ${props => (props.left ? '0' : '4px')};
  & svg {
    fill: #848492;
  }
`;
const SortIconWrapper = styled.div`
  width: 8px;
  margin-right: 4px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export default function DataTable({
  columns,
  data,
  renderRowSubComponent,
  isSortBy,
  isRowSelect,
  isExpanded,
  isPagination,
  ...props
}: any) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    flatColumns,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize /* expanded */ },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    useRowSelect,
    useExpanded,
    usePagination,
  );

  return (
    <DataTableWrapper>
      <TableWrapper {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            // 沒寫 key，因為 key 在 headerGroup.getHeaderGroupProps() 裡，故 disable tslint
            // tslint:disable-next-line
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                return (
                  <th
                    {...(isSortBy
                      ? column.getHeaderProps(
                          column.getSortByToggleProps(),
                        )
                      : column.getHeaderProps())}
                    key={column.id}
                  >
                    <Flex>
                      {isSortBy &&
                      typeof column.Header === 'string' ? (
                        <SortIconWrapper>
                          <Sort
                            iconType={
                              column.isSorted
                                ? column.isSortedDesc
                                  ? 'desc'
                                  : 'asc'
                                : 'init'
                            }
                          />
                        </SortIconWrapper>
                      ) : (
                        ''
                      )}
                      {column.render('Header')}
                    </Flex>
                  </th>
                );
              })}
            </tr>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {(isPagination ? page : rows).map(
            (row, i) =>
              prepareRow(row) || (
                <>
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        // 沒寫 key，因為 key 在 cell.getCellProps() 裡，故 disable tslint
                        // tslint:disable-next-line
                        <td {...cell.getCellProps()}>
                          {cell.column.Header === 'Name' && (
                            <AvatarWrapper
                              size="small"
                              circle={true}
                              src="http://placebeard.it/16x16"
                            />
                          )}
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                  {row.isExpanded ? (
                    <tr>
                      <td colSpan={flatColumns.length}>
                        {renderRowSubComponent({ row })}
                      </td>
                    </tr>
                  ) : null}
                </>
              ),
          )}
        </TableBody>
      </TableWrapper>
      {isPagination && (
        <TablePagination>
          <PaginationButtonGroup>
            <PaginationButton
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              First
            </PaginationButton>
            <PaginationButton
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <Icon left>
                <Chevron />
              </Icon>
              Prev
            </PaginationButton>
            <PageBtnGroup>
              {pageIndex >= 3 && (
                <PageBtn
                  onClick={() =>
                    gotoPage(pageIndex - 5 < 1 ? 0 : pageIndex - 5)
                  }
                >
                  ...
                </PageBtn>
              )}
              {pageOptions
                .filter(
                  page =>
                    (page <= pageIndex + 2 &&
                      page >= pageIndex - 2) ||
                    // 往後補足五頁
                    (pageIndex <= 2 && page <= 4) ||
                    // 往前補足五頁
                    (pageIndex >= pageOptions.length - 3 &&
                      page >= pageOptions.length - 5),
                )
                .map(page => (
                  <PageBtn
                    key={page}
                    current={page === pageIndex}
                    onClick={() => gotoPage(page)}
                  >
                    {page + 1}
                  </PageBtn>
                ))}
              {pageIndex <= pageOptions.length - 4 && (
                <PageBtn
                  onClick={() =>
                    gotoPage(
                      pageIndex + 5 > pageOptions.length
                        ? pageCount - 1
                        : pageIndex + 5,
                    )
                  }
                >
                  ...
                </PageBtn>
              )}
            </PageBtnGroup>
            <PaginationButton
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
              <Icon>
                <Chevron />
              </Icon>
            </PaginationButton>
            <PaginationButton
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              Last
            </PaginationButton>
            <PaginationInputWrapper>
              Goto
              <PaginationInput
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(page);
                }}
              />
            </PaginationInputWrapper>
          </PaginationButtonGroup>
          <div>
            {/* <span>
              Page
              <strong>
              {pageIndex + 1} of {pageOptions.length}
              </strong>
              </span> */}
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 30, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span>per page</span>
          </div>
        </TablePagination>
      )}
    </DataTableWrapper>
  );
}
