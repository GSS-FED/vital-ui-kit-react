export { default as Hint } from './components/Hint';
export { default as Addon } from './components/Addon';
export { default as Label } from './components/Label';
export { default as FieldBase } from './components/FieldBase';

export { default as Input } from './Input/Input';
export { default as StatelessInput } from './Input/StatelessInput';

export { default as TextArea } from './TextArea/TextArea';
export {
  default as StatelessTextArea,
} from './TextArea/StatelessTextArea';

export { default as MultipleInput } from './MultipleInput';
export { default as FieldInput } from './FieldInput';

export { Radio, RadioGroup } from './radio';
export { default as Select} from './select';
export { Checkbox, CheckboxGroup } from './checkbox'
// TODO: Form html tag
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
