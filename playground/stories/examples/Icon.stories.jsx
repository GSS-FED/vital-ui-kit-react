/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { Icon, Tooltip } from '../../../packages/web/src';

import { defaultIcon } from '../../../packages/icon/src';
import Filter from '../Container/Filter';

const Display = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${'' /* margin: 10px; */} border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #c4d2eb;
  }
`;

storiesOf('Components | Icon', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('')(() => (
        <Filter>
          {value => (
            <Display>
              {defaultIcon.icons
                .filter(icon => {
                  if (value === '') {
                    return true;
                  }
                  return icon.properties.name.indexOf(value) > -1;
                })
                .map(icon => (
                  <Tooltip
                    key={icon.icon.defaultCode}
                    placement="bottom"
                    overlay={icon.properties.name}
                    trigger={['hover']}
                    mouseLeaveDelay={0}
                  >
                    <Wrapper>
                      <Icon
                        name={icon.icon.tags[0]}
                        size={32}
                        color="#2A487F"
                      />
                    </Wrapper>
                  </Tooltip>
                ))}
            </Display>
          )}
        </Filter>
      )),
    ),
  );
