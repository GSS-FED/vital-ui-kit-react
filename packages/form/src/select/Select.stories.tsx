import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import faker from 'faker';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Select, MultiSelect, Tag } from '.';
import { MoreOption } from '@vital-ui/react-icon';

const FormWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
`;

type Item = {
  content: string;
  value: string;
};

const items: Item[] = new Array(100).fill({}).map(() => ({
  content: faker.system.fileName(),
  value: faker.system.fileExt(),
}));

class SelectExample extends React.Component<
  {},
  { selectedItem?: Item }
> {
  state = {
    selectedItem: undefined,
  };

  onChangeItem = selectedItem => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    return (
      <Select<Item>
        selectedItem={this.state.selectedItem}
        itemToString={item => (item ? item.value : '')}
        onChange={this.onChangeItem}
        shouldRenderItem={(item, value) =>
          value ? item.value.includes(value) : false
        }
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

class DropdownExample extends React.Component<
  {},
  { selectedItem?: Item }
> {
  state: { selectedItem?: Item } = {
    selectedItem: undefined,
  };

  onChangeItem = selectedItem => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    const defaultText = 'Select an item';
    return (
      <Select<Item>
        selectedItem={this.state.selectedItem}
        itemToString={item => (item ? item.content : '')}
        onChange={this.onChangeItem}
      >
        <Select.Button
          text={
            this.state.selectedItem
              ? this.state.selectedItem.content || defaultText
              : defaultText
          }
        >
          <MoreOption name="caret-down" fontSize={15} />
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

class TagExample extends React.Component<
  {},
  { selectedItem: Item[] }
> {
  state: { selectedItem: Item[] } = {
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
      <MultiSelect<Item>
        // @ts-ignore
        itemToString={item => (item ? item.content : '')}
        onChange={this.onChangeItem}
        values={this.state.selectedItem}
        shouldRenderItem={(item, value) =>
          // @ts-ignore
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
            // @ts-ignore
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
