// @flow

import cn from 'classnames';
import * as React from 'react';
import SortDirection from './SortDirection';

type Props = {
  sortDirection: SortDirection.ASC | SortDirection.DESC
}

/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
export default function SortIndicator({ sortDirection }: Props) {
  const classNames = cn(
    'ReactVirtualized__Table__sortableHeaderIcon',
    {
      'ReactVirtualized__Table__sortableHeaderIcon--ASC':
        sortDirection === SortDirection.ASC,
      'ReactVirtualized__Table__sortableHeaderIcon--DESC':
        sortDirection === SortDirection.DESC,
    },
  );

  return (
    <svg
      className={classNames}
      width={18}
      height={18}
      viewBox="0 0 24 24"
    >
      {sortDirection === SortDirection.ASC ? (
        <path d="M7 14l5-5 5 5z" />
      ) : (
        <path d="M7 10l5 5 5-5z" />
      )}
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

SortIndicator.defaultProps = SortDirection.ASC;

