import React from 'react';
import { ControllerStateAndHelpers } from 'downshift';

export const Context = React.createContext<
  ControllerStateAndHelpers<any>
  // @ts-ignore
>(undefined);
export const withContext = <T extends {}>(
  Component: React.ComponentType<T>,
  get: (n: any) => any = n => n,
) => (props: T) => (
  <Context.Consumer>
    {value => <Component {...get(value)} {...props} />}
  </Context.Consumer>
);
