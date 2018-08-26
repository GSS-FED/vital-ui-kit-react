import * as React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';

const Root = styled.div``;

class GettingStarted extends React.PureComponent {
  state = {
    innerHeight: 0,
  };

  Ref = React.createRef();

  componentDidMount() {
    this.calcHeight();
  }

  calcHeight = () => {
    if (this.Ref && this.Ref.current) {
      this.setState({
        innerHeight: window.innerHeight - this.Ref.current.offsetTop,
      });
    }
  };

  render() {
    const README = fs.readFileSync(
      `${__dirname}/../../../../README.md`,
      'utf8',
    );
    return (
      <Root
        innerRef={this.Ref}
        style={{
          height: this.state.innerHeight,
          overflow: 'scroll',
        }}
        className="markdown-body"
      >
        <ReactMarkdown source={README} />
      </Root>
    );
  }
}

export default GettingStarted;
