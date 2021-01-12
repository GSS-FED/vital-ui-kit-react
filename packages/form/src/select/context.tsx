import React from 'react';
import { ControllerStateAndHelpers, DownshiftProps } from 'downshift';

const Context = React.createContext<
  ControllerStateAndHelpers<any> & DownshiftProps<any>
  // @ts-ignore
>(undefined);
export const SelectProvider = Context.Provider;
export const SelectConsumer = Context.Consumer;

export const withContext = <T extends {}>(
  Component: React.ComponentType<T>,
  get: (n: any) => any = (n) => n,
) => (props: T) => (
  <SelectConsumer>
    {(value) => <Component {...get(value)} {...props} />}
  </SelectConsumer>
);
