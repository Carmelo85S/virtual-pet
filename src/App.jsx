import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Play from './page/Play';
import './app.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check localStorage to determine if the user is authenticated
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.expirationTime > new Date().getTime()) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/play" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Play />
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

