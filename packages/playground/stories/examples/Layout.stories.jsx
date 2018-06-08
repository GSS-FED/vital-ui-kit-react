/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Layout } from '../../../web/src';

storiesOf('Components | Layout', module).add(
  'Basic',
  withInfo(`info`)(() => (
    <Layout style={{ height: '100vh' }}>
      <Layout.Header style={{ background: 'blue' }}>
        Header
      </Layout.Header>
      <Layout.Sidebar style={{ background: 'red' }}>
        sidebar
      </Layout.Sidebar>
      <Layout.Content style={{ background: 'yellow' }}>
        <Layout>
          <Layout.Header style={{ background: 'blue' }}>
            Header
          </Layout.Header>
          <Layout.Sidebar style={{ background: 'red' }}>
            sidebar
          </Layout.Sidebar>
          <Layout.Content style={{ background: 'pink' }}>
            content
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  )),
);
