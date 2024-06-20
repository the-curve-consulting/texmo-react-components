import React from 'react';
import CommentItem from './components/CommentItem';
import CommentInput from './components/CommentInput';

export interface CommentsProps extends React.HTMLProps<HTMLDivElement> {}

const Comments = ({ children, ...rest }: CommentsProps) => {
  return <div {...rest}>{children}</div>;
};

Comments.Input = CommentInput;
Comments.Item = CommentItem;

export default Comments;
