/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
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
  margin: auto;
  box-sizing: border-box;
  flex-direction: column;
  word-break: break-word;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #FFFFFF;
  box-shadow: ${({ shadow }) =>
    shadow ? '2px 2px 4px 0px #cfd8dc' : 'none'};
  width: ${({ width }) => width};
  height ${({ height }) => height};
  border: 1px solid #D8E3F6;
`;

type Props = {
  children: React.ReactNode,
  width?: string,
  height?: string,
  shadow?: boolean
};

/**
 * @render react
 * @name Card
 * @description Card Component with header, footer, buttons
 * @example
 * <Card width="300px" height="420px">
 *   <Card.Header image={"http://react.vitaluikit.com/static/media/card-header-pic.0080a766.png"} title="Title" />
 *   <Card.Container>Lorem ipsum dolor sit amet, sea oblique aliquam oportere ea, id dico interesset eam. Eu eum quem velit verterem, amet dicat quaeque ad est.</Card.Container>
 *    <Card.Footer>
 *      <Card.FooterButton>Cancel</Card.FooterButton>
 *      <Card.FooterButton primary>Confirm</Card.FooterButton>
 *    </Card.Footer>
 * </Card>
 */

const Card = ({
  children,
  width,
  height,
  shadow,
  ...props
}: Props) => (
  <Root width={width} height={height} shadow={shadow} {...props}>
    {children}
  </Root>
);

Card.defaultProps = {
  width: 'auto',
  height: 'auto',
  shadow: false
};

Card.Header = Header;
Card.Container = Container;
Card.Footer = Footer;
Card.FooterButton = FooterButton;

export default Card;
