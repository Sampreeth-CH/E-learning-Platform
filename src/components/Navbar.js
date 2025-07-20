import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/auth';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBars, FaTimes, FaHome, FaBook, FaUserAlt, FaEnvelope, FaInfoCircle,FaUserPlus } from 'react-icons/fa';
import { FiLogIn,FiLogOut } from 'react-icons/fi';


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    navigate('/');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="brand">
        <FaGraduationCap className="logo-icon" />
        S-Learning
      </h1>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

        <h1 className="nav-icon">
        <FaGraduationCap className="logo-icon" />
        PES-Learning
      </h1>
        <li>
          <Link to="/" onClick={closeMenu}>
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" onClick={closeMenu}>
            <FaBook className="nav-icon" />
            Courses
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            <FaInfoCircle className="nav-icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            <FaEnvelope className="nav-icon" />
            Contact
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/profile" onClick={closeMenu}>
                <FaUserAlt className="nav-icon" />
                Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                <FiLogOut className="nav-icon" style={{ marginRight: '0.5rem' }} />
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <FiLogIn className="nav-icon" style={{ marginRight: '0.5rem' }} />
                Login
              </Link>

            </li>
            <li>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <FaUserPlus className="nav-icon" style={{ marginRight: '0.5rem' }} />
                Signup
              </Link>

            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
