import React, { useRef, CSSProperties, useEffect } from 'react';
import Quill from 'quill';
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
  modules,
  value,
  onChange,
  theme,
  ...rest
}: QuillEditorProps) => {
  const quillRef = useRef<Quill | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const quillOptions = {
    ...modules,
    theme: theme || 'snow',
  };

  const setValue = (quillRef: Quill) => {
    const delta = quillRef.clipboard.convert({ html: value });
    quillRef.setContents(delta, 'silent');
  };

  const configureListeners = (quill: Quill) => {
    quill.on(Quill.events.TEXT_CHANGE, () => {
      if (onChange) {
        onChange(quillRef.current?.getSemanticHTML() || '');
      }
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current as HTMLDivElement;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div')
      );

      const quill = new Quill(editorContainer, quillOptions);
      quillRef.current = quill; // Store the Quill instance in a ref

      if (value) {
        setValue(quill);
      }
      configureListeners(quill);

      return () => {
        container.innerHTML = '';
        quill.off(Quill.events.TEXT_CHANGE);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={rest.style}
      id={rest.id}
      className={rest.className}
    />
  );
};

export default FormRichText;
