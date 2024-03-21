import Button from 'components/button/Button';
import Subtitle from 'components/subtitle/Subtitle';
import React from 'react';
import { Form, FormControlProps } from 'react-bootstrap';

export interface CommentInput extends FormControlProps {
  onSubmit: () => void;
}

const CommentInput = ({ onSubmit, ...rest }: CommentInput) => {
  return (
    <div>
      <Subtitle text="Comments:" className="mb-2" />
      <Form.Control as="textarea" placeholder="Leave a comment..." {...rest} />

      <div className="d-flex justify-content-end mt-2">
        <Button onClick={onSubmit}>Comment</Button>
      </div>
    </div>
  );
};

export default CommentInput;
