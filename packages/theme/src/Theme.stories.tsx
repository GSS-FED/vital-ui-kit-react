import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs/react';
import {
  colorPaletteGenerator,
  defaultTheme,
  // defaultComponentsTheme,
} from '.';

const Root = styled.div`
  text-align: center;
`;

const ColorPaletteWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const ColorRect = styled.div`
  width: 40px;
  height: 40px;
`;

class ColorPalette extends React.Component {
  static displayName = 'ColorPalette';
  state = {
    primary: defaultTheme.colors.primary,
  };

  changeColor = e => {
    this.setState({
      primary: e.target.value,
    });
  };

  render() {
    const colorList = colorPaletteGenerator(this.state.primary);
    return (
      <Root>
        <input
          type="color"
          value={this.state.primary}
          onChange={e => this.changeColor(e)}
        />
        <ColorPaletteWrapper>
          {Object.keys(colorList)
            .filter(x => x !== 'primary')
            .filter(y => y.includes('primary'))
            .map(colorKey => (
              <ColorRect
                key={colorKey}
                style={{ background: colorList[colorKey] }}
              />
            ))}
        </ColorPaletteWrapper>
        <ColorPaletteWrapper>
          {Object.keys(colorList)
            .filter(x => x !== 'secondary')
            .filter(y => y.includes('secondary'))
            .map(colorKey => (
              <ColorRect
                key={colorKey}
                style={{ background: colorList[colorKey] }}
              />
            ))}
        </ColorPaletteWrapper>
      </Root>
    );
  }
}

export default ColorPalette;

storiesOf('Getting Started', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Theme', () => <ColorPalette />);
