// @flow

import * as React from 'react';

import { Checkbox } from '@vital-ui/react-form';

export type CheckboxRendererProps = {
  handleCheckboxChange: ({
    rowIndex: number,
    checked: boolean,
  }) => mixed,
  rowIndex: number,
  selectedIndex: number[],
};

export type CheckboxRenderer = (
  props: CheckboxRendererProps,
) => React$Element<any>;

const defaultCheckboxRenderer: CheckboxRenderer = ({
  handleCheckboxChange,
  rowIndex,
  selectedIndex,
}: CheckboxRendererProps) => {
  const checked = selectedIndex.indexOf(rowIndex) >= 0;
  return (
    <Checkbox
      onChange={() => handleCheckboxChange({ rowIndex, checked })}
      checked={checked}
    />
  );
};

export default defaultCheckboxRenderer;
