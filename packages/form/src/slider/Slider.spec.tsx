import React from 'react';
import rerender from 'react-test-renderer';
import { Slider } from './Slider';

describe('Slider', () => {
  it('should render with default styles', () => {
    const slider = rerender.create(
      <Slider
        max={2}
        min={1}
        step={0.01}
        onChange={() => {}}
        value={1}
      />,
    );
    expect(slider.toJSON()).toMatchSnapshot();
  });
});
