import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';
import { Label } from './components/Label';

interface RootProps extends BoxProps {
  inline?: boolean;
}

const Root = styled<RootProps, 'div'>('div')`
  display: ${props => (props.inline ? 'table' : 'block')};
  margin-bottom: ${props => (props.inline ? '1.866rem' : '1.333rem')};
  position: relative;
  width: 100%;
  ${superBoxStyle};

  ${({ inline }) =>
    inline &&
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
        <Label
          ref={labelRef}
          required={required}
          align={align}
          {...labelProps}
        >
          {label}
        </Label>
        {children}
      </Root>
    );
  }
}
