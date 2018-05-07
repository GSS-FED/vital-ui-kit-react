// @flow
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Keyboard, Dimensions, Animated } from 'react-native';

const DURATION = 200;

type Props = {
  children?: (renderProps: any) => React.Node,
  render?: (renderProps: any) => React.Node
};

type State = {
  // screenHeight: number,
  flatListHeight: Animated.Value
};

class ListSpacer extends React.PureComponent<Props, State> {
  state = {
    // screenHeight: Dimensions.get('window').height,
    flatListHeight: new Animated.Value(
      Dimensions.get('window').height
    )
  };

  _keyboardDidShowListener: any;
  _keyboardDidHideListener: any;

  componentDidMount() {
    this._keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyBoardDidShow
    );
    this._keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyBoardDidHide
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
      duration: DURATION
    }).start();
  };

  _keyBoardDidHide = () => {
    Animated.timing(this.state.flatListHeight, {
      toValue: Dimensions.get('window').height,
      duration: DURATION
    }).start();
  };

  render() {
    const renderProps = {
      flatListHeight: this.state.flatListHeight
    };

    if (this.props.children) {
      return this.props.children(renderProps);
    }

    return this.props.render(renderProps);
  }
}

export default ListSpacer;
