import React from 'react';
import { Typeahead, TypeaheadComponentProps } from 'react-bootstrap-typeahead';
import Feedback from 'react-bootstrap/esm/Feedback';

export interface FormSearchSelectProps extends TypeaheadComponentProps {}

const FormTypeahead = ({ ...rest }: FormSearchSelectProps) => {
  return <Typeahead {...rest} />;
};

FormTypeahead.Feedback = Feedback;

export default FormTypeahead;
