import React from 'react';
import { AsyncTypeahead, UseAsyncProps } from 'react-bootstrap-typeahead';
import Feedback from 'react-bootstrap/esm/Feedback';

export interface FormSearchSelectProps extends UseAsyncProps {}

const FormAsyncTypeahead = ({ ...rest }: FormSearchSelectProps) => {
  return <AsyncTypeahead {...rest} />;
};

FormAsyncTypeahead.Feedback = Feedback;

export default FormAsyncTypeahead;
