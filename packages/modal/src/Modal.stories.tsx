import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';

import { Button } from '../../button/src/Button';
import { Card } from '../../card/src';
import { Modal } from '.';

storiesOf('Packages | Modal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <ModalExample />);

class ModalExample extends Component {
  state = { showModal: false };

  render() {
    return (
      <Fragment>
        <Button
          subtle
          onClick={() => this.setState({ showModal: true })}
        >
          Show
        </Button>
        <Modal show={this.state.showModal}>
          <Card width="300px" height="220px">
            <Card.Header badge="99+" title="This is a Card" />
            <Card.Content>Welcome to Vital UI Kit!</Card.Content>
            <Card.Footer>
              <Card.FooterButton
                onClick={() => this.setState({ showModal: false })}
              >
                Cancel
              </Card.FooterButton>
              <Card.FooterButton
                primary
                onClick={() => this.setState({ showModal: false })}
              >
                Confirm
              </Card.FooterButton>
            </Card.Footer>
          </Card>
        </Modal>
      </Fragment>
    );
  }
}
