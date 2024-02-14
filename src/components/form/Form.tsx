import React from 'react';
import FormControl from './components/FormControl';
import FormGroup from './FormGroup';
import FormSelect from './components/FormSelect';
import FormCheck from './components/FormCheck';
import FormLabel from './components/FormLabel';
import FormRichText from './components/FormRichText';
import FormDateTime from './components/FormDateTime';
import Feedback from 'react-bootstrap/esm/Feedback';

export interface FormProps extends React.HTMLProps<HTMLFormElement> {}

const Form = ({ children, ...rest }: FormProps) => {
  return <form {...rest}>{children}</form>;
};

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormSelect;
Form.Check = FormCheck;
Form.RichText = FormRichText;
Form.DateTime = FormDateTime;
Form.Feedback = Feedback;

export default Form;
