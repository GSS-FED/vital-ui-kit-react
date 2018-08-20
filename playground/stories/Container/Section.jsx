/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import styled from 'styled-components';

import { Box } from '../../../packages/web/src';

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;

const Section = ({
  title,
  children,
}: {
  title: string,
  children: React.ReactNode,
}) => (
  <Box paddingTop="20px" paddingBottom="30px">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);

export default Section;
