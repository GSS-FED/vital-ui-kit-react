/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';
import { Flex, FlexBoxProps } from '@vital-ui/react-utils';
import { CloseIcon } from './icon/CloseIcon';

const Root = styled(Flex)`
  color: #ffffff;
  border-color: transparent;
  background-color: ${({ theme }) => theme.select.tag.bg};
  border-radius: ${({ theme }) => theme.select.tag.borderRadius};
  line-height: 1;
  margin: 4px 0 4px 5px;
  padding: ${({ theme }) => theme.select.tag.padding};
  font-weight: 400;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.select.tag.hoverBg};
  }
`;

const Content = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const noop = () => {};

export interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  onCloseClick?: () => void;
}

export const Tag: React.SFC<TagProps & FlexBoxProps> = ({
  children,
  onClick,
  onCloseClick,
  ...props
}) => (
  <Root onClick={onClick} {...props}>
    <Content>{children}</Content>
    {onCloseClick && (
      <CloseIcon
        onClick={onCloseClick}
        name="close"
        color="#fff"
        fontSize={13}
      />
    )}
  </Root>
);

Tag.defaultProps = {
  onClick: noop,
  onCloseClick: noop,
};
