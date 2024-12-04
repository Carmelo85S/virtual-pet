import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const userData = JSON.parse(localStorage.getItem('user'));
  
    if (userData && userData.user === username && userData.password === password) {

      const expirationTime = new Date().getTime() + 3600000;
      const updatedUserData = { ...userData, expirationTime };
      localStorage.setItem('user', JSON.stringify(updatedUserData));
  
      setIsAuthenticated(true);
  
      navigate("/play");
    } else {
      alert('Wrong credentials');
    }
  };
  
  return (
    <div className="form-wrapper">
      <form onSubmit={handleLogin} className="login-form">
        <section className="input-container">
          <label>Username:</label>
          <input
            type="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </section>
        <section className="btn-container">
          <button type="submit">Login</button>
        </section>
      </form>
    </div>
  );
};

export default Login;

