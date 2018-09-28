import React from 'react';

interface RadioContextProps {
  disabled?: boolean;
  seletedValue?: string | number;
}

export const RadioContext = React.createContext<RadioContextProps>(
  {},
);
