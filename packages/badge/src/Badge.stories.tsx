import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from './Badge';

storiesOf('Packages | Badge', module).add('Basic', () => (
  <Badge>100</Badge>
));
