import React from 'react';
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

import { Card, ButtonGroup, Button, Badge } from '../lib/';
import heroImage from '../lib/assets/img/card-header-pic.png';

const content =
  'Lorem ipsum dolor sit amet, sea oblique aliquam oportere ea, id dico interesset eam. Eu eum quem velit verterem, amet dicat quaeque ad est.';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add(
    'Default Full Button type',
    withInfo(`Info`)(
      withNotes('Insert actions in Footer')(() => (
        <Card width="300px" height="220px">
          <Card.Header badge="99+" title="Title" />
          <Card.Container>{content}</Card.Container>
          <Card.Footer
            actions={[{ text: 'Confirm', primary: true }, { text: 'Cancel' }]}
          />
        </Card>
      )),
    ),
  )
  .add(
    'With Flat Button',
    withInfo(`info`)(
      withNotes('This is Card')(() => (
        <Card width="300px" height="220px">
          <Card.Header title="Title" />
          <Card.Container>{content}</Card.Container>
          <Card.Footer>
            <ButtonGroup>
              <Button>Cancel</Button>
              <Button flat nature="primary">
                Confirm
              </Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      )),
    ),
  )
  .add(
    'With Link Button',
    withInfo(`info`)(
      withNotes('')(() => (
        <Card width="300px" height="220px">
          <Card.Header title="Title" />
          <Card.Container>{content}</Card.Container>
          <Card.Footer>
            <ButtonGroup>
              <Button link>Cancel</Button>
              <Button link nature="primary">
                Confirm
              </Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      )),
    ),
  )
  .add(
    'Hero Image',
    withInfo(`info`)(
      withNotes('')(() => (
        <Card width="300px" height="400px">
          <Card.Header image={heroImage} title="Title" />
          <Card.Container>{content}{content}{content}{content}</Card.Container>
          <Card.Footer
            actions={[{ text: 'Confirm', primary: true }, { text: 'Cancel' }]}
          />
        </Card>
      )),
    ),
  );
