import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import { Card } from '.';
import { Rocket } from '../../icon/src';
import { Button } from '../../button/src/Button';
import { ButtonGroup } from '../../button/src/ButtonGroup';
// import heroImage from '../../assets/card-header-pic.png';

const content =
  'Lorem ipsum dolor sit amet, sea oblique aliquam oportere ea, id dico interesset eam. Eu eum quem velit verterem, amet dicat quaeque ad est.';

storiesOf('Packages | Card', module)
  .addDecorator(withKnobs)
  .add('Default Full Button type', () => (
    <Card width="300px" height="220px">
      <Card.Header badge="99+" title="Title" />
      <Card.Content>{content}</Card.Content>
      <Card.Footer>
        <Card.FooterButton>Cancel</Card.FooterButton>
        <Card.FooterButton primary>Confirm</Card.FooterButton>
      </Card.Footer>
    </Card>
  ))
  .add('With Flat Button', () => (
    <Card width="300px" height="220px">
      <Card.Header title="Title" />
      <Card.Content>{content}</Card.Content>
      <Card.Footer>
        <ButtonGroup style={{ padding: 10 }}>
          <Button>Cancel</Button>
          <Button flat nature="primary">
            Confirm
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  ))
  .add('With Link Button', () => (
    <Card width="300px" height="220px">
      <Card.Header title="Title" />
      <Card.Content>{content}</Card.Content>
      <Card.Footer>
        <ButtonGroup style={{ padding: 10 }}>
          <Button link>Cancel</Button>
          <Button link nature="primary">
            Confirm
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  ))
  .add('With Icon', () => (
    <Card width="300px">
      <Card.Content style={{ textAlign: 'center' }}>
        <Rocket name="thumbs-up" fontSize="90" color="#0e86fe" />
        <div
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            paddingTop: '1.25rem',
            width: '100%',
            color: '#456297',
          }}
        >
          Congrats
        </div>
        <div
          style={{
            fontSize: '0.93333rem',
            lineHeight: '1.25rem',
            paddingTop: '10px',
          }}
        >
          Let’s Get Started
        </div>
      </Card.Content>
      <Card.Footer>
        <Card.FooterButton primary>Confirm</Card.FooterButton>
      </Card.Footer>
    </Card>
  ));
