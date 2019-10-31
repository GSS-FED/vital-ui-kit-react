import React from 'react';
import styled from 'styled-components';
import {
  useTable,
  usePagination,
  useSortBy,
  useExpanded,
  useRowSelect,
} from 'react-table';
import { Chevron } from './Chevron';
import { Sort } from './Sort';
import { Flex } from '../../utils/src/box/index';
interface PaginationButtonProps {
  disabled: boolean;
}
interface TableTdProps {
  center?: boolean;
}
interface TableHeadThProps {
  short?: boolean;
}
const DataTableWrapper = styled.div`
  text-align: center;
`;
const TableWrapper = styled.table`
  table-layout: fixed;
  border-spacing: 0;
  width: 100%;
  font-size: 14px;
`;

const TableTd = styled.td<TableTdProps>`
  margin: 0;
  padding: ${props => (props.center ? '8px 0' : '8px 24px')};
  font-weight: normal;
  color: #848494;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const TableHead = styled.thead`
  text-align: left;
  border-bottom: 2px solid #f0f0f2;
`;
const TableHeadTr = styled.tr`
  background: #fff;
`;

const TableHeadTh = styled.th<TableHeadThProps>`
  padding: 8px 24px;
  color: #000;
  font-weight: 300;
  width: ${props => (props.short ? '48px' : 'auto')};
`;
const TableBody = styled.tbody``;
const TableBodyTr = styled.tr`
  &:nth-child(even) {
    background: #fff;
    transition: all 0.3s;
    &:hover {
      background: #f0f0f2;
    }
  }
  &:nth-child(odd) {
    background-color: #f9f9fa;
    transition: all 0.3s;
    &:hover {
      background: #f0f0f2;
    }
  }
`;
const TablePagination = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 24px;
  background: #f9f9fa;
`;
const PaginationBtn = styled.div<PaginationButtonProps>`
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

const PaginationBtnGroup = styled.div`
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

const NextBtn = styled.div`
  width: 8px;
  line-height: 8px;
  margin-left: 4px;
  & svg {
    fill: #848492;
  }
`;
const PrevBtn = styled.div`
  width: 8px;
  line-height: 8px;
  transform: rotate(180deg);
  margin-right: 4px;
  & svg {
    fill: #848492;
  }
`;
const SortIconWrapper = styled.div`
  width: 8px;
  margin-right: 4px;
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
          {headerGroups.map(headerGroup => {
            let {
              key: trKey,
              ...HeaderGroupProps
            }: any = headerGroup.getHeaderGroupProps();
            return (
              <TableHeadTr key={trKey} {...HeaderGroupProps}>
                {headerGroup.headers.map(column => {
                  const isHeaderString =
                    typeof column.Header === 'string';
                  return (
                    <TableHeadTh
                      short={!isHeaderString}
                      {...(isSortBy
                        ? column.getHeaderProps(
                            column.getSortByToggleProps(),
                          )
                        : column.getHeaderProps())}
                      key={column.id}
                    >
                      <Flex
                        justifyContent={
                          isHeaderString ? 'flex-start' : 'center'
                        }
                      >
                        {isSortBy && isHeaderString && (
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
                        )}
                        {column.render('Header')}
                      </Flex>
                    </TableHeadTh>
                  );
                })}
              </TableHeadTr>
            );
          })}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {(isPagination ? page : rows).map(
            (row, i) =>
              prepareRow(row) || (
                <>
                  <TableBodyTr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      let {
                        key: tdKey,
                        ...cells
                      }: any = cell.getCellProps();
                      const isCenter = !(
                        typeof cell.column.Header === 'string'
                      );
                      return (
                        <TableTd
                          center={isCenter}
                          key={tdKey}
                          {...cells}
                        >
                          {!!cell.column.renderer
                            ? cell.column.renderer(cell.row.original)
                            : cell.render('Cell')}
                        </TableTd>
                      );
                    })}
                  </TableBodyTr>
                  {row.isExpanded ? (
                    <TableBodyTr>
                      <TableTd colSpan={flatColumns.length}>
                        {renderRowSubComponent({ row })}
                      </TableTd>
                    </TableBodyTr>
                  ) : null}
                </>
              ),
          )}
        </TableBody>
      </TableWrapper>
      {isPagination && (
        <TablePagination>
          <PaginationBtnGroup>
            <PaginationBtn
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              First
            </PaginationBtn>
            <PaginationBtn
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <PrevBtn>
                <Chevron />
              </PrevBtn>
              Prev
            </PaginationBtn>
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
            <PaginationBtn
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
              <NextBtn>
                <Chevron />
              </NextBtn>
            </PaginationBtn>
            <PaginationBtn
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              Last
            </PaginationBtn>
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
          </PaginationBtnGroup>
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
