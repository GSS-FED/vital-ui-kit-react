// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Dimensions, Animated, TextStyle } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
  background-color: transparent;
  border-color: gainsboro;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 8;
  padding-left: 10;
`;
const AnimatedHeader = Animated.createAnimatedComponent(Header);

const AvatarView = styled.View`
  position: absolute;
  right: 15;
  bottom: 18;
`;

export type LargeHeaderProps = {
  children: (onScroll: () => void) => React.ReactNode,
  title: string,
  titleStyle?: TextStyle,
  avatar?: React.ReactNode,
};

export type LargeHeaderState = {
  scrollOffset: Animated.Value,
  titleWidth: number,
};

class LargeHeader extends React.Component<
  LargeHeaderProps,
  LargeHeaderState,
> {
  state = {
    scrollOffset: new Animated.Value(0),
    titleWidth: 0,
  };
  // eslint-disable-next-line
  offset: number = 0;

  componentDidMount() {
    this.state.scrollOffset.addListener(({ value }) => {
      this.offset = value;
    });
  }

  onScroll = (e: any) => {
    const scrollSensitivity = 4 / 3;
    const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
    this.state.scrollOffset.setValue(offset);
  };

  render() {
    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;
    const headerHeight = scrollOffset.interpolate({
      inputRange: [0, 200],
      outputRange: [170, 84],
      extrapolate: 'clamp',
    });
    return (
      <React.Fragment>
        <AnimatedHeader
          style={[
            {
              // paddingHorizontal: screenWidth * 0.05,
              width: screenWidth,
              height: headerHeight,
            },
          ]}
        >
          {this.props.avatar && (
            <AvatarView>{this.props.avatar}</AvatarView>
          )}
          <Animated.Text
            onLayout={e => {
              if (this.offset === 0 && this.state.titleWidth === 0) {
                const titleWidth = e.nativeEvent.layout.width;
                this.setState({ titleWidth });
              }
            }}
            style={{
              color: '#808999',
              fontSize: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [64, 30],
                extrapolate: 'clamp',
              }),
              ...this.props.titleStyle,
            }}
          >
            {this.props.title}
          </Animated.Text>
        </AnimatedHeader>
        {this.props.children(this.onScroll)}
      </React.Fragment>
    );
  }
}

export default LargeHeader;
