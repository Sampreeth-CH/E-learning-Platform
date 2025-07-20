import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>S-Learning</h2>
        <p>Empowering learning, one course at a time.</p>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="https://x.com/Sampreeth_CH?t=CQnsrTlfD8R8sYvLlYWPRQ&s=08"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/sampreeth-ch-098a3a30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">&copy; {new Date().getFullYear()} E-Learn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




