import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';

import Label from './components/Label';

const Root = styled.div<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'table' : 'block')};
  margin-bottom: ${props => (props.inline ? '1.866rem' : '1.333rem')};
  position: relative;
  width: 100%;

  ${props =>
    props.inline &&
    css`
      > span {
        display: table-cell;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 1%;
        min-width: 8rem;
        padding-right: 1.2rem;
        line-height: 1;
        vertical-align: top;
        padding-top: calc(0.46633rem + 2px);
      }
    `};
`;

type FieldInputProps = {
  label?: React.ReactNode;
  align?: 'left' | 'right';
  inline?: boolean;
  required?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labelProps?: any;
  containerProps?: any;
  ref?: React.Ref<any>;
  labelRef?: React.Ref<any>;
};

/**
 * @render react
 * @name FieldInput
 * @desc Couple with input and label
 * @example
 * <FieldInput inline required label="email">
 *   ...
 * </FieldInput>
 */
class FieldInput extends React.Component<FieldInputProps> {
  static defaultProps = {
    inline: false,
    required: false,
    labelProps: undefined,
    containerProps: undefined,
  };

  render() {
    const {
      label,
      align,
      inline,
      required,
      children,
      style,
      className,
      labelProps,
      ref,
      labelRef,
      containerProps,
    } = this.props;
    return (
      <Root
        style={style}
        className={cn('vital__fieldInput', className)}
        inline={inline}
        innerRef={ref}
        {...containerProps}
      >
        <Label
          innerRef={labelRef}
          text={label}
          required={required}
          align={align}
          {...labelProps}
        />
        {children}
      </Root>
    );
  }
}

export default FieldInput;
