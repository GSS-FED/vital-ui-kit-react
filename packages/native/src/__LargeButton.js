// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';

const LinearGradientWrapper = styled(LinearGradient)`
  height: 60;
  width: 60;
  border-radius: 3;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.9;
  shadow-radius: 5px;
  ${'' /* shadow-color: ${props => props.shadowColor}; */} shadow-offset: 0px 5px;
`;

const Root = styled.View`
  height: 60;
  width: 60;
  border-radius: 3;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.26;
  shadow-radius: 5px;
  ${'' /* shadow-color: ${props => props.shadowColor || props.bg}; */}
  background-color: ${props => props.bg};
  shadow-offset: 0px 5px;
`;

type Props = {
  icon?: string,
  iconColor?: string,
  iconSize?: number,
  bgg?: Array<string>,
  bg?: string,
  shadowColor?: string,
  onPress: () => {},
};

class LargeButton extends React.Component<Props> {
  static defaultProps = {
    icon: 'ios-add',
    iconColor: '#fff',
    iconSize: 45,
    bg: '#fff',
    onPress: () => {},
  };

  renderIcon = () => (
    <Icon
      color={this.props.iconColor}
      size={this.props.iconSize}
      name={this.props.icon}
    />
  );

  normalBackground = () => (
    <Root bg={this.props.bg} shadowColor={this.props.shadowColor}>
      {this.renderIcon()}
    </Root>
  );

  LinearGradientBackground = () => {
    const shadow = this.props.bgg && this.props.bgg[0];
    return (
      <LinearGradientWrapper
        colors={this.props.bgg}
        shadowColor={this.props.shadowColor || shadow}
      >
        {this.renderIcon()}
      </LinearGradientWrapper>
    );
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.bgg
          ? this.LinearGradientBackground()
          : this.normalBackground()}
      </TouchableOpacity>
    );
  }
}

export default LargeButton;
