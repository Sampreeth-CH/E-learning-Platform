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

  const [profileImage, setProfileImage] = useState(
  localStorage.getItem('profileImage') || null
);


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
    localStorage.setItem('user', JSON.stringify(editedData));
    setEditing(false);
    alert('✅ Profile updated successfully!');
  };

  const handleLogout = () => {
    logoutUser();
    if (setIsLoggedIn) setIsLoggedIn(false);
    navigate('/');
  };

  if (!isLoggedIn || !user) {
    return (
      <div className="profile">
        <h2>Please log in to view your profile</h2>
      </div>
    );
  }

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem('profileImage', reader.result);
    };
    reader.readAsDataURL(file);
  }
};
const handleRemoveImage = () => {
  setProfileImage('');
  localStorage.removeItem('profileImage');
  alert('Profile picture removed!');
};



  return (
    <div className="profile">
      <div className="profile-card">

<div className="profile-image-wrapper">
  {profileImage ? (
    <img src={profileImage} alt="Profile" className="profile-image" />
  ) : (
    <FaUserCircle className="profile-icon" />
  )}

  {editing && (
    <>
      <label htmlFor="upload-image" className="upload-btn">
        Upload Profile Picture
      </label>
      <input
        id="upload-image"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden-file-input"
      />
      {profileImage && (
        <button className="remove-btn" onClick={handleRemoveImage}>
          Remove Picture
        </button>
      )}
    </>
  )}
</div>


        {editing ? (
          <>
            <input
              type="text"
              value={editedData.username}
              onChange={(e) =>
                setEditedData({ ...editedData, username: e.target.value })
              }
              className="profile-input"
              placeholder="Username"
            />
            <input
              type="email"
              value={editedData.email}
              onChange={(e) =>
                setEditedData({ ...editedData, email: e.target.value })
              }
              className="profile-input"
              placeholder="Email"
            />
          </>
        ) : (
          <>
            <h2>{user.username}</h2>
            <p>
              <FaEnvelope /> {user.email}
            </p>
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
        <h3>
          <FaBook /> Your Courses
        </h3>
        <ul className="profile-course">
          <li>📘 JavaScript for Beginners</li>
          <li>📗 React Masterclass</li>
          <li>📙 UI/UX Design Basics</li>
        </ul>

        <br />

        <h3>
          <FaTrophy /> Achievements
        </h3>
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
