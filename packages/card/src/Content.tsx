import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

const Root = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  flex-grow: 1;
  color: ${({ theme }) => theme.card.color};
  font-size: 0.93333rem;
  overflow-x: hidden;
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  /** Card Content */
  children: React.ReactNode;
  style?: React.CSSProperties;
  /** default is `vital__card-content` */
  className?: string;
};

const Content = ({ children, style, className, ...props }: Props) => (
  <Root
    className={cn('vital__card-content', className)}
    style={style}
    {...props}
  >
    {children}
  </Root>
);

export default Content;
