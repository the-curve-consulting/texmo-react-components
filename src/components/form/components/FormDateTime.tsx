import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface FormDateTime extends Bootstrap.FormControlProps {}

const FormDateTime = ({ className, ...rest }: FormDateTime) => {
  return (
    <Bootstrap.Form.Control
      as="input"
      type="datetime-local"
      className={className}
      {...rest}
    />
  );
};

export default FormDateTime;
