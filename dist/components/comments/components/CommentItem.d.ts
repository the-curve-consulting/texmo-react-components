import React from 'react';
export interface CommentItemProps extends React.HTMLProps<HTMLDivElement> {
    inbound: boolean;
    text: string;
    createdBy: string;
    createdAt: Date;
    onDelete: () => void;
}
declare const CommentItem: ({ inbound, text, className, createdAt, createdBy, onDelete, ...rest }: CommentItemProps) => React.JSX.Element;
export default CommentItem;
//# sourceMappingURL=CommentItem.d.ts.map