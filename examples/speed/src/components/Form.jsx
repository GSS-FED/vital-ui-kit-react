/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { withFormik } from 'formik';
import {
  Box,
  FieldInput,
  Input,
  MultipleInput,
  Addon,
  TextArea,
  Hint,
  Button,
} from '@vital-ui/react';

class Form extends PureComponent {
  state = {};

  render() {
    // eslint-disable-rule: no-unused-vars
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    } = this.props;
    return (
      <Box style={{ maxWidth: 500 }} p="40px">
        <form onSubmit={handleSubmit}>
          <FieldInput required label="Username">
            <Input
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
            />
            {touched.username &&
              !!values.username && (
                <Hint text="Username is available" success />
              )}
            {touched.username &&
              !values.username && (
                <Hint text="Username is required" alarm />
              )}
          </FieldInput>
          <FieldInput required label="Fullname">
            <MultipleInput>
              <Input
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {/* {touched.username && !values.username && <Hint text="Full name required" warning />} */}
            </MultipleInput>
          </FieldInput>
          <FieldInput label="Birthday">
            <MultipleInput>
              <Input
                name="month"
                placeholder="Month"
                value={values.month}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Input
                name="day"
                placeholder="Day"
                value={values.day}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Input
                name="year"
                placeholder="Year"
                value={values.year}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </MultipleInput>
            <Hint text="eg. 1986 04 02" />
          </FieldInput>
          <FieldInput label="Website">
            <MultipleInput>
              <Addon>http://</Addon>
              <Input
                name="website"
                placeholder="LabelAddon on the left"
                value={values.website}
                onChange={handleChange}
              />
            </MultipleInput>
          </FieldInput>
          <FieldInput label="Comment" inline>
            <TextArea
              name="comment"
              placeholder="Comment here"
              minRows={3}
              value={values.comment}
              onChange={handleChange}
            />
          </FieldInput>
          <Box style={{ textAlign: 'center' }}>
            <Button flat nature="primary" disabled={!values.username}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    );
  }
}

export default withFormik({
  mapPropsToValues: props => ({
    username: '',
    firstName: '',
    lastName: '',
    month: '',
    day: '',
    year: '',
    website: '',
    comment: '',
  }),
})(Form);
