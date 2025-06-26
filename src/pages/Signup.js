
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../utils/auth';

const Signup = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      setMsg('Please fill in all fields.');
      return;
    }

    const newUser = { email, password };
    saveUser(newUser);         // Save user to localStorage
    setIsLoggedIn(true);       // Set login state
    setMsg('Signup successful!');
    navigate('/login');      // Redirect
  };

  return (
    <div className="signup">
      <h2>Create Account</h2>

      <div className="form-group">
        <input 
          type="text" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)} 
          required 
          placeholder=" "
        />
        <label>Username</label>
      </div>

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

      <button onClick={handleSignup}>Sign Up</button>

      {msg && <p style={{ marginTop: '1rem', color: 'green' }}>{msg}</p>}
    </div>
  );
};

export default Signup;