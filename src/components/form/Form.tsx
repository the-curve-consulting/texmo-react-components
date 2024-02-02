import React from 'react';
import FormControl from './components/FormControl';
import FormGroup from './FormGroup';
import FormSelect from './components/FormSelect';
import FormCheck from './components/FormCheck';
import FormLabel from './components/FormLabel';
import FormRichText from './components/FormRichText';
import FormDateTime from './components/FormDateTime';

interface FormProps extends React.HTMLProps<HTMLFormElement> {}

class Form extends React.PureComponent<FormProps> {
  static Group = FormGroup;
  static Control = FormControl;
  static Select = FormSelect;
  static Check = FormCheck;
  static Label = FormLabel;
  static RichText = FormRichText;
  static DateTime = FormDateTime;

  render() {
    const { children, ...rest } = this.props;
    return <form {...rest}> {children} </form>;
  }
}

export default Form;
