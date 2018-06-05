// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from 'styled-components/native';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

const PressOutsideView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export type PressOutsideProps = {
  onPressOutside: () => {},
} & TouchableWithoutFeedbackProps;

class PressOutside extends React.Component<PressOutsideProps> {
  static defaultProps = {
    onPressOutside: () => {},
  };
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPressOutside}
        {...this.props}
      >
        <PressOutsideView />
      </TouchableWithoutFeedback>
    );
  }
}

export default PressOutside;
