import React from 'react';
import { CheckboxProps } from './Checkbox';

export interface CheckboxContextProps {
  icon?: CheckboxProps['icon'];
  round?: CheckboxProps['round'];
  disabled?: CheckboxProps['disabled'];
}
export const CheckboxContext = React.createContext<
  CheckboxContextProps
>({});
