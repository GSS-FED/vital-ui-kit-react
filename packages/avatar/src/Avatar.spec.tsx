import React from 'react';
import renderer from 'react-test-renderer';
import { Avatar } from './Avatar';
import { ThemeProvider } from '@vital-ui/react-theme';

describe('Avatar', () => {
  it('should render with default styles', () => {
    const avatar = renderer.create(<Avatar />);
    expect(avatar.toJSON()).toMatchSnapshot();
  });

  it('should render with number size prop', () => {
    const avatar = renderer.create(<Avatar size={150} />);
    expect(avatar.toJSON()).toMatchSnapshot();
  });

  it('should render with css prop', () => {
    const avatar = renderer.create(
      <Avatar
        size={150}
        css={`
          border: 1px solid grey;
        `}
        circle
      />,
    );

    expect(avatar.toJSON()).toMatchSnapshot();
  });

  it('should render with theme props', () => {
    const avatar = renderer.create(
      <ThemeProvider
        componentTheme={props => ({
          avatar: {
            xsmall: {
              size: '20px',
              borderRadius: '3px',
            },
          },
        })}
      >
        <Avatar size="xsmall" />
      </ThemeProvider>,
    );
    expect(avatar.toJSON()).toMatchSnapshot();
  });
});
