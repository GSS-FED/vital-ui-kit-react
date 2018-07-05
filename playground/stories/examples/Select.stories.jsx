/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-array-index-key */

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
  MultiSelect,
  Tag,
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
        <Select.Dropdown>
          {items.map((item, i) => (
            <Select.DropdownItem
              key={item.content}
              item={item}
              index={i}
            >
              {item.value}
            </Select.DropdownItem>
          ))}
        </Select.Dropdown>
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
        <Select.Button
          text={this.state.selectedItem.content || 'Select an item'}
        >
          <Icon name="caret-down" size={15} />
        </Select.Button>
        <Select.Dropdown>
          {items.map((item, i) => (
            <Select.DropdownItem
              key={item.content}
              item={item}
              index={i}
            >
              {item.content}
            </Select.DropdownItem>
          ))}
        </Select.Dropdown>
      </Select>
    );
  }
}

class TagExample extends React.Component {
  state = {
    selectedItem: [],
  };

  onChangeItem = selectedItem => {
    this.setState({ selectedItem });
  };

  onDeleteItem = item => {
    this.setState(prevState => ({
      selectedItem: prevState.selectedItem.filter(
        x => x.content !== item.content,
      ),
    }));
  };

  render() {
    return (
      <MultiSelect
        itemToString={item => (item ? item.content : '')}
        onChange={this.onChangeItem}
        values={this.state.selectedItem}
        shouldRenderItem={(item, value) =>
          item.content.includes(value)
        }
        selection={this.state.selectedItem.map((item, i) => (
          <Tag key={i} onCloseClick={() => this.onDeleteItem(item)}>
            {item.content}
          </Tag>
        ))}
      >
        <MultiSelect.Dropdown>
          {items
            .filter(item => !this.state.selectedItem.includes(item))
            .map((item, i) => (
              <MultiSelect.DropdownItem
                key={item.content}
                item={item}
                index={i}
              >
                {item.content}
              </MultiSelect.DropdownItem>
            ))}
        </MultiSelect.Dropdown>
      </MultiSelect>
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
  );
