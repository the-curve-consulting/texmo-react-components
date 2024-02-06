import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface FormRichText extends ReactQuill.ReactQuillProps {}

const FormRichText = ({ style, ...rest }: FormRichText) => {
  return <ReactQuill theme="snow" style={{ ...style }} {...rest} />;
};

export default FormRichText;
