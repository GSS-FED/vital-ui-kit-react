// @flow

import React, { Component } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon/';

const HANDLER_SIZE = 22;
const HANDLER_OFFSET = -(HANDLER_SIZE + 2) / 2;

const Root = styled.div`
  display: flex;
  position: relative;
  min-width: 200px;

  ${props =>
    props.disabled &&
    `
    opacity: .6;
  `};
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 26px;
`;

const Track = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  cursor: pointer;
  top: 50%;
  left: 0;
  height: 8px;
  margin-top: -4px;
  background-repeat: repeat-x;
  border-radius: 4px;
  border-color: #c4d2eb;
  width: 100%;
  background-color: #d8e3f6;
`;

const Selection = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  background-color: #0e86fe;
  left: 0;
  height: 8px;
  margin-top: -4px;
  top: 50%;
  width: ${props => `${props.width}px`};
`;

const Handler = styled.div`
  left: ${props => `${props.left}px`}
  position: absolute;
  border-radius: 100%;
  border-color: #c4d2eb;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(196, 210, 235, 0.3);
  text-indent: -3333px;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  outline: 0;
  border-style: solid;
  border-width: 1px;
  width: ${HANDLER_SIZE}px;
  height: ${HANDLER_SIZE}px;
  cursor: pointer;
`;

type State = {
  active: boolean,
  position: number,
  grab: number,
  limit: number,
  startX: number,
  value: number
};

type Props = {
  min: number,
  max: number,
  step: number,
  value: number,
  disabled: boolean,
  onChange: (number, SyntheticEvent<HTMLElement>) => mixed,
  onChangeStart?: (SyntheticEvent<HTMLElement>) => mixed,
  onChangeComplete?: (SyntheticEvent<HTMLElement>) => mixed
};

class Slider extends Component<Props, State> {
  state = {
    active: false,
    position: HANDLER_OFFSET,
    // limit of the handle drag
    limit: 0,
    // handle offset
    grab: 0,
    // cache the mouse down postion x
    startX: 0,
    value: this.props.value || 0
  };
  slider: HTMLElement;
  track: HTMLElement;
  handle: HTMLElement;

  componentDidMount() {
    this.handleUpdate();
    const resizeObserver = new ResizeObserver(this.handleUpdate);
    resizeObserver.observe(this.slider);
  }

  handleUpdate = () => {
    if (!this.slider) {
      return;
    }
    const trackWidth = this.track.offsetWidth;
    const handleWith = this.handle.offsetWidth;
    this.setState({
      limit: trackWidth - handleWith, // 130 - 24
      grab: -handleWith / 2,
      position: this.getPositionFromValue(this.state.value)
    });
  };

  handleStart = (e: SyntheticMouseEvent<HTMLElement>) => {
    if (this.props.disabled) return;
    if (this.props.onChangeStart) this.props.onChangeStart(e);
    this.setState({
      active: true,
      startX: e.clientX
    });
    // $FlowFixMe
    document.addEventListener('mousemove', this.handleDrag);
    // $FlowFixMe
    document.addEventListener('mouseup', this.handleEnd);
  };

  handleDrag = (e: SyntheticMouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const value = this.getValueFromPosition(e.clientX);
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value, e);
  };

  handleEnd = (e: SyntheticMouseEvent<HTMLElement>) => {
    if (this.props.onChangeComplete) this.props.onChangeComplete(e);
    this.setState({
      active: false,
      position: this.getPositionFromValue(this.state.value)
    });
    // $FlowFixMe
    document.removeEventListener('mousemove', this.handleDrag);
    // $FlowFixMe
    document.removeEventListener('mouseup', this.handleEnd);
  };

  getPositionFromValue = (value: number) => {
    const { min, max } = this.props;
    const { limit } = this.state;
    const diffMaxMin = max - min; // 100
    const diffValMin = value - min; // 10
    const percentage = diffValMin / diffMaxMin;
    const pos = Math.round(percentage * limit);
    return pos;
  };

  getValueFromPosition = (pos: number) => {
    const { startX, limit, grab, position } = this.state;
    const diff = pos - startX;
    const newHandlerLeft = this.clamp(position + diff, limit, grab);
    const percentage = (newHandlerLeft - grab) / (limit - grab);
    const value =
      this.props.step *
      Math.round(
        percentage * (this.props.max - this.props.min) / this.props.step
      );
    return value;
  };

  clamp = (value: number, max: number, min: number) =>
    Math.min(Math.max(value, min), max);

  render() {
    //
    const position = this.getPositionFromValue(this.state.value);

    return (
      <Root
        innerRef={s => {
          this.slider = s;
        }}
        disabled={this.props.disabled}
        aria-valuemin={this.props.min}
        aria-valuemax={this.props.max}
        aria-valuenow={this.props.value}
      >
        <Button circle size="xsmall" style={{marginRight: '12px'}}>
          <Icon name="chevron-left" size="16" />
        </Button>
        <Wrapper disabled={this.props.disabled}>
          <Track
            innerRef={s => {
              this.track = s;
            }}
          />
          <Selection width={position - this.state.grab} />
          <Handler
            innerRef={s => {
              this.handle = s;
            }}
            left={position}
            active={this.state.active}
            onMouseDown={this.handleStart}
          />
        </Wrapper>
        <Button circle size="xsmall" style={{marginLeft: '12px'}}>
          <Icon name="chevron-right" size="16" />
        </Button>
      </Root>
    );
  }
}

export default Slider;
