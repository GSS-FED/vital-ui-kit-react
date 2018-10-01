import React from 'react';
import styled, { css, Interpolation } from 'styled-components';
import { superBoxStyle, BoxProps } from '@vital-ui/react-utils';

export const windowStyle = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: scroll;
  border-radius: 4px;
  ${superBoxStyle};
`;

export const defaultPopupStyle = css`
  color: #43434b;
  background-color: #ffffff;
  border-color: #dedee2;
  min-width: 100px;
  padding-top: 8px;
  margin-bottom: 8px;
  box-shadow: 0 6px 20px 0 rgba(99, 99, 111, 0.2);
`;

const Root = styled<RootProps, 'div'>('div')`
  ${({ popupStyle }) =>
    popupStyle ? popupStyle : defaultPopupStyle};
  ${windowStyle};
`;

interface RootProps {
  popupStyle?: Interpolation<any> | string;
}

interface Props extends BoxProps, RootProps {}

export class PopupContent extends React.Component<Props> {
  render() {
    return <Root {...this.props}>{this.props.children}</Root>;
  }
}
