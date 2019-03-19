import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Music } from '@vital-ui/react-icon';
import {
  Button,
  ButtonProps,
  ButtonGroup,
  LinkButton,
  FlatButton,
  SubtleButton,
} from '@vital-ui/react-button';
import { Card } from '@vital-ui/react-card';
import { Avatar, AvatarProps } from '@vital-ui/react-avatar';

import { Box } from '@vital-ui/react-utils';

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box pt="20px" pb="30px">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);

export default Section;

const AVATAR: Partial<AvatarProps>[] = [
  { size: 'xsmall', circle: true, outline: true },
  { gender: 'male', size: 'small', circle: true, outline: true },
  { gender: 'female', size: 'medium', circle: true, badge: 10 },
  { gender: 'male', size: 'large', circle: true },
  { gender: 'female', size: 'xlarge', circle: true, badge: 100 },
];

const BUTTON_STYLE = [Button, FlatButton, SubtleButton, LinkButton];

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

storiesOf('Getting Started', module).add('Overview', () => (
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
        <LinkButton>Link</LinkButton>
        <LinkButton dark>Dark Link</LinkButton>
        <LinkButton underline>Link underline</LinkButton>
        <LinkButton underline dark>
          Dark Link underline
        </LinkButton>
      </ButtonGroup>
      {BUTTON_STYLE.map((SButton, i) => (
        <ButtonGroup
          key={i}
          marginHorizontal="10px"
          style={{ paddingBottom: '20px' }}
        >
          {NATRUE.map((nature, index) => (
            <SButton key={`next${index}`} nature={nature}>
              {nature === 'default' ? 'button' : nature}
            </SButton>
          ))}
        </ButtonGroup>
      ))}
      <ButtonGroup>
        {SIZE.map((size, i) => (
          <FlatButton size={size} key={i} nature="primary">
            {size}
          </FlatButton>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {SIZE.reverse().map((size, i) => (
          <FlatButton key={i} size={size}>
            {size}
          </FlatButton>
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
));

const Wrapper = styled.div`
  margin-right: 5px;
  display: inline-block;
`;

const Vertical = styled.div`
  margin-bottom: 10px;
`;
