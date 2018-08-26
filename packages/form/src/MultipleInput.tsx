/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import Addon from './components/Addon';

const Root = styled.div`
  position: relative;
  display: table;
  width: 100%;
  border-collapse: separate;
`;

const LabelCell = styled.div`
  display: table-cell;
  vertical-align: middle;

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

  ${({ addon }: { addon?: boolean }) =>
    addon &&
    css`
      width: 1%;
      white-space: nowrap;
    `};
`;

type Props = {
  children: React.ReactNode[];
  style?: React.CSSProperties;
  className?: string;
};

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
class MultipleInput extends React.Component<Props> {
  render() {
    const { style, className, children } = this.props;
    return (
      <Root
        style={style}
        className={cn('vital__multipleInput', className)}
      >
        {children.map((child, i) => (
          <LabelCell
            // @ts-ignore TODO: find a better way to check
            addon={(child && child.type) === Addon}
            key={`addon-${i}`}
          >
            {child}
          </LabelCell>
        ))}
      </Root>
    );
  }
}

export default MultipleInput;