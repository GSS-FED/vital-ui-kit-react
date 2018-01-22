// @flow

import * as React from 'react';
import styled from 'styled-components';

import FooterButton from './FooterButton';

const Root = styled.div`
  table-layout: fixed;
  display: table;
  width: 100%;
  flex-grow: 0;
  border-top: 1px solid #d8e3f6;
  min-height: 50px;
  overflow: hidden;
  vertical-align: middle;
  text-align: right;
`;

const RootHasChildren = styled(Root)`
  padding: 10px;
`;

type Props = {
  actions?: Array<{ text: string, primary?: boolean }>,
  children?: React.Node,
};

const Footer = ({ actions, children, ...props }: Props) => {
  if (actions) {
    if (actions.length > 1) {
      actions.sort(a => (a.primary ? 1 : -1));
    }
    return (
      <Root {...props}>
        {actions.map(action => (
          <FooterButton primary={action.primary} label={action.text} />
        ))}
      </Root>
    );
  }
  return <RootHasChildren {...props}>{children}</RootHasChildren>;
};

export default Footer;
