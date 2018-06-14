// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
`;

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;

type Props = {
  title: string,
  children: Node,
};

const Section = ({ title, children }: Props) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrapper>
);

export default Section;
