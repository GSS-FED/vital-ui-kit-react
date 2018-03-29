/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import FooterButton from './FooterButton';

const Root = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
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

/**
 * @render react
 * @name Card
 * @description Card Component with header, footer, buttons
 * @example
 * <Card width="300px" height="420px">
 *   <Card.Header image={"http://react.vitaluikit.com/static/media/card-header-pic.0080a766.png"} title="Title" />
 *   <Card.Container>Lorem ipsum dolor sit amet, sea oblique aliquam oportere ea, id dico interesset eam. Eu eum quem velit verterem, amet dicat quaeque ad est.</Card.Container>
 *    <Card.Footer actions={[{ text: 'Confirm', primary: true }, { text: 'Cancel' }]}></Card.Footer>
 * </Card>
 */

const Card = ({ children, width, height, shadow, ...props }: Props) => (
  <Root width={width} height={height} shadow={shadow} {...props}>
    {children}
  </Root>
)


Card.Header = Header;
Card.Container = Container;
// TODO: action callback
Card.Footer = Footer;
Card.FooterButton = FooterButton;

export default Card;
