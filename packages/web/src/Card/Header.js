// @flow

import * as React from 'react';
import styled from 'styled-components';
import Badge from '../Badge';

const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0.75rem 1.25rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.primaryList[2]}`};
  color: ${({ theme }) => theme.primaryList[6]};
  font-size: 1.25rem;
  min-height: 50px;
  display: table;
  width: 100%;
`;

const RootWithImage = styled(Root)`
  min-height: 183px;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.blackList[2]};
  background-size: cover;
  border-bottom: ${({ theme }) => `1px solid ${theme.primaryList[2]}`};
  color: ${({ theme }) => theme.white};
  background-image: url(${({ image }) => image});

  > h4 {
    position: absolute;
    bottom: 0;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    font-size: 1.424rem;
    font-weight: normal;
    margin-top: 1.424em;
    margin-bottom: 1.424em;
  }
`;

const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const BadgeCell = styled(Cell)`
  width: 60px;
  text-align: right;
`;

type Props = {
  children: React.ReactNode,
  image?: string,
  title?: string,
  badge?: string,
  titleStyle?: React.CSSProperties
};

const Header = ({
  children,
  image,
  title,
  badge,
  titleStyle,
  ...props
}: Props) => {
  if (image) {
    return (
      <RootWithImage image={image} {...props}>
        <h4 style={titleStyle}>
          {title}
        </h4>
        {children}
      </RootWithImage>
    );
  }

  return (
    <Root {...props}>
      {title && (
      <Cell style={titleStyle}>
        {title}
      </Cell>
)}
      {badge && (
        <BadgeCell>
          <Badge label={badge} />
        </BadgeCell>
      )}
      {children}
    </Root>
  );
};

Header.defaultProps = {
  title: null,
  image: null,
  badge: null,
  titleStyle: null
};

export default Header;
