/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import styled from 'styled-components';

const ListContent = styled.div`
  display: block;
  font-size: 1.2rem;
  border-left: ${props =>
    props.border
      ? `1px solid ${props.theme.primaryList[2]}`
      : 'none'};
  border-right: ${props =>
    props.border
      ? `1px solid ${props.theme.primaryList[2]}`
      : 'none'};
  padding: 0.928rem 2.856rem 0.928rem 1.428rem;
  line-height: 1.866rem;
`;

export default ListContent;
