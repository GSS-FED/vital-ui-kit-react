// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import boxShadow from './helper/boxShadow';

const Root = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Box = styled.View`
  width: ${props => props.size || 16};
  height: ${props => props.size || 16};
  border-radius: 3;
  background: white;
  margin-right: 17;
  ${boxShadow(0, 4, 5, '#000', 0.17)};
`;

const Check = styled(Icon)`
  position: absolute;
  left: 2;
`;

export type CheckboxProps = {
  checked: boolean,
  size: number,
  onChange?: (checked: boolean) => {},
};

export type CheckboxState = {
  checked: boolean,
};

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  static defaultProps = {
    checked: false,
    size: 16,
  };
  state = {
    checked: this.props.checked,
  };

  componentWillReceiveProps(nextProps: P) {
    this.setState({
      checked: nextProps.checked,
    });
  }

  onToggle = () => {
    this.setState({
      checked: !this.state.checked,
    });
    if (this.props.onChange) {
      this.props.onChange(this.state.checked);
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onToggle}>
        <Root checked={this.state.checked}>
          <Box size={this.props.size}>
            {this.state.checked && (
              <Check
                color="#999"
                name="md-checkmark"
                size={this.props.size}
              />
            )}
          </Box>
        </Root>
      </TouchableOpacity>
    );
  }
}

export default Checkbox;
