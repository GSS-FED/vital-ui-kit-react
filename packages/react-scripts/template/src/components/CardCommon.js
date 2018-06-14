import * as React from 'react';
import { Card } from '@gssfed/vital-ui-kit-react';

const CardCommon = ({ content = null, onConfirm }) => (
  <Card width="300px" height="220px" style={{ margin: 'auto' }}>
    <Card.Header badge="99+" title="This is a Card" />
    <Card.Container>{content || 'Welcome to Vital UI Kit!'}</Card.Container>
    <Card.Footer>
      <Card.FooterButton onClick={onConfirm}>Cancel</Card.FooterButton>
      <Card.FooterButton onClick={onConfirm} primary>
        Confirm
      </Card.FooterButton>
    </Card.Footer>
  </Card>
);

export default CardCommon;
