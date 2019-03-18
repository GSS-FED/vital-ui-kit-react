/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import { CircleButton } from '@vital-ui/react-button';
import { Tooltip } from '@vital-ui/react-tooltip';
import * as React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import constants from './constants';
import { SlideHandler, SliderRoot, SliderWrapper } from './styled';
import Track from './track';
import { clamp, countDecimals, noop, toFixed } from './utils';

type State = {
  active: boolean;
  position: number;
  /** Value handle offset */
  grab: number;
  /** Limit of the handle drag */
  limit: number;
  /** cache the mouse down postion x */
  startX: number;
  value: number;
};

export interface SliderProps {
  size?: 'large' | 'medium' | 'small';
  min: number;
  max: number;
  step: number;
  value: number;
  disabled?: boolean;
  hasButton?: boolean;
  decreaseButton?: React.ReactElement<any>;
  increaseButton?: React.ReactElement<any>;
  trackLabel?: boolean;
  onChange?: (value: number) => void;
  onChangeStart?: React.EventHandler<any>;
  onChangeComplete?: React.EventHandler<any>;
  showTooltip?: boolean;
}

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
export class Slider extends React.Component<SliderProps, State> {
  static defaultProps = {
    size: 'medium',
    disabled: false,
    hasButton: false,
    decreaseButton: null,
    increaseButton: null,
    trackLabel: false,
    onChangeStart: noop,
    onChangeComplete: noop,
  };

  state: State = {
    active: false,
    position: -constants[this.props.size!].handlerSize / 2,
    limit: 0,
    grab: 0,
    startX: 0,
    value:
      this.props.value || clamp(0, this.props.max, this.props.min),
  };

  slider = React.createRef<any>();

  track = React.createRef<any>();

  handle = React.createRef<any>();

  /** delay timeout of the button calling function */
  start = 700;

  timeout: any = undefined;

  componentDidMount() {
    this.handleUpdate();
    // const resizeObserver = new ResizeObserver(this.handleUpdate);
    // if (this.track.current) {
    //   resizeObserver.observe(this.track.current);
    // }
  }

  handleUpdate = () => {
    if (
      !this.slider.current ||
      !this.track.current ||
      !this.handle.current
    ) {
      return;
    }
    const trackWidth = this.track.current.offsetWidth;
    const handleWith = this.handle.current.offsetWidth;
    this.setState(prevState => ({
      limit: trackWidth - handleWith,
      grab: -handleWith / 2,
      position: this.getPositionFromValue(prevState.value),
    }));
  };

  increaseByStep = () => {
    const decimals = countDecimals(this.props.step);
    const toFixedDecimals = toFixed(decimals);
    this.setState(
      prevState => {
        const value = toFixedDecimals(
          clamp(
            prevState.value + this.props.step,
            this.props.max,
            this.props.min,
          ),
        );
        return {
          value,
          position: this.getPositionFromValue(value),
        };
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      },
    );
  };

  decreaseByStep = () => {
    const decimals = countDecimals(this.props.step);
    const toFixedDecimals = toFixed(decimals);
    this.setState(
      prevState => {
        const value = toFixedDecimals(
          clamp(
            prevState.value - this.props.step,
            this.props.max,
            this.props.min,
          ),
        );
        return {
          value,
          position: this.getPositionFromValue(value),
        };
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      },
    );
  };

