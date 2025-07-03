import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, logoutUser } from '../utils/auth';
import {
  FaUserCircle,
  FaEnvelope,
  FaEdit,
  FaBook,
  FaSignOutAlt,
  FaTrophy,
  FaSave
} from 'react-icons/fa';

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ username: '', email: '' });

  useEffect(() => {
    const data = getUser();
    if (data) {
      setUser(data);
      setEditedData({ username: data.username, email: data.email });
    }
  }, []);

  const handleEdit = () => setEditing(true);

  const handleSave = () => {
    setUser(editedData);
    setEditing(false);
    
    localStorage.setItem('user', JSON.stringify(editedData));
    alert('✅Profile updated successfully!');
  };

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    navigate('/');
  };

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
        {editing ? (
          <>
            <input
              type="text"
              value={editedData.username}
              onChange={(e) => setEditedData({ ...editedData, username: e.target.value })}
              className="profile-input"
            />
            <input
              type="email"
              value={editedData.email}
              onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
              className="profile-input"
            />
          </>
        ) : (
          <>
            <h2>{user.username}</h2>
            <p><FaEnvelope /> {user.email}</p>
          </>
        )}

        <div className="profile-actions">
          {editing ? (
            <button className="edit-btn" onClick={handleSave}>
              <FaSave /> Save
            </button>
          ) : (
            <button className="edit-btn" onClick={handleEdit}>
              <FaEdit /> Edit Profile
            </button>
          )}
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="profile-details">
        <h3><FaBook /> Your Courses</h3>
        <ul className="profile-course">
          <li>📘 JavaScript for Beginners</li>
          <li>📗 React Masterclass</li>
          <li>📙 UI/UX Design Basics</li>
        </ul>
        <br />
        <h3><FaTrophy /> Achievements</h3>
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

