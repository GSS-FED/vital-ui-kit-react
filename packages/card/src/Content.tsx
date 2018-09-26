import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';

const Root = styled<BoxProps, 'div'>('div')`
  position: relative;
  padding: 0.75rem 1.25rem;
  flex-grow: 1;
  color: ${({ theme }) => theme.card.color};
  font-size: 0.93333rem;
  overflow-x: hidden;
  ${superBoxStyle};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

interface CardContentProps extends BoxProps {
  /** Card Content */
  children: React.ReactNode;
  style?: React.CSSProperties;
  /** default is `vital__card-content` */
  className?: string;
}

const Content: React.SFC<CardContentProps> = ({
  children,
  style,
  className,
  ...props
}) => (
  <Root
    className={cn('vital__card-content', className)}
    style={style}
    {...props}
  >
    {children}
  </Root>
);

export default Content;
