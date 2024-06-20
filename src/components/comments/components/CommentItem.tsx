import classNames from 'classnames';
import React from 'react';

export interface CommentItemProps extends React.HTMLProps<HTMLDivElement> {
  inbound: boolean;
  text: string;
  createdBy: string;
  createdAt: Date;
  onDelete: () => void;
}

const CommentItem = ({
  inbound,
  text,
  className,
  createdAt,
  createdBy,
  onDelete,
  ...rest
}: CommentItemProps) => {
  const itemClass = classNames(
    className,
    'w-75 border rounded p-3 mt-3',
    inbound ? 'bg-secondary' : 'text-white bg-primary'
  );

  const localeFormat = new Intl.DateTimeFormat('default', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return (
    <div
      className={classNames(
        'd-flex',
        inbound ? 'justify-content-start' : 'justify-content-end'
      )}
    >
      <div className={itemClass} {...rest}>
        {text}

        <div className="d-flex justify-content-between mt-2 opacity-75">
          <span>From: {createdBy}</span>

          <div>
            <span className={classNames(!inbound ? 'me-2' : null)}>
              {localeFormat.format(createdAt)}
            </span>

            {!inbound ? (
              <span
                className="text-decoration-underline cursor-pointer"
                onClick={onDelete}
              >
                Delete
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
