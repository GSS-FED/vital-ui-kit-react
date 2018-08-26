import React from 'react';
import { Card } from '@vital-ui/react';

const CardCommon = ({ content = null, onConfirm }) => (
  <Card width="300px" height="220px">
    <Card.Header badge="99+" title="This is a Card" />
    <Card.Content>
      {content || 'Welcome to Vital UI Kit!'}
    </Card.Content>
    <Card.Footer>
      <Card.FooterButton onClick={onConfirm}>
        Cancel
      </Card.FooterButton>
      <Card.FooterButton onClick={onConfirm} primary>
        Confirm
      </Card.FooterButton>
    </Card.Footer>
  </Card>
);

export default CardCommon;
