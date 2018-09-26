import styled from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

import baseStyle from '../components/FieldBase';
import { BoxProps } from '@vital-ui/react-utils';

export interface TextAreaProps extends BoxProps {
  alarm?: boolean;
  warning?: boolean;
  resize?: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  ${baseStyle};
  height: auto;
  ${props => !props.resize && 'resize: none'};
`;

TextArea.defaultProps = {
  alarm: false,
  rows: 3,
  resize: false,
  warning: false,
  theme: defaultTheme,
};
