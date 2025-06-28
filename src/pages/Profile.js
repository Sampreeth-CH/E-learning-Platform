import { useEffect, useState } from 'react';
import { getUser } from '../utils/auth';
import { FaUserCircle, FaEnvelope, FaEdit, FaBook, FaSignOutAlt } from 'react-icons/fa';

const Profile = ({ isLoggedIn }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, []);

  if (!isLoggedIn || !user) {
    return (
      <div className="profile">
        <h2>Please log in to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile-card">
        <FaUserCircle className="profile-icon" />
        <h2>{user.username}</h2>
        <p><FaEnvelope /> {user.email}</p>

        <div className="profile-actions">
          <button className="edit-btn"><FaEdit /> Edit Profile</button>
          <button className="logout-btn"><FaSignOutAlt /> Logout</button>
        </div>
      </div>

      <div className="profile-details">
        <h3><FaBook /> Your Courses</h3>
        <ul className="course-list">
          <li>📘 JavaScript for Beginners</li>
          <li>📗 React Masterclass</li>
          <li>📙 UI/UX Design Basics</li>
        </ul>

        <h3>Achievements</h3>
        <ul className="achievements">
          <li>🏆 Completed 5 courses</li>
          <li>🕒 40+ hours of learning</li>
          <li>💡 Earned 3 certificates</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
