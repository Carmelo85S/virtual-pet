import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import FoodStore from './page/Food';
import AnimalPage from './page/Animal-page';
import Navbar from './components/navbar/Navbar';
import VirtualPetGame from './page/VirtualPetGame';
import DrinkStore from './page/Drink';
import ClothStore from './page/Clothes';
import HowToPlayFirst from './page/HowToPlayFirst';
import HowToPlaySecond from './page/HowToPlaySecond';
import HowToPlayThird from './page/HowToPlayThird';
import JamendoTracks from './components/music/music';
import './app.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [points, setPoints] = useState(100);

    const [burger, setBurger] = useState(5);
    const [taco, setTaco] = useState(5);
    const [iceCream, setIceCream] = useState(5);
    const [cookie, setCookie] = useState(5);
    const [wine, setWine] = useState(5);
    const [beer, setBeer] = useState(5);

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData && userData.expirationTime > new Date().getTime()) {
        setIsAuthenticated(true);
      }
    }, []);

  return (
    <HashRouter>
    {/* music */}
    <JamendoTracks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={ <HowToPlayFirst />} />
        <Route path="/info-game" element={ <HowToPlaySecond />} />
        <Route path="/info-button" element={ <HowToPlayThird />} />

        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route path="/play" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <AnimalPage 
              points={points} setPoints={setPoints}
              burger={burger} setBurger={setBurger}
              taco={taco} setTaco={setTaco}
              iceCream={iceCream} setIceCream={setIceCream}
              cookie={cookie} setCookie={setCookie}
              wine={wine} setWine={setWine}
              beer={beer} setBeer={setBeer} />
          </PrivateRoute>
        }/>

          <Route path="/play/game" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <VirtualPetGame points={points} setPoints={setPoints}
            />
          </PrivateRoute>
        }/>

        <Route path="/play/food" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <FoodStore 
            points={points} setPoints={setPoints}
            burger={burger} setBurger={setBurger}
            taco={taco} setTaco={setTaco}
            iceCream={iceCream} setIceCream={setIceCream}
            cookie={cookie} setCookie={setCookie}/>
          </PrivateRoute>
        }/>

        <Route path="/play/clothes" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <ClothStore points={points} setPoints={setPoints}/>
          </PrivateRoute>
        }/>

        <Route path="/play/drink" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Navbar setIsAuthenticated={setIsAuthenticated}/>
            <DrinkStore points={points} setPoints={setPoints}
            wine={wine} setWine={setWine}
            beer={beer} setBeer={setBeer}/>
          </PrivateRoute>
        }/>
      </Routes>
    </HashRouter>
  );
};

export default App;

