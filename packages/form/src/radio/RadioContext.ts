import React from 'react';

interface RadioContextProps {
  disabled?: boolean;
  seletedValue?: any;
  name?: string;
  onChange?: (value: any) => void;
}

const Context = React.createContext<RadioContextProps>({});
export const RadioProvider = Context.Provider;
export const RadioConsumer = Context.Consumer;
