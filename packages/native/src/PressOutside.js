// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

const PressOutsideView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

type Props = {
  onPressOutside: () => {},
};

class PressOutside extends React.Component<Props> {
  static defaultProps = {
    onPressOutside: () => {},
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPressOutside}>
        <PressOutsideView />
      </TouchableWithoutFeedback>
    );
  }
}

export default PressOutside;
