import React from 'react';
import {
  A11yStatusMessageOptions,
  ControllerStateAndHelpers,
  StateChangeOptions,
  DownshiftState,
  Environment,
} from 'downshift';

// override downshift types
export interface DownshiftProps<Item> {
  defaultSelectedItem?: Item;
  defaultHighlightedIndex?: number | null;
  defaultInputValue?: string;
  defaultIsOpen?: boolean;
  itemToString?: (item: Item) => string;
  selectedItemChanged?: (prevItem: Item, item: Item) => boolean;
  getA11yStatusMessage?: (
    options: A11yStatusMessageOptions<Item>,
  ) => string;
  onChange?: (
    selectedItem: Item,
    stateAndHelpers: ControllerStateAndHelpers<Item>,
  ) => void;
  onSelect?: (
    selectedItem: Item,
    stateAndHelpers: ControllerStateAndHelpers<Item>,
  ) => void;
  onStateChange?: (
    options: StateChangeOptions<Item>,
    stateAndHelpers: ControllerStateAndHelpers<Item>,
  ) => void;
  onInputValueChange?: (
    inputValue: string,
    stateAndHelpers: ControllerStateAndHelpers<Item>,
  ) => void;
  stateReducer?: (
    state: DownshiftState<Item>,
    changes: StateChangeOptions<Item>,
  ) => Partial<StateChangeOptions<Item>>;
  itemCount?: number;
  highlightedIndex?: number | null;
  inputValue?: string | null;
  isOpen?: boolean;
  selectedItem?: Item | null;
  children?: React.ReactNode; // overrided
  id?: string;
  environment?: Environment;
  onOuterClick?: (
    stateAndHelpers: ControllerStateAndHelpers<Item>,
  ) => void;
  onUserAction?: (
    options: StateChangeOptions<Item>,
    stateAndHelpers: ControllerStateAndHelpers<Item>,
  ) => void;
}
