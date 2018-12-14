/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import styled from 'styled-components';
import { CloseIcon } from './icon/CloseIcon';

const Li = styled.li`
  color: #ffffff;
  border-color: transparent;
  background-color: ${({ theme }) => theme.select.tag.bg};
  border-radius: ${({ theme }) => theme.select.tag.borderRadius};
  line-height: 1;
  margin: 4px 0 4px 5px;
  padding: ${({ theme }) => theme.select.tag.padding};
  font-weight: 400;
  display: flex;
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

export interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  onCloseClick?: () => void;
}

export const Tag: React.FunctionComponent<TagProps> = ({
  children,
  onClick,
  onCloseClick,
}) => (
  <Li onClick={onClick}>
    <Content>{children}</Content>
    {onCloseClick && (
      <CloseIcon
        onClick={onCloseClick}
        name="close"
        color="#fff"
        fontSize={13}
      />
    )}
  </Li>
);

Tag.defaultProps = {
  onClick: undefined,
  onCloseClick: undefined,
};
