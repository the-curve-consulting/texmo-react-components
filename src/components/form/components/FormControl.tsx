import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface FormControlProps extends Bootstrap.FormControlProps {}

const FormControl = ({ className, ...rest }: FormControlProps) => {
  return <Bootstrap.Form.Control as="input" className={className} {...rest} />;
};

export default FormControl;
