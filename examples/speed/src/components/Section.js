import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
`;

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;

const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrapper>
);

export default Section;
