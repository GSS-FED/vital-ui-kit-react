/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

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

import { Avatar, Card, Button, ButtonGroup, Icon } from '../src';
import Section from './Container/Section';

const AVATAR = [
  { size: 'xsmall', round: true, outline: true },
  { gender: 'male', size: 'small', round: true, outline: true },
  { gender: 'female', size: 'medium', round: true, badge: 10 },
  { gender: 'male', size: 'large', round: true },
  { gender: 'female', size: 'xlarge', round: true, badge: 100 },
];

const BUTTON_STYLE = ['default', 'flat', 'subtle', 'light'];

const NATRUE = ['default', 'primary', 'success', 'info', 'alarm', 'warning'];

const SIZE = ['xlarge', 'large', 'medium', 'small', 'xsmall'];

storiesOf('Getting Started', module).add(
  'Overview',
  withInfo(`info`)(() => (
    <div>
      <Section title="Avatar">
        {AVATAR.map((avatar, i) => (
          <Wrapper key={i}>
            <Avatar {...avatar} />
          </Wrapper>
        ))}
      </Section>
      <Section title="Button">
        <Button.Group marginHorizontal="10px" style={{ paddingBottom: '20px' }}>
          <Button link>Link</Button>
          <Button dark link>
            Dark Link
          </Button>
          <Button link underline>
            Link underline
          </Button>
          <Button link underline dark>
            Dark Link underline
          </Button>
        </Button.Group>
        {BUTTON_STYLE.map((button, i) => (
          <ButtonGroup
            key={i}
            marginHorizontal="10px"
            style={{ paddingBottom: '20px' }}
          >
            {NATRUE.map((nature, index) => (
              <Button
                nature={nature}
                key={`next${index}`}
                flat={button === 'flat'}
                subtle={button === 'subtle'}
                light={button === 'light'}
              >
                {nature === 'default' ? button : nature}
              </Button>
            ))}
          </ButtonGroup>
        ))}
        <ButtonGroup>
          {SIZE.map((size, i) => (
            <Button size={size} key={i} flat nature="primary">
              {size}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup>
          {SIZE.reverse().map((size, i) => (
            <Button key={i} size={size} flat>
              {size}
            </Button>
          ))}
        </ButtonGroup>
      </Section>
      <Section title="Card">
        <Vertical>
          <Card width="300px">
            <Card.Container style={{ textAlign: 'center' }}>
              <Icon name="thumbs-up" size="90" color="#0e86fe" />
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
            </Card.Container>
            <Card.Footer>
              <Card.FooterButton primary>Confirm</Card.FooterButton>
            </Card.Footer>
          </Card>
        </Vertical>
      </Section>
    </div>
  )),
);

const Wrapper = styled.div`
  margin-right: 5px;
  display: inline-block;
`;

const Vertical = styled.div`
  margin-bottom: 10px;
`;
