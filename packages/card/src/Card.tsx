/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import FooterButton from './FooterButton';

const Root = styled.div<{
  width?: string;
  height?: string;
  shadow?: boolean;
}>`
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

export interface CardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  shadow?: boolean;
  className?: string;
}

/**
 * @render react
 * @name Card
 * @description Card Component with header, footer, buttons
 * @example
 *
 * <Card width="300px" height="420px">
 *   <Card.Header image={"http://react.vitaluikit.com/static/media/card-header-pic.0080a766.png"} title="Title" />
 *   <Card.Content>This is Content.</Card.Content>
 *    <Card.Footer>
 *      <Card.FooterButton>Cancel</Card.FooterButton>
 *      <Card.FooterButton primary>Confirm</Card.FooterButton>
 *    </Card.Footer>
 * </Card>
 *
 */
class Card extends React.Component<CardProps> {
  static defaultProps = {
    width: 'auto',
    height: 'auto',
    shadow: false,
  };

  static Header: typeof Header = Header;

  static Content: typeof Content = Content;

  static Footer: typeof Footer = Footer;

  static FooterButton: typeof FooterButton = FooterButton;

  render() {
    const {
      children,
      width,
      height,
      shadow,
      className,
      ...props
    } = this.props;
    return (
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
  }
}

export default Card;
