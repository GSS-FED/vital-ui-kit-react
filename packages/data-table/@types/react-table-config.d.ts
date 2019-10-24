import {
  UseColumnOrderInstanceProps,
  UseColumnOrderState,
  UseExpandedInstanceProps,
  UseExpandedOptions,
  UseExpandedRowProps,
  UseExpandedState,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseFiltersState,
  UseGroupByCellProps,
  UseGroupByColumnOptions,
  UseGroupByColumnProps,
  UseGroupByInstanceProps,
  UseGroupByOptions,
  UseGroupByRowProps,
  UseGroupByState,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseResizeColumnsColumnOptions,
  UseResizeColumnsHeaderProps,
  UseResizeColumnsOptions,
  UseRowSelectInstanceProps,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  UseRowSelectState,
  UseRowStateCellProps,
  UseRowStateInstanceProps,
  UseRowStateRowProps,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
  UseTableCellProps,
} from 'react-table';

declare module 'react-table' {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  export interface TableOptions<D extends object>
    extends UseExpandedOptions<D>,
      UseFiltersOptions<D>,
      UseGroupByOptions<D>,
      UsePaginationOptions<D>,
      UseRowSelectOptions<D>,
      UseSortByOptions<D>,
      UseFiltersOptions<D>,
      UseResizeColumnsOptions<D>,
      // note that having Record here allows you to add anything to the options, this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface TableInstance<D extends object = {}>
    extends UseColumnOrderInstanceProps<D>,
      UseExpandedInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseGroupByInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UseRowStateInstanceProps<D>,
      UseSortByInstanceProps<D> {
    getTableProps: (userProps?: any) => any;
    getTableBodyProps: (userProps?: any) => any;
    getRowProps: (userProps?: any) => any;
    prepareRow: (row: Row<D>) => any;
    getSelectRowToggleProps: (userProps?: any) => any;
    toggleSelectAll: (forcedState: boolean) => any;
  }

  export interface TableState<D extends object = {}>
    extends UseColumnOrderState<D>,
      UseExpandedState<D>,
      UseFiltersState<D>,
      UseGroupByState<D>,
      UsePaginationState<D>,
      UseRowSelectState<D>,
      UseSortByState<D> {}

  export interface Column<D extends object = {}>
    extends UseFiltersColumnOptions<D>,
      UseGroupByColumnOptions<D>,
      UseSortByColumnOptions<D>,
      UseResizeColumnsColumnOptions<D> {}

  export interface ColumnInstance<D extends object = {}>
    extends UseFiltersColumnProps<D>,
      UseGroupByColumnProps<D>,
      UseSortByColumnProps<D>,
      UseResizeColumnsHeaderProps<D> {
    Header: any;
  }

  export interface Cell<D extends object = {}>
    extends UseTableCellProps<D>,
      UseGroupByCellProps<D>,
      UseRowStateCellProps<D> {
    column: any;
  }

  export interface Row<D extends object = {}>
    extends UseExpandedRowProps<D>,
      UseGroupByRowProps<D>,
      UseRowSelectRowProps<D>,
      UseRowStateRowProps<D> {}
}

////

export interface UseColumnsValues<D> {
  columns: EnhancedColumn<D>[];
  headerGroups: HeaderGroup<D>[];
  headers: EnhancedColumn<D>[];
}

export interface EnhancedColumn<D, A extends keyof D = never>
  extends Column<D, A> {
  render: (type: string) => any;
  getHeaderProps: (userProps?: any) => any;
  getSortByToggleProps: (userProps?: any) => any;
  sorted: boolean;
  sortedDesc: boolean;
  sortedIndex: number;
}

export type HeaderGroup<D, A extends keyof D = never> = {
  headers: EnhancedColumn<D, A>[];
  getRowProps: (userProps?: any) => any;
  getHeaderGroupProps: (userProps?: any) => any;
};
