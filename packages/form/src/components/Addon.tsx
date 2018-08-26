import * as React from 'react';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import styled from 'styled-components';

const Root = styled.div`
  padding: 0.46633rem 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  height: 1.93267rem;
  color: ${({ theme }) => theme.labelColor};
  text-align: center;
  background-color: ${({ theme }) => theme.form.addon.bg};
  border: ${({ theme }) => `1px solid ${theme.form.borderColor}`};
  border-radius: 4px;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  children?: React.ReactNode;
  className?: string;
  /** default: `vital__addon` */
  style?: React.CSSProperties;
};

const Addon: React.SFC<Props> = ({
  children,
  style,
  className,
}: Props) => (
  <Root style={style} className={cn('vital__addon', className)}>
    {children}
  </Root>
);

export default Addon;
