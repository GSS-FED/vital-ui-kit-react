// @flow

import * as React from 'react';
import styled from 'styled-components';
import Badge from '../Badge';

const Root = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #d8e3f6;
  color: #456297;
  font-size: 1.25rem;
  min-height: 50px;
  display: table;
  width: 100%;
`;

const RootWithImage = styled(Root)`
  min-height: 183px;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #dddddd;
  background-size: cover;
  border-bottom: 1px solid #d8e3f6;
  color: #ffffff;
  background-image: url(${props => props.image});

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
`

type Props = {
  children: React.Node,
  image?: string,
  title?: string,
  badge?: string,
};

const Header = ({ children, image, title, badge }: Props) => {
  if (image) {
    return (
      <RootWithImage image={image}>
        <h4>{title}</h4>
        {children}
      </RootWithImage>
    );
  }

  return (
    <Root>
      {title && <Cell>{title}</Cell>}
      {badge && <BadgeCell><Badge label={badge} /></BadgeCell>}
      {children}
    </Root>
  );
};

export default Header;
