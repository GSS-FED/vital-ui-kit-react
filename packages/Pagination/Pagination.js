import React from 'react';
import styled from 'styled-components';

const Root = styled.nav`
  font-size: 0;
`;

const ListWrapper = styled.ul``;

const ListItem = styled.li`
  font-size: 0.875rem;
  display: inline-block;
  vertical-align: middle;
`;

const Link = styled.a`
      display: block;
    padding: 0.53rem 0.8rem;
    border-right: 0;
    transition: all 0.2s ease;
    color: #456297;
    border-radius: 4px;
    margin: 0 2px;
`;

const Pagination = () => (
  <Root>
    <ListWrapper>
      <ListItem>
        <Link href="#">yoyo</Link>
      </ListItem>
    </ListWrapper>
  </Root>
);

export default Pagination;
