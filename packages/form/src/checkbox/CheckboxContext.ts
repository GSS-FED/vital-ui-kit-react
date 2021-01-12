import React from 'react';
import { CheckboxProps } from './Checkbox';

export interface CheckboxContextProps {
  icon?: CheckboxProps['icon'];
  round?: CheckboxProps['round'];
  disabled?: CheckboxProps['disabled'];
}

const Context = React.createContext<CheckboxContextProps>({});
export const CheckboxProvider = Context.Provider;
export const CheckboxConsumer = Context.Consumer;
