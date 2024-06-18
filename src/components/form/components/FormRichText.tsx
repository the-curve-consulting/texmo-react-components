import React, { useRef, CSSProperties, useEffect } from 'react';
import Quill from 'quill';

export interface QuillEditorProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  modules?: Record<string, unknown>;
  value?: string;

  valueChange?(value: string): any;
}

const FormRichText = ({
  modules,
  value,
  valueChange,
  ...rest
}: QuillEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  const setValue = (quillRef: Quill) => {
    const delta = quillRef.clipboard.convert({ html: value });
    quillRef.setContents(delta, 'silent');
  };

  const configureListeners = (quill: Quill) => {
    quill.on('text-change', () => {
      if (valueChange) {
        valueChange(quillRef.current?.getSemanticHTML() || '');
      }
    });
  };

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, modules);
      quillRef.current = quill; // Store the Quill instance in a ref

      if (value) {
        setValue(quill);
      }
      configureListeners(quill);
    }
  }, []);

  return <div ref={editorRef} style={rest.style} id={rest.id} />;
};
export default FormRichText;
