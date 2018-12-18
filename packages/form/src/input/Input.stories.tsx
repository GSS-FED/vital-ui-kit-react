import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';
import { Input, IconButton, InputWrapper } from '.';
import { FieldInput } from '../FieldInput';
import { Pen, Share, Star as ViStar } from '@vital-ui/react-icon';
import styled, { css } from 'styled-components';
import { RightIconButton, LeftIconButton } from './IconInput';

const StyledInput = styled(Input)`
  background: red;
`;

interface StarProps {
  // use data attrs becase `react-icons` cannot recevie uknown dom attr
  'data-is-favorited': boolean;
}

const Star = styled(ViStar)<StarProps>`
  color: ${({ 'data-is-favorited': isFavorited }) =>
    isFavorited ? '#FFD233' : `#dedee2`};
  font-size: 1.14em;
  transition: transform 0.2s cubic-bezier(0, 5, 0, 5);

  ${({ 'data-is-favorited': isFavorited }) =>
    isFavorited &&
    css`
      transform: scale(1.1);
    `};
`;

interface FavoriteStarProps {
  isFavorited?: boolean;
  onClick?: React.MouseEventHandler;
}

export const FavoriteStar: React.SFC<FavoriteStarProps> = ({
  isFavorited,
  onClick,
  ...props
}) => (
  <IconButton {...props} onClick={onClick}>
    <Star data-is-favorited={isFavorited} />
  </IconButton>
);

storiesOf('Packages | Form/Input', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <FieldInput
      required={boolean('Required 1', true)}
      align={select('Align', {
        left: 'Left',
        right: 'Right',
      })}
      label="Username"
      inline={boolean('Inline', false)}
    >
      <Input
        placeholder={text('Placeholder 1', 'Enter your username')}
      />
    </FieldInput>
  ))
  .add('With Icon', () => (
    <>
      <InputWrapper>
        <Input placeholder="Right side icon" pr="2.2rem" />
        <RightIconButton>
          <FavoriteStar />
        </RightIconButton>
      </InputWrapper>
      <br />
      <InputWrapper>
        <Input placeholder="Left side icon" pl="2.2rem" />
        <LeftIconButton>
          <Share />
        </LeftIconButton>
      </InputWrapper>
    </>
  ))
  .add('Extends styled', () => <StyledInput />);
