/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import Icon from '../Icon';
import { Root, Wrapper, Handler, Button } from './styled';
import Tooltip from '../Tooltip';
import Track from '../Track';

import constants from './constants';

type State = {
  active: boolean,
  position: number,
  grab: number,
  limit: number,
  startX: number,
  value: number,
};

type Props = {
  size?: 'large' | 'medium' | 'small',
  min: number,
  max: number,
  step: number,
  value: number,
  disabled?: boolean,
  hasButton?: boolean,
  decreaseButton?: React.Element<any>,
  increaseButton?: React.Element<any>,
  trackLabel?: boolean,
  onChange: (number, SyntheticEvent<HTMLElement>) => mixed,
  onChangeStart?: (SyntheticEvent<HTMLElement>) => mixed,
  onChangeComplete?: (SyntheticEvent<HTMLElement>) => mixed,
};

/**
 * @render react
 * @name Slider
 * @description Define the value by dragging the handle or side buttons
 * @example
 * <Slider
 *  size="large"
 *  hasButton
 *  value={50}
 *  max={100}
 *  min={0}
 *  step={5}
 * />
 */
class Slider extends React.Component<Props, State> {
  static defaultProps = {
    size: 'medium',
    disabled: false,
    hasButton: false,
    decreaseButton: null,
    increaseButton: null,
    trackLabel: false,
    onChangeStart: null,
    onChangeComplete: null,
  };

  state = {
    active: false,
    position: -constants[this.props.size].handlerSize / 2,
    // limit of the handle drag
    limit: 0,
    // handle offset
    grab: 0,
    // cache the mouse down postion x
    startX: 0,
    value: this.props.value || 0,
  };

  slider: ?HTMLElement;

  track: ?HTMLElement;

  handle: ?HTMLElement;

  // delay timeout of the button calling function
  start = 700;

  timeout = undefined;

  componentDidMount() {
    this.handleUpdate();
    const resizeObserver = new ResizeObserver(this.handleUpdate);
    resizeObserver.observe(this.track);
  }

  handleUpdate = () => {
    if (!this.slider || !this.track || !this.handle) {
      return;
    }
    const trackWidth = this.track.offsetWidth;
    const handleWith = this.handle.offsetWidth;
    this.setState(prevState => ({
      limit: trackWidth - handleWith,
      grab: -handleWith / 2,
      position: this.getPositionFromValue(prevState.value),
    }));
  };

  handleStart = (e: SyntheticMouseEvent<HTMLElement>) => {
    if (this.props.disabled) return;
    if (this.props.onChangeStart) this.props.onChangeStart(e);
    this.setState({
      active: true,
      startX: e.clientX,
    });
    // $FlowFixMe
    document.addEventListener('mousemove', this.handleDrag);
    // $FlowFixMe
    document.addEventListener('mouseup', this.handleEnd);
  };

