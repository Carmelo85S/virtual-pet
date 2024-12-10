import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import FoodStore from './page/Food';
import AnimalPage from './page/Animal-page';
import Navbar from './components/navbar/Navbar';
import VirtualPetGame from './page/VirtualPetGame';
import DrinkStore from './page/Drink';
import './app.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData && userData.expirationTime > new Date().getTime()) {
        setIsAuthenticated(true);
      }
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/play" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <AnimalPage />
          </PrivateRoute>
        }/>

          <Route path="/play/game" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <VirtualPetGame />
          </PrivateRoute>
        }/>

        <Route path="/play/food" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <FoodStore />
          </PrivateRoute>
        }/>

        <Route path="/play/drink" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <DrinkStore />
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

