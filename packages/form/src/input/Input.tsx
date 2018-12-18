import styled from 'styled-components';
import { BoxProps, superBoxStyle } from '@vital-ui/react-utils';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import fieldBase from '../components/FieldBase';

interface InputElementProps extends BoxProps {
  /** Alarm state */
  alarm?: boolean;
  /** Warning State */
  warning?: boolean;
  /** Left Icon name, or Icon component */
  leftIcon?: any;
  /** Right Icon name, or Icon component */
  rightIcon?: any;
}

export const Input = styled.input.attrs(props => ({
  className: cn('vital__input', props.className),
}))<InputElementProps>`
  ${fieldBase};
  ${superBoxStyle};
`;

Input.defaultProps = {
  theme: defaultTheme,
};
