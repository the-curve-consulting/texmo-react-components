import React, { useRef, CSSProperties, useEffect } from 'react';
import Quill from 'quill';
import Feedback from 'react-bootstrap/Feedback';
import 'quill/dist/quill.snow.css';

export interface QuillEditorProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  modules?: Record<string, unknown>;
  value?: string;
  theme?: string;

  onChange?(value: string): any;
}

const FormRichText = ({
  theme,
  modules,
  value,
  onChange,
  ...rest
}: QuillEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  const quillOptions = {
    ...modules,
    theme: theme || 'snow',
  };

  const setValue = (quillRef: Quill) => {
    const delta = quillRef.clipboard.convert({ html: value });
    quillRef.setContents(delta, 'silent');
  };

  const configureListeners = (quill: Quill) => {
    quill.on('text-change', () => {
      if (onChange) {
        onChange(quillRef.current?.getSemanticHTML() || '');
      }
    });
  };

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, quillOptions);
      quillRef.current = quill; // Store the Quill instance in a ref

      if (value) {
        setValue(quill);
      }
      configureListeners(quill);
    }
  }, []);

  return <div ref={editorRef} style={rest.style} id={rest.id} />;
};

FormRichText.Feedback = Feedback;

export default FormRichText;
