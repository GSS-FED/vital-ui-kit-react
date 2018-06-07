// @flow
/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import styled from 'styled-components';

import { Box } from '@gssfed/vital-ui-kit-react';

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;

const Section = ({ title, children }: { title: string, children: React.Node }) => (
  <Box paddingTop="20px" paddingBottom="30px">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);

export default Section;
