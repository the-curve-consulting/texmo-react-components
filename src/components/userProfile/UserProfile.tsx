import classNames from 'classnames';
import React from 'react';

export interface UserProfileProps extends React.HTMLProps<HTMLDivElement> {}

const UserProfile = ({ className, ...rest }: UserProfileProps) => {
  return (
    <div
      className={classNames(
        className,
        'd-inline-flex align-items-center text-muted'
      )}
      {...rest}
    >
      <i className="user-profile pt-2 bi bi-person-circle fs-2" />
    </div>
  );
};

export default UserProfile;
