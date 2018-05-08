// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import styled from 'styled-components/native';
import { MaskedViewIOS } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  linear: Array<string>,
  locations: Array<number>,
  children: React.ReactNode,
};

const LinearCover = styled(LinearGradient)`
  flex: 1;
`;

class MaskView extends React.PureComponent<Props> {
  static defaultProps = {
    linear: ['transparent', 'black'],
    locations: [0, 0.05],
  };
  render() {
    return (
      <MaskedViewIOS
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <LinearCover
            colors={this.props.linear}
            locations={this.props.locations}
          />
        }
      >
        {this.props.children}
      </MaskedViewIOS>
    );
  }
}

export default MaskView;
