import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';
import { Label } from './components/Label';

interface RootProps extends BoxProps {
  inline?: boolean;
}

const fieldInputItemStyle = css`
  display: block;
  margin-bottom: 1.333rem;
  position: relative;
`;

export const FieldInputItem = styled<BoxProps, 'div'>('div')`
  ${fieldInputItemStyle};
  ${superBoxStyle};
`;

const inlineFieldInputItemStyle = css`
  display: table;
  margin-bottom: 1.866rem;
  position: relative;

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
`;

export const InlineFieldInputItem = styled<BoxProps, 'div'>('div')`
  ${inlineFieldInputItemStyle};
  ${superBoxStyle};
`;

const Root = styled<RootProps, 'div'>('div')`
  ${({ inline }) =>
    inline ? inlineFieldInputItemStyle : fieldInputItemStyle};
  position: relative;
  width: 100%;
  ${superBoxStyle};
`;

export interface FieldInputProps extends BoxProps {
  label?: React.ReactNode;
  align?: 'left' | 'right';
  inline?: boolean;
  required?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labelProps?: any;
  ref?: React.Ref<any>;
  labelRef?: React.Ref<any>;
}

/**
 * @render react
 * @name FieldInput
 * @desc Couple with input and label
 * @example
 * <FieldInput inline required label="email">
 *   ...
 * </FieldInput>
 */
export class FieldInput extends React.Component<FieldInputProps> {
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
      ...props
    } = this.props;
    return (
      <Root
        style={style}
        className={cn('vital__fieldInput', className)}
        inline={inline}
        {...props}
      >
        {label && (
          <Label
            ref={labelRef}
            required={required}
            align={align}
            {...labelProps}
          >
            {label}
          </Label>
        )}
        {children}
      </Root>
    );
  }
}