  handleTrack = (e: SyntheticMouseEvent<HTMLElement>) => {
    if (this.props.disabled) return;
    e.stopPropagation();
    // $FlowFixMe
    const percentage = e.nativeEvent.offsetX / this.track.clientWidth;
    const value =
      this.props.step *
      Math.round(
        (percentage * (this.props.max - this.props.min)) /
          this.props.step,
      );
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value, e);
  };

  handleDrag = (e: SyntheticMouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const value = this.getValueFromPosition(e.clientX);
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value, e);
  };

  handleEnd = (e: SyntheticMouseEvent<HTMLElement>) => {
    if (this.props.onChangeComplete) this.props.onChangeComplete(e);
    this.setState(prevState => ({
      active: false,
      position: this.getPositionFromValue(prevState.value),
    }));
    // $FlowFixMe
    document.removeEventListener('mousemove', this.handleDrag);
    // $FlowFixMe
    document.removeEventListener('mouseup', this.handleEnd);
  };

  handleIncrease = () => {
    if (this.props.disabled) return;
    this.increaseByStep();
    this.timeout = setTimeout(this.handleIncrease, this.start);
    this.start = this.start / 2;
  };

  handleDecrease = () => {
    if (this.props.disabled) return;
    this.decreaseByStep();
    this.timeout = setTimeout(this.handleDecrease, this.start);
    this.start = this.start / 2;
  };

  increaseByStep = () => {
    this.setState(prevState => ({
      value: this.clamp(
        prevState.value + this.props.step,
        this.props.max,
        this.props.min,
      ),
    }));
  };

  decreaseByStep = () => {
    this.setState(prevState => ({
      value: this.clamp(
        prevState.value - this.props.step,
        this.props.max,
        this.props.min,
      ),
    }));
  };

  getPositionFromValue = (value: number): number => {
    const { min, max } = this.props;
    const { limit } = this.state;
    const diffMaxMin = max - min;
    const diffValMin = value - min;
    const percentage = diffValMin / diffMaxMin;
    const pos = Math.round(percentage * limit);
    return pos;
  };

  getValueFromPosition = (pos: number): number => {
    const { startX, limit, grab, position } = this.state;
    const diff = pos - startX;

    const newHandlerLeft = this.clamp(position + diff, limit, grab);
    const percentage = (newHandlerLeft - grab) / (limit - grab);
    const value =
      this.props.step *
      Math.round(
        (percentage * (this.props.max - this.props.min)) /
          this.props.step,
      );
    return value;
  };

  clamp = (value: number, max: number, min: number) =>
    Math.min(Math.max(value, min), max);

  renderDecreaseButton = () => {
    let buttonShow = this.props.hasButton;
    if (this.props.decreaseButton) buttonShow = true;
    if (buttonShow) {
      const buttonProps = {
        onMouseDown: this.handleDecrease,
        onMouseUp: () => {
          clearTimeout(this.timeout);
          this.start = 700;
        },
        style: { marginRight: '12px', flex: '0 0 auto' },
      };
      if (this.props.decreaseButton) {
        return React.cloneElement(this.props.decreaseButton, {
          ...buttonProps,
        });
      }
      return (
        <Button {...buttonProps} circle size="xsmall">
          <Icon name="chevron-left" size="13" />
        </Button>
      );
    }
    return null;
  };

  renderIncreaseButton = () => {
    let buttonShow = this.props.hasButton;
    if (this.props.increaseButton) buttonShow = true;
    if (buttonShow) {
      const buttonProps = {
        onMouseDown: this.handleIncrease,
        onMouseUp: () => {
          clearTimeout(this.timeout);
          this.start = 700;
        },
        style: { marginLeft: '12px', flex: '0 0 auto' },
      };
      if (this.props.increaseButton) {
        return React.cloneElement(this.props.increaseButton, {
          ...buttonProps,
        });
      }
      return (
        <Button {...buttonProps} circle size="xsmall">
          <Icon name="chevron-right" size="13" />
        </Button>
      );
    }
    return null;
  };

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
        {this.renderDecreaseButton()}
        <Wrapper
          size={this.props.size}
          disabled={this.props.disabled}
        >
          <Track
            size={this.props.size}
            onMouseDown={this.handleTrack}
            onMouseUp={e => {
              this.setState({ startX: e.clientX });
              this.handleEnd(e);
            }}
            onTouchStart={this.handleStart}
            onTouchEnd={this.handleEnd}
            trackRef={s => {
              this.track = s;
            }}
            disabled={this.props.disabled}
            selectionWidth={position - this.state.grab}
          />
          <Tooltip
            placement="bottom"
            overlay={this.state.value}
            trigger={['hover']}
          >
            <Handler
              size={this.props.size}
              innerRef={s => {
                this.handle = s;
              }}
              style={{
                left: `${position}px`,
              }}
              active={this.state.active}
              onMouseDown={this.handleStart}
            />
          </Tooltip>
        </Wrapper>
        {this.renderIncreaseButton()}
      </Root>
    );
  }
}

export default Slider;
