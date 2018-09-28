/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import { Box, BoxProps } from '@vital-ui/react-utils';
import { RadioContext } from './RadioContext';

interface RadioGroupProps extends BoxProps {
  onChange?: (selectedValue: string | number) => void;
  disabled?: boolean;
  /** default: `vital__radio-group` */
  className?: string;
  style?: React.CSSProperties;
  selectedValue: string | number;
}

/**
 * @render react
 * @name Radio
 * @description Group of radio buttons
 * @example
 * <RadioGroup items={[{name: 'color', value: 'red', label: 'Red'}, {name: 'color', value: 'blue', label: 'Blue', defaultChecked: true}, {name: 'color', value:'yello', label: 'Yellow'}]} />
 */
class RadioGroup extends React.Component<RadioGroupProps> {
  static defaultProps = {
    onChange: () => {},
    disabled: false,
  };

  render() {
    const {
      disabled,
      onChange,
      style,
      className,
      ...props
    } = this.props;
    return (
      <Box
        style={style}
        className={cn('vital__radio-group', className)}
        {...props}
      >
        <RadioContext.Provider
          value={{
            disabled: this.props.disabled,
            seletedValue: this.props.selectedValue,
          }}
        >
          {this.props.children}
        </RadioContext.Provider>
      </Box>
    );
  }
}

export default RadioGroup;
