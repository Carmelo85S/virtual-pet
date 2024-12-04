import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const saveUserData = (userData) => {
    const expirationTime = new Date().getTime() + 3600000;
    const dataToSave = {
      ...userData,
      expirationTime,
    };
    localStorage.setItem('user', JSON.stringify(dataToSave));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userData = { username, email, password };
    saveUserData(userData);

    setIsAuthenticated(true);
    navigate('/play');
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleRegister} className="login-form">
        <section className="input-container">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            required
          />
        </section>
        <section className="btn-container">
          <button type="submit">Register</button>
        </section>
      </form>
    </div>
  );
};

export default Register;
