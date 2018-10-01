import React from 'react';

interface RadioContextProps {
  disabled?: boolean;
  seletedValue?: any;
  name?: string;
  onChange?: (value: any) => void;
}

export const RadioContext = React.createContext<RadioContextProps>(
  {},
);
