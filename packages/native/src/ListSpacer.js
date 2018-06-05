// @flow
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Keyboard, Dimensions, Animated } from 'react-native';

const DURATION = 200;

export type ListSpacerProps = {
  duration?: number,
  children?: (renderProps: any) => React.ReactNode,
  render?: (renderProps: any) => React.ReactNode,
};

export type ListSpacerState = {
  // screenHeight: number,
  flatListHeight: Animated.Value,
};

class ListSpacer extends React.PureComponent<
  ListSpacerProps,
  ListSpacerState,
> {
  static defaultProps = {
    duration: DURATION,
  };
  state = {
    // screenHeight: Dimensions.get('window').height,
    flatListHeight: new Animated.Value(
      Dimensions.get('window').height,
    ),
  };

  _keyboardDidShowListener: any;
  _keyboardDidHideListener: any;

  componentDidMount() {
    this._keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyBoardDidShow,
    );
    this._keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyBoardDidHide,
    );
  }

  componentWillUnmount() {
    this._keyboardDidShowListener.remove();
    this._keyboardDidHideListener.remove();
  }

  _keyBoardDidShow = e => {
    Animated.timing(this.state.flatListHeight, {
      toValue:
        Dimensions.get('window').height - e.endCoordinates.height,
      duration: this.props.duration,
    }).start();
  };

  _keyBoardDidHide = () => {
    Animated.timing(this.state.flatListHeight, {
      toValue: Dimensions.get('window').height,
      duration: this.props.duration,
    }).start();
  };

  render() {
    const renderProps = {
      flatListHeight: this.state.flatListHeight,
    };

    if (this.props.children) {
      return this.props.children(renderProps);
    }

    return this.props.render(renderProps);
  }
}

export default ListSpacer;
