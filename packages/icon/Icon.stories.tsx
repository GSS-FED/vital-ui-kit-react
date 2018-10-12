import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import * as IconBase from './src';
import { Tooltip } from '../tooltip/src';

import Filter from './Filter';

const Display = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #c4d2eb;
  }
`;

storiesOf('Packages | Icon', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Filter>
      {value => (
        <Display>
          {icons
            .filter(ic => {
              if (value === '') {
                return true;
              }
              return (
                ic.toLowerCase().indexOf(value.toLowerCase()) > -1
              );
            })
            .map(icon => {
              const Icon = IconBase[icon];
              return (
                <Tooltip
                  key={icon}
                  placement="bottom"
                  popup={icon}
                  action={['hover']}
                  mouseLeaveDelay={0}
                >
                  <Wrapper>
                    <Icon fontSize={32} color="#2A487F" />
                  </Wrapper>
                </Tooltip>
              );
            })}
        </Display>
      )}
    </Filter>
  ));

const icons = [
  'Archive',
  'Backward',
  'Bell',
  'BirthdayCake',
  'Book',
  'Book1',
  'Bookmark',
  'BoxCheck',
  'BoxDuplicate',
  'BoxS',
  'Briefcase1',
  'Briefcase2',
  'Browser',
  'Bug',
  'Building',
  'Bus',
  'Cachet',
  'Calculator',
  'CalendarBoxes',
  'CalendarChecked',
  'CalendarClose',
  'CalendarEdit',
  'CalendarEmpty',
  'CalendarHint',
  'CalendarMinus',
  'CalendarPlus',
  'Camera',
  'Car',
  'Cash',
  'ChartBarchart',
  'ChartLinechart',
  'ChartPiechart',
  'ChartTrend',
  'Check',
  'ChecklistChecked',
  'ChecklistUnchecked',
  'CircleCheck',
  'CircleInfo',
  'CircleQuestion',
  'Clock',
  'Close',
  'Cloud',
  'CloudDownload',
  'CloudUpload',
  'Code',
  'Coffee',
  'CreditCard',
  'Diamond',
  'DoorClosed',
  'DoorOpened',
  'Edit',
  'Export',
  'Eye',
  'EyeBlind',
  'EyeO',
  'FaceId',
  'FileCode',
  'FileContent',
  'FileContentDuplicate',
  'FileDuplicate',
  'FileEmpty',
  'FileExcel',
  'FileJpg',
  'FileKeynote',
  'FileNumbers',
  'FilePages',
  'FilePaper',
  'FilePdf',
  'FilePlus',
  'FilePng',
  'FilePowerpoint',
  'FileS',
  'FileSketch',
  'FileUnknow',
  'FileWord',
  'Filter',
  'FinderClosed',
  'FinderOpened',
  'FinderPlus',
  'FirstAid',
  'Flag',
  'Gear',
  'Glasses',
  'HardDriveDownload',
  'Heart',
  'House',
  'Human',
  'IdCard',
  'Key',
  'Lamp',
  'Link',
  'Magnifier',
  'Mail',
  'MailRead',
  'MessageRounded',
  'MessageRoundedClose',
  'MessageRoundedContent',
  'MessageRoundedDialogue',
  'MessageRoundedHint',
  'MessageRoundedMore',
  'MessageRoundedPlus',
  'MessageRoundedSmile',
  'MessageSquare',
  'MessageSquareClose',
  'MessageSquareContent',
  'MessageSquareHint',
  'MessageSquareMore',
  'MessageSquarePlus',
  'MessageSquareSmile',
  'Moon',
  'MoreOption',
  'Music',
  'Mute',
  'News',
  'Notification',
  'Pen',
  'Pin',
  'Rocket',
  'Scale',
  'Setting',
  'Share',
  'Sofa',
  'Spanner',
  'StampChecked',
  'Star',
  'Tag',
  'Trash',
  'Umbrella',
  'WaterDrop',
  'ZoomIn',
  'ZoomOut',
];
