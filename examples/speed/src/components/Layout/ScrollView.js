// @flow

import * as React from 'react';

type P ={
  children: React.ReactNode,
}

type S = {
  innerHeight: number,
}

class ScrollView extends React.Component<P, S> {
  state = {
    innerHeight: 0,
   }

   Ref = React.createRef();

   componentDidMount() {
    this.calcHeight();
  }

  calcHeight = () => {
    this.setState({
      innerHeight: window.innerHeight - this.Ref.current.offsetTop
    })
  }

  render() {
    return (
      <div
        ref={this.Ref}
        style={{
          height: this.state.innerHeight,
          overflow: 'scroll'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ScrollView;
