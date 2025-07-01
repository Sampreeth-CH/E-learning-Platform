import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/auth';
import { Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = loginUser(email, password);

    if (user) {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      setError('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="form-group">
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <button type="submit">Login</button>
      </form>
      <p className="checksign">Don't have an account? <Link to='/signup'>Signup</Link></p>
    </div>
  );
};

export default Login;
