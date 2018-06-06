import React from 'react';
import styled from 'styled-components';

import { Box } from '@gssfed/vital-ui-kit-react';

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;

const Section = ({ title, children }) => (
  <Box paddingTop="20px" paddingBottom="30px">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);

export default Section;
