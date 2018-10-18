/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import { Box, BoxProps } from '@vital-ui/react-utils';
import { RadioContext } from './RadioContext';

export interface RadioGroupProps<T> extends BoxProps {
  onChange?: (selectedValue: T | string | number) => void;
  disabled?: boolean;
  /** default: `vital__radio-group` */
  className?: string;
  style?: React.CSSProperties;
  selectedValue?: T | string | number;
  name?: string;
}

/**
 * @render react
 * @name Radio
 * @description Group of radio buttons
 * @example
 * <RadioGroup name="color" selectedValue={value} onChange={set}>
 *        <Radio label="red" value="red" />
 *        <Radio label="blue" value="blue" />
 *        <Radio label="yellow" value="yellow" />
 *      </RadioGroup>
 */
export class RadioGroup<T> extends React.Component<
  RadioGroupProps<T>
> {
  static defaultProps = {
    onChange: () => {},
    disabled: false,
  };

  handleChange = value => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const {
      disabled,
      onChange,
      style,
      className,
      name,
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
            name: name,
            disabled: this.props.disabled,
            seletedValue: this.props.selectedValue,
            onChange: this.handleChange,
          }}
        >
          {this.props.children}
        </RadioContext.Provider>
      </Box>
    );
  }
}
