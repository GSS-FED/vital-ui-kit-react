/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';
import { withDeprecationWarnings } from '@vital-ui/react-utils';

import Header from './Header';
import Content from './Content';
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
  background-color: ${({ theme }) => theme.card.bg};
  box-shadow: ${({ shadow }) =>
    shadow ? '2px 2px 4px 0px #cfd8dc' : 'none'};
  width: ${({ width }) => width};
  height ${({ height }) => height};
  border: ${({ theme }) => theme.border};
`;

Root.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  children: React.Node,
  width?: string,
  height?: string,
  shadow?: boolean,
  className?: string,
};

/**
 * @render react
 * @name Card
 * @description Card Component with header, footer, buttons
 * @example
 * <Card width="300px" height="420px">
 *   <Card.Header image={"http://react.vitaluikit.com/static/media/card-header-pic.0080a766.png"} title="Title" />
 *   <Card.Content>Lorem ipsum dolor sit amet, sea oblique aliquam oportere ea, id dico interesset eam. Eu eum quem velit verterem, amet dicat quaeque ad est.</Card.Content>
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
  className,
  ...props
}: Props) => (
  <Root
    className={cn('vital__card', className)}
    width={width}
    height={height}
    shadow={shadow}
    {...props}
  >
    {children}
  </Root>
);

Card.defaultProps = {
  width: 'auto',
  height: 'auto',
  shadow: false,
  className: '',
};

Card.Header = Header;
Card.Container = withDeprecationWarnings(Content, {
  message:
    'Card.Cotainer will be deprecated next patch. Use Card.Content instead.',
});
Card.Content = Content;
Card.Footer = Footer;
Card.FooterButton = FooterButton;

export default Card;