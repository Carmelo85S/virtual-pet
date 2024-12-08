import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Bird from '../../assets/form/flapping.png';
import Chest from '../../assets/form/chest.png';
import '../../style/login/login.css'

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
      <section className="heading">
        <h1 className="heading-text">
          Virtual Pet
        </h1>
      </section>
      <section className="bird-chest">
        <img className="bird"src={Bird} alt="Bird flapping" />
        <img className="chest"src={Chest} alt="Chest" />
      </section>
      <form onSubmit={handleLogin} className="login-form">
        <section className="input-container">
          <section className="form-content">
              <h2 className="text">
                Welcome to Virtual Pet,
                log in to enter our world!
              </h2>
          </section>
          <label>Username:</label>
          <input
            className="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="annapanna"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            required
          />
        </section>
        <section className="sign-in-container">
          <button className="sign-in" type="submit">Sign In</button>
        </section>
        <section className="question-terms-container">
          <p className="question">
            Don't you have an account? 
            <Link to="/register"> Sign up</Link>
          </p>
          <p className="accept-terms">
            By signing in you accept the Terms of Services and Privacy Policy
          </p>
        </section>
      </form>
    </div>
  );
};

export default Login;

