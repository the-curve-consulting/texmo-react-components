import React from 'react';
import { FormControlProps, Form } from 'react-bootstrap';

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

export default FormDateTime;
