import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/auth';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = getUser();

    if (!storedUser) {
      setMsg('No account found. Please sign up first.');
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      setIsLoggedIn(true);
      setMsg('Login successful!');
      navigate('/courses');
    } else {
      setMsg('Invalid email or password.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <div className="form-group">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder=" "
        />
        <label>Email</label>
      </div>

      <div className="form-group">
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder=" "
        />
        <label>Password</label>
      </div>

      <button onClick={handleLogin}>Login</button>

      {msg && <p style={{ marginTop: '1rem', color: msg.includes('success') ? 'green' : 'red' }}>{msg}</p>}
    </div>
  );
};

export default Login;
