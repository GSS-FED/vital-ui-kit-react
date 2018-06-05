// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from 'styled-components/native';
import { rgba } from 'polished';

import CardSideLabel from './CardSideLabel';
import CardHeader from './CardHeader';

const Root = styled.View`
  border-radius: 5;
  background-color: ${props => props.bg || '#fff'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props =>
    props.shadow &&
    `
    box-shadow: 0 13px 29px ${
      props.bg ? rgba(props.bg, 0.5) : 'rgba(64, 63, 81, 0.4)'
    }
  `};
`;

export type Props = {
  children: React.ReactNode,
  width?: string | number,
  height?: string | number,
  bg?: string,
  shadow?: boolean,
};

const Card = ({
  children,
  width,
  height,
  bg,
  shadow = false,
  ...props
}: Props) => (
  <Root
    width={width}
    height={height}
    bg={bg}
    {...props}
    shadow={shadow}
  >
    {children}
  </Root>
);

Card.SideLabel = CardSideLabel;
Card.Header = CardHeader;

export default Card;
