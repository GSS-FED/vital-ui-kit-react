/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
// import {
//   withKnobs,
//   text,
//   boolean,
//   number,
//   select,
// } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Music } from '../packages/icon/src';
import { Button, ButtonProps } from '../packages/button/src/Button';
import { ButtonGroup } from '../packages/button/src/ButtonGroup';
import { Card } from '../packages/card/src';
import Section from './Container/Section';
import { Avatar, AvatarProps } from '../packages/avatar/src/Avatar';

const AVATAR: Partial<AvatarProps>[] = [
  { size: 'xsmall', circle: true, outline: true },
  { gender: 'male', size: 'small', circle: true, outline: true },
  { gender: 'female', size: 'medium', circle: true, badge: 10 },
  { gender: 'male', size: 'large', circle: true },
  { gender: 'female', size: 'xlarge', circle: true, badge: 100 },
];

const BUTTON_STYLE = ['default', 'flat', 'subtle', 'light'];

const NATRUE: ButtonProps['nature'][] = [
  'default',
  'primary',
  'success',
  'info',
  'alarm',
  'warning',
];

const SIZE: ButtonProps['size'][] = [
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
];

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
        <ButtonGroup
          marginHorizontal="10px"
          style={{ paddingBottom: '20px' }}
        >
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
        </ButtonGroup>
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
            <Card.Content style={{ textAlign: 'center' }}>
              <Music name="thumbs-up" fontSize="90" color="#0e86fe" />
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
              <Card.FooterButton onClick={() => {}} primary>
                Confirm
              </Card.FooterButton>
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
