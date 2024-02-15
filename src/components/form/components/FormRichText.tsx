import React from 'react';
import Feedback from 'react-bootstrap/esm/Feedback';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface FormRichTextProps extends ReactQuill.ReactQuillProps {}

const FormRichText = ({ style, ...rest }: FormRichTextProps) => {
  return <ReactQuill theme="snow" style={{ ...style }} {...rest} />;
};

FormRichText.Feedback = Feedback;

export default FormRichText;
