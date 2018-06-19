/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import {
  colorPaletteGenerator,
  defaultTheme,
  defaultComponentsTheme,
} from '@vital-ui/react';

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

class ColorPalette extends Component {
  state = {
    primary: defaultTheme.primary,
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
  .add(
    'Theme',
    withInfo(`
      **defaultTheme**

      **colorPaletteGenerator**

      **defaultComponentsTheme**
    `)(
      withNotes('Theming with Vital UI Kit components')(() => (
        <ColorPalette />
      )),
    ),
  );
