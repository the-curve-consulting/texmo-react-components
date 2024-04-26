import React from "react";
export interface CommentsProps extends React.HTMLProps<HTMLDivElement> {
}
declare const Comments: {
    ({ children, ...rest }: CommentsProps): React.JSX.Element;
    Item: ({ inbound, text, className, ...rest }: import("./components/CommentItem").CommentItemProps) => React.JSX.Element;
};
export default Comments;
//# sourceMappingURL=Commets.d.ts.map