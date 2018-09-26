import React from 'react';
import styled, { css } from 'styled-components';
import {
  width,
  height,
  maxHeight,
  maxWidth,
  WidthProps,
  HeightProps,
  MaxHeightProps,
  MaxWidthProps,
  space,
  SpaceProps,
} from 'styled-system';

export const windowStyle = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: scroll;
  border-radius: 4px;
  ${width};
  ${maxWidth};
  ${height};
  ${maxHeight};
  ${space};
`;

export const popupStyle = css`
  color: #43434b;
  background-color: #ffffff;
  border-color: #dedee2;
  min-width: 100px;
  padding-top: 8px;
  margin-bottom: 8px;
  box-shadow: 0 6px 20px 0 rgba(99, 99, 111, 0.2);
`;

const Root = styled.div`
  ${popupStyle};
  ${windowStyle};
`;

interface Props
  extends WidthProps,
    HeightProps,
    MaxWidthProps,
    MaxHeightProps,
    SpaceProps {}

export class PopupContent extends React.Component<Props> {
  render() {
    return <Root {...this.props}>{this.props.children}</Root>;
  }
}
