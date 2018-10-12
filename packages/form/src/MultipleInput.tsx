import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import Addon from './components/Addon';
import {
  superBoxStyle,
  BoxProps,
  isElement,
} from '@vital-ui/react-utils';

const Root = styled<BoxProps, 'div'>('div')`
  position: relative;
  display: table;
  width: 100%;
  border-collapse: separate;
  ${superBoxStyle};
`;

const noSpacetyle = css`
  > * {
    width: calc(100% + 2px);
  }

  &:not(:first-child) > * {
    margin-left: -1px;
    margin-right: 0;
  }

  &:last-child {
    * {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &:first-child {
    * {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  &:not(:first-child):not(:last-child) {
    * {
      border-radius: 0;
    }
  }
`;

type LabelCellProps = {
  paddingBetween?: number;
  addon?: boolean;
};

const LabelCell = styled<LabelCellProps, 'div'>('div')`
  display: table-cell;
  /* vertical-align: middle; */

  ${({ addon }: { addon?: boolean }) =>
    addon &&
    css`
      width: 1%;
      white-space: nowrap;
    `};

  ${({ paddingBetween }) =>
    paddingBetween
      ? css`
          :not(:last-child) {
            padding-right: ${paddingBetween}px;
          }
        `
      : noSpacetyle};
`;

export interface MulipleInputProps extends BoxProps {
  children: React.ReactNode[];
  style?: React.CSSProperties;
  className?: string;
  paddingBetween?: number;
}

/**
 * @render react
 * @name MultipleInput
 * @desc Group of multiple inputs
 * @example
 * <MultipleInput>
 *  <Addon>addon</Addon>
 *  ...
 * </MultipleInput>
 */
export class MultipleInput extends React.Component<
  MulipleInputProps
> {
  render() {
    const {
      style,
      className,
      children,
      paddingBetween,
      ...props
    } = this.props;
    return (
      <Root
        style={style}
        className={cn('vital__multipleInput', className)}
        {...props}
      >
        {children.map((child, i) => (
          <LabelCell
            paddingBetween={paddingBetween}
            addon={
              (child && isElement(child) && child.type) === Addon
            }
            key={`addon-${i}`}
          >
            {child}
          </LabelCell>
        ))}
      </Root>
    );
  }
}
