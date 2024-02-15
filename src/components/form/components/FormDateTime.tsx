import React from 'react';
import { FormControlProps, Form } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';

export interface FormDateTimeProps extends FormControlProps {}

const FormDateTime = ({ className, ...rest }: FormDateTimeProps) => {
  return (
    <Form.Control
      as="input"
      type="datetime-local"
      className={className}
      {...rest}
    />
  );
};

FormDateTime.Feedback = Feedback;

export default FormDateTime;