  // -------------------------------------
  //   Calculation
  // -------------------------------------

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
    const percentage = (position + diff - grab) / (limit - grab);
    return this.getValueFromPercentage(percentage);
  };

  render() {
    const position = this.getPositionFromValue(this.state.value);

    return (
      <SliderRoot
        ref={this.slider}
        disabled={this.props.disabled!}
        aria-valuemin={this.props.min}
        aria-valuemax={this.props.max}
        aria-valuenow={this.props.value}
      >
        {this.renderDecreaseButton()}
        <SliderWrapper
          size={this.props.size!}
          disabled={this.props.disabled!}
        >
          <Track
            size={this.props.size}
            onMouseDown={this.handleTrack}
            onMouseUp={() =>
              this.setState({
                active: false,
              })
            }
            onTouchStart={this.handleStart}
            onTouchEnd={this.handleEnd}
            trackRef={this.track}
            disabled={this.props.disabled!}
            selectionWidth={position - this.state.grab}
          />
          <Tooltip
            placement="bottom"
            popup={this.state.value}
            popupVisible={this.state.active && this.props.showTooltip}
          >
            <SlideHandler
              size={this.props.size!}
              ref={this.handle}
              style={{
                left: `${position}px`,
              }}
              onMouseDown={this.handleStart}
            />
          </Tooltip>
          <ReactResizeDetector
            handleWidth
            onResize={this.handleUpdate}
          />
        </SliderWrapper>
        {this.renderIncreaseButton()}
      </SliderRoot>
    );
  }

  getValueFromPercentage = (percentage: number) => {
    const decimals = countDecimals(this.props.step);
    const toFixedDecimals = toFixed(decimals);
    return toFixedDecimals(
      clamp(
        this.props.step *
          toFixedDecimals(
            (this.props.min +
              percentage * (this.props.max - this.props.min)) /
              this.props.step,
          ),
        this.props.max,
        this.props.min,
      ),
    );
  };

  // -------------------------------------
  //   Event Handler
  // -------------------------------------
  handleStart: React.ReactEventHandler = e => {
    if (this.props.disabled) {
      return;
    }
    if (this.props.onChangeStart) {
      this.props.onChangeStart(e);
    }
    this.setState({
      active: true,
      // @ts-ignore
      startX: e.clientX,
    });
    // @ts-ignore
    document.addEventListener('mousemove', this.handleDrag);
    // @ts-ignore
    document.addEventListener('mouseup', this.handleEnd);
  };

  handleTrack: React.MouseEventHandler<HTMLElement> = e => {
    if (this.props.disabled || !this.track.current) {
      return;
    }
    e.stopPropagation();
    const percentage =
      e.nativeEvent.offsetX / this.track.current.clientWidth;
    const value = this.getValueFromPercentage(percentage);
    this.setState({
      value,
      active: true,
      position: this.getPositionFromValue(value),
    });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  };

  handleDrag: React.MouseEventHandler<HTMLElement> = e => {
    e.stopPropagation();
    const value = this.getValueFromPosition(e.clientX);
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  };

  handleEnd: React.ReactEventHandler = e => {
    if (this.props.onChangeComplete) {
      this.props.onChangeComplete(e);
    }
    this.setState(prevState => ({
      active: false,
      position: this.getPositionFromValue(prevState.value),
    }));
    // @ts-ignore
    document.removeEventListener('mousemove', this.handleDrag);
    // @ts-ignore
    document.removeEventListener('mouseup', this.handleEnd);
  };

  handleIncrease = () => {
    if (this.props.disabled) {
      return;
    }
    this.setState({
      active: true,
    });
    this.increaseByStep();
    this.timeout = setTimeout(this.handleIncrease, this.start);
    this.start = this.start / 2;
  };

  handleDecrease = () => {
    if (this.props.disabled) {
      return;
    }
    this.setState({
      active: true,
    });
    this.decreaseByStep();
    this.timeout = setTimeout(this.handleDecrease, this.start);
    this.start = this.start / 2;
  };

  // -------------------------------------
  //   Render
  // -------------------------------------
  private renderDecreaseButton = () => {
    let buttonShow = this.props.hasButton;
    if (this.props.decreaseButton) {
      buttonShow = true;
    }
    if (buttonShow) {
      const buttonProps = {
        onMouseDown: this.handleDecrease,
        onMouseUp: () => {
          clearTimeout(this.timeout);
          this.setState({
            active: false,
          });
          this.start = 700;
        },
        style: {
          marginRight: '12px',
          flex: '0 0 auto',
          cursor: 'pointer',
        },
      };
      if (this.props.decreaseButton) {
        return React.cloneElement(this.props.decreaseButton, {
          ...buttonProps,
        });
      }
      return (
        <CircleButton {...buttonProps} size="xsmall">
          <svg
            width="10px"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="chevron-left"
            role="img"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            />
          </svg>
        </CircleButton>
      );
    }
    return null;
  };

  private renderIncreaseButton = () => {
    let buttonShow = this.props.hasButton;
    if (this.props.increaseButton) {
      buttonShow = true;
    }
    if (buttonShow) {
      const buttonProps = {
        onMouseDown: this.handleIncrease,
        onMouseUp: () => {
          this.setState({
            active: false,
          });
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
        <CircleButton {...buttonProps} size="xsmall">
          <svg
            width="10px"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </CircleButton>
      );
    }
    return null;
  };
}
