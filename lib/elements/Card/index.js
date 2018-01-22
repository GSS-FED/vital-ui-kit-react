// @flow

import * as React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import FooterButton from './FooterButton';

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #FFFFFF;
  box-shadow: ${props => props.shadow ? '2px 2px 4px 0px #cfd8dc' : 'none'};
  width: ${props => props.width || 'auto'};
  height ${props => props.height || 'auto'};
  border: 1px solid #D8E3F6;
`

type Props = {
  children: React.Node,
  width?: string,
  height?: string,
  shadow?: boolean,
}

const Card = ({ children, width, height, shadow }: Props) => (
  <StyledCard width={width} height={height} shadow={shadow}>
    {children}
  </StyledCard>
)


Card.Header = Header;
Card.Container = Container;
Card.Footer = Footer;
Card.FooterButton = FooterButton;

export default Card;
