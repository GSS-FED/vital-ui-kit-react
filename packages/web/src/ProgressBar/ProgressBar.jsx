/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
// $FlowFixMe
import ResizeObserver from 'resize-observer-polyfill';

import Track from '../Track';
import { stateColor } from '../utils';

const Root = styled.div`
  display: block;
  margin-bottom: 14px;
`;

const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: ${props => (props.size === 'large' ? '8px' : '4px')};
  border: 1px solid transparent;
  line-height: 2em;
  width: 100%;
  height: 100%;
  left: -1px;
  right: auto;
  text-align: right;
`;

const Status = styled.div`
  min-width: 10px;
  white-space: nowrap;
  color: ${props =>
    stateColor(props, props.theme.progressBar.defaultColor)};
`;

const Label = styled(Status)`
  font-size: 12px;
`;

type State = {
  width: number,
};

type Props = {
  size?: 'small' | 'medium' | 'large',
  /** 1 - 100 precentage */
  value: number,
  /** whether to show current value label */
  showStatus?: boolean,
  /** text label */
  textLabel?: Node,
  // TODO: add label align options
  /** state alarm */
  alarm?: boolean,
  /** state warning */
  warning?: boolean,
  /** state success */
  success?: boolean,
};

/**
 * @render react
 * @name ProgressBar
 * @description show the progress with percentage of current status
 * @example
 * <ProgressBar
 *  value={60}
 *  showStatus
 *  textLabel="File uploading"
 * />
 */
class ProgressBar extends React.Component<Props, State> {
  static defaultProps = {
    size: 'medium',
    showStatus: false,
    textLabel: null,
    alarm: false,
    warning: false,
    success: false,
  };

  state = {
    width: 0,
  };

  componentDidMount() {
    this.handleUpdate();
    const resizeObserver = new ResizeObserver(this.handleUpdate);
    resizeObserver.observe(this.node);
  }

  componentWillReceiveProps(prevProps: Props, newProps: Props) {
    if (prevProps.value !== newProps.value) {
      this.getPositionFromValue();
    }
  }

  getPositionFromValue = () => {
    this.setState({
      width: Math.round(
        (this.props.value / 100) * this.node.offsetWidth,
      ),
    });
  };

  handleUpdate = () => {
    if (!this.node) {
      return;
    }
    this.getPositionFromValue();
  };

  node: ?HTMLElement;

  render() {
    const {
      alarm,
      warning,
      success,
      textLabel,
      size,
      value,
      showStatus,
    } = this.props;
    return (
      <Root>
        {showStatus && (
          <StatusWrapper size={size}>
            <Label alarm={alarm} warning={warning} success={success}>
              {textLabel && textLabel}
            </Label>
            <Status>
              {value}
              %
            </Status>
          </StatusWrapper>
        )}
        <Track
          alarm={alarm}
          warning={warning}
          success={success}
          trackRef={s => {
            this.node = s;
          }}
          size={size}
          selectionWidth={this.state.width}
        />
      </Root>
    );
  }
}

export default ProgressBar;
