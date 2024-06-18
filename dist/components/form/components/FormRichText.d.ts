import React, { CSSProperties } from 'react';
import Quill from 'quill';
export interface QuillEditorProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    modules?: Record<string, unknown>;
    onChange?: (value: string) => string | void;
    value?: string;
}
declare const _default: React.ForwardRefExoticComponent<QuillEditorProps & React.RefAttributes<Quill>>;
export default _default;
//# sourceMappingURL=FormRichText.d.ts.map