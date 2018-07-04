/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-multi-comp */

import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import faker from 'faker';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import {
  Label,
  Input,
  Select,
  Icon,
} from '@vital-ui/react';

const FormWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
`;

const items = new Array(100).fill({}).map(() => ({
  content: faker.system.fileName(),
  value: faker.system.fileExt(),
}));

class SelectExample extends React.Component {
  state = {
    selectedItem: '',
  };

  onChangeItem = selectedItem => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    return (
      <Select
        selectedItem={this.state.selectedItem}
        itemToString={item => (item ? item.value : '')}
        onChange={this.onChangeItem}
        shouldRenderItem={(item, value) => item.value.includes(value)}
      >
        <Select.Input leftIcon="search" rightIcon="times-circle" />
        <Select.Menu>
          {items.map((item, i) => (
            <Select.Item key={item.content} item={item} index={i}>
              {item.value}
            </Select.Item>
          ))}
        </Select.Menu>
      </Select>
    );
  }
}

class DropdownExample extends React.Component {
  state = {
    selectedItem: '',
  };

  onChangeItem = selectedItem => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    return (
      <Select
        selectedItem={this.state.selectedItem}
        itemToString={item => (item ? item.content : '')}
        onChange={this.onChangeItem}
      >
        <Select.Button>
          {this.state.selectedItem.value || 'Select an item'}
          <Icon
            name="caret-down"
            size={15}
            style={{ float: 'right' }}
          />
        </Select.Button>
        <Select.Menu>
          {items.map((item, i) => (
            <Select.Item key={item.content} item={item} index={i}>
              {item.content}
            </Select.Item>
          ))}
        </Select.Menu>
      </Select>
    );
  }
}

class TagExample extends React.Component {
  state = {};

  render() {
    return (
      <Select
        selectedItem={this.state.selectedItem}
        itemToString={item => (item ? item.value : '')}
        onChange={this.onChangeItem}
        shouldRenderItem={(item, value) => item.value.includes(value)}
      >
        <Select.Tags />
        <Select.Menu>
          {items.map((item, i) => (
            <Select.Item key={item.content} item={item} index={i}>
              {item.value}
            </Select.Item>
          ))}
        </Select.Menu>
      </Select>
    );
  }
}

storiesOf('Packages | Form/Select', module)
  .addDecorator(withKnobs)
  .add(
    'Dropdown',
    withInfo(``)(
      withNotes('')(() => (
        <FormWrapper>
          <DropdownExample />
        </FormWrapper>
      )),
    ),
  )
  .add(
    'Autocomplete',
    withInfo(``)(
      withNotes('')(() => (
        <FormWrapper>
          <SelectExample />
        </FormWrapper>
      )),
    ),
  )
  .add(
    'Tag',
    withInfo(``)(
      withNotes('')(() => (
        <FormWrapper>
          <TagExample />
        </FormWrapper>
      )),
    ),
  )
