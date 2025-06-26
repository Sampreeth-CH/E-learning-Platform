<<<<<<< HEAD
import React from 'react';
import { getUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Profile = ({ isLoggedIn }) => {
  const user = getUser();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Password:</strong> ********</p>
        {/* Future: Allow changing password or profile info */}
      </div>
    </div>
  );
};

export default Profile;
=======
import React from 'react';
import { getUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Profile = ({ isLoggedIn }) => {
  const user = getUser();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Password:</strong> ********</p>
        {/* Future: Allow changing password or profile info */}
      </div>
    </div>
  );
};

export default Profile;
>>>>>>> 9bcb51952a5168676318fdb5ee41b24878bf7829
