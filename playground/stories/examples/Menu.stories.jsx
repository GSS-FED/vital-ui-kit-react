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

import {Icon, Menu} from '@vital-ui/react';

const MenuIcon = styled(Icon)`
  margin-right: 10px;
`;

storiesOf('Components | Menu', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is Menu')(() => (
        <Menu>
          <Menu.Item>
            <MenuIcon name="user" />
            User Accounts
          </Menu.Item>
          <Menu.Item>
            <MenuIcon name="search" />
            Search
          </Menu.Item>
          <Menu.Item>
            <MenuIcon name="cog" />
            Setting
          </Menu.Item>
          <Menu.Item>
            <MenuIcon name="power-off" />
            Logout
          </Menu.Item>
        </Menu>
      )),
    ),
  );
