import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import GameOver from '../components/game-over/GameOver';
import Star from '../assets/star.svg';
import Cat from '../assets/maincat.svg';
import Poop from '../assets/poop.svg';
import Fart from'../assets/audio/fart.mp3';
import DeadCat from '../assets/cat_dead_05.svg';
import SadCat from '../assets/sadcat.svg';
import LoveCat from '../assets/cat_love.svg';
import Burger from '../assets/form/cheesburger.svg';
import Taco from '../assets/form/taco.svg';
import IceCream from '../assets/form/icecream.svg';
import Cookie from '../assets/form/cookie.svg';
import Beer from '../assets/form/beer.svg';
import Wine from '../assets/form/wine.svg';
import '../style/animal-page/animal-page.css';

const AnimalPage = ({points, setPoints,
  burger, setBurger,
  taco, setTaco, 
  iceCream, setIceCream, 
  cookie, setCookie, 
  beer, setBeer, 
  wine, setWine }) => {
  const [hunger, setHunger] = useState(20);
  const [thirst, setThirst] = useState(20);
  const [isGameOver, setIsGameOver] = useState(false);
  const [visible, setVisible] = useState(null);

  const [playFartSound] = useSound(Fart);

  const [poopVisible, setPoopVisible] = useState(null);

  const navigate = useNavigate();

  // use burger
  const useBurger = () => {

    if (hunger < 100 && burger > 0) {
      setHunger(hunger + 10); 
      setVisible(Burger);
      setTimeout(() => setVisible(null), 2000);
      setBurger((prevBurger) => prevBurger - 1);
    } else if (burger <= 0) {
      alert("No burgers left!");
    } else {
      alert("Not hungry");
    }

    // If hunger reaches 0, end the game
    if (hunger <= 0) {
      setIsGameOver(true);
    }
  };

  //use taco
  const useTaco = () => {

    if (hunger < 100 && taco > 0) {
      setHunger(hunger + 10); 
      setVisible(Taco);
      setTimeout(() => setVisible(null), 2000);
      setTaco((prevTaco) => prevTaco - 1);
    } else if (taco <= 0) {
      alert("No tacos left!");
    } else {
      alert("Not hungry");
    }

    // If hunger reaches 0, end the game
    if (hunger <= 0) {
      setIsGameOver(true);
    }
  };

  //use ice cream
  const useIceCream = () => {

    if (hunger < 100 && iceCream > 0) {
      setHunger(hunger + 10); 
      setVisible(IceCream);
      setTimeout(() => setVisible(null), 2000);
      setIceCream((prevIceCream) => prevIceCream - 1);
    } else if (iceCream <= 0) {
      alert("No ice creams left!");
    } else {
      alert("Not hungry");
    }

    // If hunger reaches 0, end the game
    if (hunger <= 0) {
      setIsGameOver(true);
    }
  };

    //use cookie
  const useCookie = () => {

    if (hunger < 100 && cookie > 0) {
      setHunger(hunger + 10); 
      setVisible(Cookie);
      setTimeout(() => setVisible(null), 2000);
      setCookie((prevCookie) => prevCookie - 1);
    } else if (cookie <= 0) {
        alert("No ice cookies left!");
    } else {
        alert("Not hungry");
    }
  
    // If hunger reaches 0, end the game
    if (hunger <= 0) {
      setIsGameOver(true);
    }
  };

  //use beer
  const useBeer = () => {

    if (thirst < 100 && beer > 0) {
      setThirst(thirst + 10); 
      setVisible(Beer);
      setTimeout(() => setVisible(null), 2000);
      setBeer((prevBeer) => prevBeer - 1);
    } else if (beer <= 0) {
      alert("No beers left!");
    } else {
      alert("Not thirsty");
    }
  
    // If thirst reaches 0, end the game
    if (thirst <= 0) {
      setIsGameOver(true);
    }
  };

  //use wine
  const useWine = () => {

    if (thirst < 100 && wine > 0) {
      setThirst(thirst + 10); 
      setVisible(Wine);
      setTimeout(() => setVisible(null), 2000);
      setWine((prevWine) => prevWine - 1);
    } else if (wine <= 0) {
      alert("No wines left!");
    } else {
      alert("Not thirsty");
    }
  
    // If hunger reaches 0, end the game
    if (thirst <= 0) {
      setIsGameOver(true);
    }
  };

  // Hunger effect every 7.5 seconds amd Thirst every 10 seconds
  useEffect(() => {
    if (hunger <= 0 || thirst <= 0) {
      setIsGameOver(true);
    } else {
      const hungerInterval = setInterval(() => { setHunger((prevHunger) => prevHunger - 10)}, 7500);
      const thirstInterval = setInterval(() => { setThirst((prevThirst) => prevThirst - 10)}, 10000);
      return () => {
        clearInterval(hungerInterval);
        clearInterval(thirstInterval);
      };
    }
  }, [hunger, thirst]);

    //Poop every 60 seconds
    useEffect(() => {
      const poopInterval = setInterval(() => {
        setPoopVisible((currentPoop) => currentPoop || Poop);
      }, 10000);
    
      const fartInterval = setInterval(() => {
        playFartSound();
      }, 10000);
    
      return () => {
        clearInterval(poopInterval);
        clearInterval(fartInterval);
      };
    }, [playFartSound]);
    

      
  
    //Poop cleaned
  
    const cleanPoop = () => {
      if (poopVisible) {
        setPoopVisible(null);
        setPoints((prevPoints) => prevPoints + 10);
      }
    };
    

  // Feed page navigation
  const handleFood = () => {
    navigate('/play/food');
  };

  // Feed page navigation
  const handleHydrate = () => {
    navigate('/play/drink');
  };

  // dress page navigation
  const handleDress = () => {
    navigate('/play/clothes');
  };

  const restartGame = () => {
    setHunger(50);
    setThirst(50);
    setBurger(3);
    setCookie(3);
    setIceCream(4);
    setTaco(4);
    setBeer(4);
    setWine(4);
    setIsGameOver(false);
    setPoopVisible(null);
    setPoints(50);
  };

  return (
    <section className="animal-page-container">
      {isGameOver && <GameOver onRestart={restartGame} />}

      <section className="point-container">
        <p className="star-point-number" id="star">{points}</p>
        <img src={Star} alt="star points" />
      </section>

      <section className="animal-status-container">
        <section className="animal-img">
          {hunger === 0 || thirst === 0 ? (
            <div>
              <h2 className="cat-status">Dead</h2>
              <img src={DeadCat} alt="dead cat" />
            </div>
          ) : hunger < 20 || thirst < 20 ? (
            <div>
              <h2 className="cat-status">I'm sad</h2>
              <img src={SadCat} alt="sad cat" />
            </div>
          ) : hunger > 80 && thirst > 80 ? (
            <div>
              <h2 className="cat-status">I'm super happy</h2>
              <img src={LoveCat} alt="love cat" />
            </div>
          ) : (
            <div>
              <h2 className="cat-status">I'm waiting</h2>
              <img src={Cat} alt="cute cat" />
            </div>
          )}
          <section className="visible">
            {visible && <img src={visible} alt="food or drink visible" />}
          </section>
          <section className="poop-visible">
            {poopVisible && (
              <button className="poopBtn" onClick={cleanPoop}>
                <img src={poopVisible} alt="poop" />
              </button>
            )}
          </section>
        </section>

        <section className="animal-status">
          <section className="needs">
            <div className="text-container">
              <p className="spec">Hunger</p>
            </div>
            <div className="bar">
              <div className="color" style={{ width: `${hunger}%`, backgroundColor: '#5EE270' }}></div>
            </div>
          </section>

          <section className="needs">
            <div className="text-container">
              <p className="spec">Thirst</p>
            </div>
            <div className="bar">
              <div className="color" style={{ width: `${thirst}%`, backgroundColor: '#5EE270' }}></div>
            </div>
          </section>

          <section className="img-food-container">
            <div className="food">
              <img className="img" src={Burger} alt="Cheese burger icon" />
            </div>
            <div className="food">
              <img className="img" src={Taco} alt="Taco icon" />
            </div>
            <div className="food">
              <img className="img" src={IceCream} alt="Ice cream icon" />
            </div>
            <div className="food">
              <img className="img" src={Cookie} alt="Cookie icon" />
            </div>
            <div className="drink">
              <img className="img" src={Beer} alt="Beer icon" />
            </div>
            <div className="drink">
              <img className="img-wine" src={Wine} alt="Drink icon" />
            </div>
          </section>

          <section className="button-food-container">
          <button className="food-btn" onClick={useBurger}>{burger}</button>
          <button className="food-btn" onClick={useTaco}>{taco}</button>
          <button className="food-btn" onClick={useIceCream}>{iceCream}</button>
          <button className="food-btn" onClick={useCookie}>{cookie}</button>
          <button className="drink-btn" onClick={useBeer}>{beer}</button>
          <button className="drink-btn" onClick={useWine}>{wine}</button>
          </section>
        </section>
      </section>

      <section className="animal-page-btn">
        <button className="btn-game" onClick={handleFood}>Feed</button>
        <button className="btn-game" onClick={handleHydrate}>Hydrate</button>
        <button className="btn-game" onClick={handleDress}>Dress</button>
        {/*<button className="btn-game">Skin</button>*/}
      </section>
    </section>
  );
};

export default AnimalPage;
