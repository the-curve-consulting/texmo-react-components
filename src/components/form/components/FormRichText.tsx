import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardedRef,
  CSSProperties,
} from 'react';
import Quill from 'quill';

export interface QuillEditorProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  modules?: Record<string, unknown>;
  onChange?: (value: string) => string | void;
  value?: string;
}

const FormRichText: React.ForwardRefRenderFunction<Quill, QuillEditorProps> = (
  { modules, value, onChange, ...rest }: QuillEditorProps,
  ref: ForwardedRef<Quill>
) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

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
      const quill = new Quill(editorRef.current, modules);
      quillRef.current = quill; // Store the Quill instance in a ref

      if (ref) {
        // Assign the Quill instance to the forwarded ref
        if (typeof ref !== 'function') {
          ref.current = quill; // For object refs
        }

        if (value) {
          setValue(quill);
        }
        configureListeners(quill);
      }
    }
  });

  useImperativeHandle(ref, () => quillRef.current as Quill);

  return <div ref={editorRef} style={rest.style} id={rest.id} />;
};

export default forwardRef(FormRichText);
