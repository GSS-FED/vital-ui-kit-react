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

import { List } from '../../../web/src';

const Display = styled.div`
  padding: 20px;
`;

storiesOf('Components | List', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is List')(() => (
        <Display>
          <List
            themed={select('themed', {
              light: 'light',
              dark: 'dark',
            })}
          >
            <List.Item title="Level 1" badge="99+">
              <List.Item title="Level 2">
                <List.Item title="Level 3">
                  <List.Item title="Level 4">
                    <List.Item title="Level 5" />
                  </List.Item>
                  <List.Item title="Level 4" hasLink />
                  <List.Item
                    title="Level 4 link with badge"
                    badge="1"
                    hasLink
                  />
                </List.Item>
                <List.Item title="Level 3" />
                <List.Item title="Level 3 has Content">
                  <List.Content>
                    Vero sint molestiae sit consequuntur aut aliquam.
                    Aut porro maiores est rerum sed quasi fugiat culpa
                    fuga. Voluptatem quasi excepturi earum.
                    Repellendus qui deleniti aut blanditiis
                    exercitationem eum dolorem libero debitis.
                  </List.Content>
                </List.Item>
              </List.Item>
            </List.Item>
            <List.Item badge="10" title="Level 1" />
          </List>
        </Display>
      )),
    ),
  )
  .add(
    'Tree/ Accordion',
    withInfo(`info`)(
      withNotes('This is List')(() => (
        <Display>
          <List
            collapse
            border
            themed={select('Themed', {
              light: 'light',
              dark: 'dark',
            })}
          >
            <List.Item title="Collaspe 1">
              <List.Content>
                Quo voluptates numquam nulla libero vel facere
                quibusdam sunt. Hic sed delectus et ipsum iste. Eos
                eligendi quibusdam. Possimus quisquam minima velit
                maxime officia consequatur et magni. Necessitatibus
                quos sed alias architecto est pariatur. Et vero
                aperiam quaerat. Ut numquam quaerat et aut neque
                ratione velit et dolor. Ipsam repellendus saepe quas
                et iste debitis molestias recusandae ipsum.
                Praesentium cumque est velit delectus non atque ullam.
                Non quis voluptate doloribus voluptatum assumenda.
                Illum est incidunt a eius voluptatum laudantium
                repellat. Ipsum eos non molestias qui ab quasi
                pariatur. Ipsum ea perferendis dolorem nihil et dolor.
                Expedita officia accusantium incidunt illum illum
                consequuntur velit.
              </List.Content>
            </List.Item>
            <List.Item title="Collaspe 2" badge="1">
              <List.Content>
                Nostrum tempora ipsum et in. Numquam praesentium
                voluptas itaque ratione iste quisquam harum.
                Voluptatibus sit rerum. Vitae consequatur eaque
                aliquid porro perspiciatis culpa et sit. Iste illo eum
                cum. Et ea beatae dolorum tempore possimus iste quia
                nobis beatae. Aut voluptatibus illo possimus inventore
                laudantium nobis aperiam. Aut aut vel officiis laborum
                nihil dolor. Aut velit eligendi at at sed esse
                inventore. Perspiciatis ipsum debitis in voluptatem
                error cumque iure earum nostrum. Quo recusandae
                dolores esse. Ipsam voluptas aut et nisi iste qui
                minima mollitia alias.
              </List.Content>
            </List.Item>
          </List>
        </Display>
      )),
    ),
  );
