export { default as FieldBase } from './components/FieldBase';
export { Radio, RadioGroup } from './radio';
export { Select, MultiSelect, Tag } from './select';
export { Checkbox, CheckboxGroup } from './checkbox';

export * from './switch';
export * from './input';
export * from './components/Label';
export * from './components/Hint';
export * from './components/Addon';
export * from './MultipleInput';
export * from './slider';
export * from './FieldInput';
export * from './textarea';

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
