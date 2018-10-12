// https://github.com/renatorib/react-powerplug/
// right now has some bugs at @babel/runtime

import React from 'react';

const noop = () => {};

type Updater<T> = (updater: ((value: T) => T) | T) => void;
type Reset = (cb?: () => void) => void;
type ValueChange<T> = (value: T) => void;
type ValueRender<T> = (
  props: { value: T; set: Updater<T>; reset: Reset },
) => React.ReactNode;

interface ValueProps<T> {
  initial: T;
  onChange?: ValueChange<T>;
  children: ValueRender<T>;
}

export class Value<T> extends React.Component<
  ValueProps<T>,
  { value: T }
> {
  state = {
    value: this.props.initial,
  };

  _set = (updater, cb = noop) => {
    const { onChange = noop } = this.props;

    this.setState(
      typeof updater === 'function'
        ? state => ({ value: updater(state.value) })
        : { value: updater },
      () => {
        onChange(this.state.value);
        cb();
      },
    );
  };

  _reset = (cb = noop) => {
    this._set(this.props.initial, cb);
  };

  render() {
    return this.props.children({
      value: this.state.value,
      set: this._set,
      reset: this._reset,
    });
  }
}

type ToggleRender = (
  props: {
    on: boolean;
    toggle: () => void;
    set: Updater<boolean>;
    reset: Reset;
    setOn: () => void;
    setOff: () => void;
  },
) => React.ReactNode;

export const Toggle: React.SFC<{
  initial?: boolean;
  onChange?: ValueChange<boolean>;
  children: ToggleRender;
}> = ({ initial = false, onChange, ...props }) => (
  <Value<boolean> initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      props.children({
        on: value,
        set: value => set(value),
        reset,
        toggle: () => set(on => !on),
        setOn: () => set(true),
        setOff: () => set(false),
      })
    }
  </Value>
);
