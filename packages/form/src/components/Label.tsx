import * as React from 'react';
import cn from 'classnames';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';
import { defaultTheme } from '@vital-ui/react-theme';
import styled, { css } from 'styled-components';

export interface LabelProps extends BoxProps {
  /** is required? */
  required?: boolean;
  /** label display inline */
  inline?: boolean;
  /** align `left` or `right` */
  align?: 'left' | 'right';
  /** default: `vital__label` */
  className?: string;
  style?: React.CSSProperties;
}

export const Label = styled.span.attrs<LabelProps>(props => ({
  className: cn('vital__label', props.className),
}))`
  position: relative;
  font-size: 0.866rem;
  color: ${({ theme }) => theme.labelColor};
  line-height: 1.8;
  display: inline-block;
  text-align: ${props => props.align};

  ${({ required, theme }) =>
    required &&
    css`
      :before {
        content: '';
        display: inline-block;
        background-color: ${theme.colors.alarm};
        margin: -0.133rem 0.533rem 0 0;
        vertical-align: middle;
        height: 0.266rem;
        width: 0.266rem;
        border-radius: 50%;
        position: absolute;
        left: -0.666rem;
        top: 0.666rem;
      }
    `};

  ${props =>
    props.inline &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 1%;
      min-width: 8rem;
      padding-right: 1.2rem;
      line-height: 1;
      vertical-align: top;
      padding-top: calc(0.46633rem + 2px);
    `};

  ${superBoxStyle};
`;

Label.defaultProps = {
  theme: defaultTheme,
  required: false,
  align: 'left',
  inline: false,
};
