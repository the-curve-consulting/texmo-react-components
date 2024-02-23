import React from 'react';

export interface UserProfileProps extends React.HTMLProps<HTMLDivElement> {}

const UserProfile = ({ className, ...rest }: UserProfileProps) => {
  return (
    <div
      className={`${className} d-inline-flex align-items-center text-muted`}
      {...rest}
    >
      <i className="bi bi-person-circle fs-2 me-2"></i>
    </div>
  );
};

export default UserProfile;
