import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';
import styled from 'styled-components';

export const Addon = styled.div.attrs<BoxProps>(props => ({
  className: cn('vital__addon', props.className),
}))`
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
  ${superBoxStyle};
`;

Addon.defaultProps = {
  theme: defaultTheme,
};

export default Addon;
