import React from 'react';

export const Context = React.createContext<any>(undefined);
export const withContext = (
  Component: React.ComponentType<any>,
  get: (n: any) => any = n => n,
) => (props: any) => (
  <Context.Consumer>
    {value => <Component {...get(value)} {...props} />}
  </Context.Consumer>
);
