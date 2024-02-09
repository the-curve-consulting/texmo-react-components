import React from 'react';

export interface UserProfileProps {
  email: string;
}

const UserProfile = ({ email }: UserProfileProps) => {
  return (
    <div className="d-inline-flex align-items-center text-muted">
      <i className="bi bi-person-circle fs-2 me-2"></i>
      {email}
    </div>
  );
};

export default UserProfile;
