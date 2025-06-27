import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/auth';

const Profile = ({ isLoggedIn }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  if (!isLoggedIn || !user) {
    return <p style={{ textAlign: 'center', paddingTop: '2rem' }}>Please login to view your profile.</p>;
  }

  return (
    <div className="profile" style={{ textAlign: 'center', padding: '3rem' }}>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;

