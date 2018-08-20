/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import axios from 'axios';

type State = {
  data?: any,
};

type Props = {
  url: string,
  children: any => React.Element<any>,
};

class LoadData extends React.Component<Props, State> {
  state = {
    data: null,
  };

  componentDidMount() {
    axios.get(this.props.url).then(dataset => {
      const { data } = dataset;
      this.setState({ data });
    });
  }

  render() {
    if (this.state.data) {
      return this.props.children(this.state.data);
    }
    return null;
  }
}

export default LoadData;
