/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

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

import { Card, ButtonGroup, Button, Icon } from '../../src';
import heroImage from '../../assets/img/card-header-pic.png';

const content =
  'Lorem ipsum dolor sit amet, sea oblique aliquam oportere ea, id dico interesset eam. Eu eum quem velit verterem, amet dicat quaeque ad est.';

storiesOf('Components | Card', module)
  .addDecorator(withKnobs)
  .add(
    'Default Full Button type',
    withInfo(`Info`)(
      withNotes('Insert actions in Footer')(() => (
        <Card width="300px" height="220px">
          <Card.Header badge="99+" title="Title" />
          <Card.Container>{content}</Card.Container>
          <Card.Footer>
            <Card.FooterButton>Cancel</Card.FooterButton>
            <Card.FooterButton primary>Confirm</Card.FooterButton>
          </Card.Footer>
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
            <ButtonGroup style={{ padding: 10 }}>
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
            <ButtonGroup style={{ padding: 10 }}>
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
          <Card.Container>
            {content}
            {content}
            {content}
            {content}
          </Card.Container>
          <Card.Footer>
            <Card.FooterButton>Cancel</Card.FooterButton>
            <Card.FooterButton primary>Confirm</Card.FooterButton>
          </Card.Footer>
        </Card>
      )),
    ),
  )
  .add(
    'With Icon',
    withInfo(`info`)(
      withNotes('')(() => (
        <Card width="300px">
          <Card.Container style={{ 'textAlign': 'center' }}>
            <Icon name="thumbs-up" size="90" color="#0e86fe" />
            <div
              style={{
                'fontSize': '1.25rem',
                'lineHeight': '1.5rem',
                overflow: 'hidden',
                'whiteSpace': 'nowrap',
                'textOverflow': 'ellipsis',
                'paddingTop': '1.25rem',
                width: '100%',
                color: '#456297',
              }}>
              Congrats
            </div>
            <div
              style={{
                'fontSize': '0.93333rem',
                'lineHeight': '1.25rem',
                'paddingTop': '10px',
              }}>
              Let’s Get Started
            </div>
          </Card.Container>
          <Card.Footer>
            <Card.FooterButton primary>Confirm</Card.FooterButton>
          </Card.Footer>
        </Card>
      )),
    ),
  );
