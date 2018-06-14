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

import { Tabs, Badge } from '../../../packages/web/src';

storiesOf('Components | Tab', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is TabPanel')(() => (
        <Tabs>
          <Tabs.Tab
            label="tab1"
            badge={10}
            panel={
              <Tabs.Panel>
                <p>
                  Eius sunt quidem aut omnis harum. Maiores
                  repellendus eligendi saepe. Ea qui ratione quisquam.
                  Ipsa quae sit incidunt tempora qui vel error labore
                  voluptates. Omnis ut mollitia dolor in dolore.
                  Soluta dolor incidunt ipsam aspernatur in et
                  consequuntur voluptatum nobis. Animi est quod harum
                  commodi. Et quis dignissimos molestiae provident.
                  Blanditiis et natus ut quia voluptatem. Labore
                  voluptatum tempore architecto. Est qui illo ipsam
                  iusto ipsam voluptatem dolor omnis ut. Provident
                  perferendis aperiam. Quidem autem eius tempora
                  maxime quo reiciendis tenetur. Ab voluptas incidunt
                  quam et asperiores veniam qui sint.
                </p>
              </Tabs.Panel>
            }
          />
          <Tabs.Tab
            label="tab2"
            badge={100}
            panel={
              <Tabs.Panel>
                <p>
                  Quaerat rem sed. Cum tempora sunt dolor. Delectus
                  aperiam architecto nulla a ipsum illum ut officiis
                  repudiandae. Omnis quas commodi est. Excepturi
                  molestias error assumenda qui quam aut assumenda
                  eos. Perferendis perferendis alias dicta. Voluptatum
                  autem quasi repellat dolor quis nulla voluptates
                  eveniet. Ut laboriosam dolor est dolores et aut. Est
                  repellendus iure aut libero ea nulla occaecati.
                  Dolores distinctio non in aut omnis laudantium.
                  Omnis voluptatibus quis qui eius mollitia quasi
                  explicabo sint dolores. Eum ducimus est hic iure est
                  alias voluptatem. Error veniam tempore. Voluptatem
                  et iste et sunt illo quo omnis minus. Id id voluptas
                  corporis numquam beatae tempore non. Inventore
                  similique dolores tempore aut aut quod eum est.
                  Corrupti quae qui dolores nihil recusandae ea.
                  Facilis et veritatis veniam vero.
                </p>
              </Tabs.Panel>
            }
          />
          <Tabs.Tab
            label="tab3"
            panel={
              <Tabs.Panel>
                <p>
                  Sed fuga expedita reprehenderit repellendus et
                  incidunt nemo voluptas. Veniam culpa ullam placeat
                  reprehenderit eos maxime hic illum eligendi.
                  Voluptas voluptatem rerum doloremque eligendi non
                  tempore qui est. Temporibus eum rerum est. Earum
                  veritatis consequatur earum blanditiis aut numquam
                  sunt. Delectus enim dolor quis aliquid quos
                  deserunt. Fugit consequuntur id odio illum
                  recusandae sed. Illum sapiente dolorem voluptas quam
                  in voluptatem qui optio ipsum. Ut velit alias aut
                  corporis blanditiis asperiores nisi sequi. Iste
                  debitis consequatur praesentium. Tempore qui
                  consequuntur consequatur. Beatae quod non qui
                  laudantium autem minima magni. Quod ut perferendis
                  ut eos. Qui error ea itaque veritatis. In magni sit
                  magnam aperiam corporis nihil sed. Quod ipsa aut
                  ratione.
                </p>
              </Tabs.Panel>
            }
          />
          <Tabs.Tab
            label="tab4"
            panel={
              <Tabs.Panel>
                <p>
                  Quia qui officiis nam sit. Beatae quia a ipsum sequi
                  fugiat nulla rerum eius. Omnis magni blanditiis et.
                  Qui quasi vel a quia. Vel est quod ipsam. Et quia
                  rerum consectetur ratione. Quis error et incidunt
                  exercitationem incidunt laborum. Consequatur
                  voluptatibus saepe reprehenderit incidunt. Debitis
                  qui nemo pariatur qui eaque. Error neque rem aut
                  libero esse cumque. Error earum at accusantium et
                  reprehenderit ipsum ullam.
                </p>
              </Tabs.Panel>
            }
          />
        </Tabs>
      )),
    ),
  );
