import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';

import {
  Input,
  FieldInput,
  TextArea,
  MultipleInput,
  Hint,
  Addon,
  Switch,
  Checkbox,
  CheckboxGroup,
  Select,
  FieldInputItem,
} from './src';
import { Moon, MoreOption } from '../icon/src';
import { Button } from '../button/src/Button';
import { Value } from '@vital-ui/react-utils';

const FormWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
`;

storiesOf('Packages | Form', module)
  .addDecorator(withKnobs)
  .add('Full Example', () => (
    <FormWrapper>
      <FieldInput required label="Username">
        <Input alarm placeholder="Enter your username" />
      </FieldInput>
      <FieldInput required label="Fullname">
        <MultipleInput>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </MultipleInput>
      </FieldInput>
      <FieldInput required label="Birthday">
        <MultipleInput>
          <Input placeholder="Month" />
          <Input placeholder="Day" />
          <Input placeholder="Year" />
        </MultipleInput>
      </FieldInput>
      <FieldInput label="Phone" inline>
        <MultipleInput paddingBetween={6}>
          <FieldInputItem>
            <Input type="tel" />
            <Hint alarm position="absolute">
              Required
            </Hint>
          </FieldInputItem>
          <Value<string | null> initial={null}>
            {({ value, set }) => (
              <Select<string | null>
                selectedItem={value}
                itemToString={item => (item ? item : '')}
                onChange={selectedItem => set(selectedItem)}
              >
                <Select.Dropdown
                  popup={['phone', 'mobile', 'fax'].map((item, i) => (
                    <Select.DropdownItem
                      key={item}
                      item={item}
                      index={i}
                    >
                      {item}
                    </Select.DropdownItem>
                  ))}
                >
                  <Select.Button text={value ? value : 'Select'}>
                    <MoreOption color="#A8A8B2" />
                  </Select.Button>
                </Select.Dropdown>
              </Select>
            )}
          </Value>
        </MultipleInput>
      </FieldInput>
      <FieldInput label="Website">
        <MultipleInput>
          <Addon>http:</Addon>
          <Input placeholder="LabelAddon on the left" />
        </MultipleInput>
      </FieldInput>
      <FieldInput label="Comment" inline>
        <TextArea placeholder="Comment here" rows={3} />
      </FieldInput>
      <FieldInput label="Send Email" inline>
        <Value<boolean> initial={false}>
          {({ value, set }) => (
            <Switch
              checked={value}
              onChange={set}
              disabled={boolean('Switch Disabled', false)}
              round={boolean('Switch Round', false)}
            />
          )}
        </Value>
      </FieldInput>
      <FieldInput label="Interested in" inline>
        <CheckboxGroup
          style={{ paddingTop: 'calc(0.46633rem + 2px)' }}
        >
          <Checkbox
            round={boolean('round', false)}
            disabled={boolean('disable', false)}
            label="React"
          />
          <Checkbox
            defaultChecked
            round={boolean('round', false)}
            disabled={boolean('disable', false)}
            label="CSS"
          />
          <Checkbox
            round={boolean('round', false)}
            disabled={boolean('disable', false)}
            label="Vital"
          />
        </CheckboxGroup>
      </FieldInput>
    </FormWrapper>
  ))
  .add('Input with Label', () => (
    <FormWrapper>
      <FieldInput
        required={boolean('Required 1', true)}
        align={select('Align', {
          left: 'Left',
          right: 'Right',
        })}
        label="Username"
        inline={boolean('Inline', false)}
      >
        <Input
          placeholder={text('Placeholder 1', 'Enter your username')}
        />
      </FieldInput>
    </FormWrapper>
  ))
  .add('Hint', () => (
    <FormWrapper>
      <FieldInput label="Username" inline>
        <Input defaultValue="dramsign" />
        <Hint success>Username is available</Hint>
        <Hint>Example: James Allen</Hint>
      </FieldInput>
    </FormWrapper>
  ))
  .add('Multiple & Addon', () => (
    <FormWrapper>
      <FieldInput label="Weight" inline>
        <MultipleInput>
          <Input placeholder="LabelAddon on the right" />
          <Addon>kg</Addon>
        </MultipleInput>
      </FieldInput>
      <FieldInput label="Price" inline>
        <MultipleInput>
          <Addon>
            <Moon name="dollar" />
          </Addon>
          <Input placeholder="LabelAddon on the both" />
          <Addon>.00</Addon>
        </MultipleInput>
      </FieldInput>
      <FieldInput label="Button" inline>
        <MultipleInput>
          <Input placeholder="LabelAddon on the both" />
          <Button nature="primary" flat>
            Search
          </Button>
        </MultipleInput>
      </FieldInput>
    </FormWrapper>
  ))
  .add('Multiple & Button', () => (
    <FormWrapper>
      <FieldInput label="Button" inline>
        <MultipleInput>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
          <Input placeholder="LabelAddon on the both" />
        </MultipleInput>
      </FieldInput>
      <FieldInput label="Button" inline>
        <MultipleInput>
          <Input placeholder="LabelAddon on the both" />
          <Button nature="primary" flat>
            Search
          </Button>
        </MultipleInput>
      </FieldInput>
    </FormWrapper>
  ));

storiesOf('Packages | Form/TextArea', module)
  .addDecorator(withKnobs)
  .add('Controlled TextArea', () => (
    <TextArea
      placeholder={text('Placeholder', 'Controlled Input')}
      disabled={boolean('Disabled', false)}
      alarm={boolean('Alarm', false)}
      warning={boolean('Warning', false)}
      rows={3}
    />
  ));
