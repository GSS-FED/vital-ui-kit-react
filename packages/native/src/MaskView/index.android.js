// @flow

import * as React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';

const View = styled.View``;

const LinearCover = styled(LinearGradient)`
  flex: 1;
`;

const LinearCoverLeft = styled(LinearGradient)`
  position: absolute;
  top: 40;
  left: 0;
  width: 46;
  height: 30;
  z-index: 3;
`;

const AnimatedLinearCoverLeft = Animated.createAnimatedComponent(
  LinearGradient,
);

type Props = {
  linear: Array<string>,
  locations: Array<number>,
  children: React.ReactNode,
};

class MaskView extends React.PureComponent<Props> {
  static defaultProps = {
    linear: ['transparent', 'black'],
    locations: [0, 0.05],
  };
  render() {
    return (
      <View>
        <LinearCover
          colors={this.props.linear}
          locations={this.props.locations}
        />
        {this.props.children}
      </View>
    );
  }
}

export default MaskView;
