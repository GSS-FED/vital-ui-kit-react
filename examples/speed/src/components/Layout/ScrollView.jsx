import * as React from 'react';

class ScrollView extends React.PureComponent {
  state = {
    innerHeight: 0,
  };

  Ref = React.createRef();

  componentDidMount() {
    this.calcHeight();
  }

  calcHeight = () => {
    this.setState({
      innerHeight: window.innerHeight - this.Ref.current.offsetTop,
    });
  };

  render() {
    return (
      <div
        ref={this.Ref}
        style={{
          height: this.state.innerHeight,
          overflow: 'scroll',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ScrollView;
