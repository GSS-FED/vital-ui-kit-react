// @flow

import React from 'react';

export const Context = React.createContext(undefined);
export const withContext = (Component, get = n => n) => props => (
  <Context.Consumer>
    {value => <Component {...get(value)} {...props} />}
  </Context.Consumer>
);
