import React from 'react';
export interface CommentsProps extends React.HTMLProps<HTMLDivElement> {
}
declare const Comments: {
    ({ children, ...rest }: CommentsProps): React.JSX.Element;
    Input: ({ onSubmit, ...rest }: import("./components/CommentInput").CommentInput) => React.JSX.Element;
    Item: ({ inbound, text, className, createdAt, createdBy, onDelete, ...rest }: import("./components/CommentItem").CommentItemProps) => React.JSX.Element;
};
export default Comments;
//# sourceMappingURL=Comments.d.ts.map