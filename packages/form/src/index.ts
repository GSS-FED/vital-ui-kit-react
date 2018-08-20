export { default as Hint } from 'packages/form/src/components/Hint';
export { default as Addon } from 'packages/form/src/components/Addon';
export { default as Label } from 'packages/form/src/components/Label';
export {
  default as FieldBase,
} from 'packages/form/src/components/FieldBase';

export { default as Input } from 'packages/form/src/input/Input';
export {
  default as StatelessInput,
} from 'packages/form/src/input/StatelessInput';

export {
  default as TextArea,
} from 'packages/form/src/textarea/TextArea';
export {
  default as StatelessTextArea,
} from 'packages/form/src/textarea/StatelessTextArea';

export {
  default as MultipleInput,
} from 'packages/form/src/MultipleInput';
export { default as FieldInput } from 'packages/form/src/FieldInput';

export { Radio, RadioGroup } from 'packages/form/src/radio';
export { Select, MultiSelect, Tag } from 'packages/form/src/select';
export { Checkbox, CheckboxGroup } from 'packages/form/src/checkbox';
export { default as Switch } from 'packages/form/src/switch';
export { default as Slider } from 'packages/form/src/slider';

/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 * @render react
 * @name Form
 * @description Vital Form element collection
 * @example
 * <FormWrapper>
 *   <FieldInput isRequired label="Username">
 *     <Input placeholder="Enter your username" />
 *   </FieldInput>
 *   <FieldInput isRequired label="Fullname">
 *     <MultipleInput>
 *     <Input placeholder="First Name" />
 *     <Input placeholder="Last Name" />
 *     </MultipleInput>
 *   </FieldInput>
 *   <FieldInput isRequired label="Birthday">
 *     <MultipleInput>
 *       <Input placeholder="Month" />
 *       <Input placeholder="Day" />
 *       <Input placeholder="Year" />
 *     </MultipleInput>
 *   </FieldInput>
 *   <FieldInput label="Website">
 *     <MultipleInput>
 *        <Addon>http://</Addon>
 *        <Input placeholder="LabelAddon on the left" />
 *      </MultipleInput>
 *   </FieldInput>
 *   <FieldInput label="Comment" inline>
 *      <TextArea placeholder="Comment here" minRows={3} />
 *   </FieldInput>
 * </FormWrapper>
 */
