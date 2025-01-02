import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameOver from '../components/game-over/GameOver';
import Star from '../assets/star.svg';
import Cat from '../assets/home-cat.svg';
import DeadCat from '../assets/cat_dead_05.svg';
import SadCat from '../assets/cat_sad_03.svg';
import LoveCat from '../assets/cat_love.svg';
import Burger from '../assets/form/cheesburger.svg';
import Taco from '../assets/form/taco.svg';
import IceCream from '../assets/form/icecream.svg';
import Cookie from '../assets/form/cookie.svg';
import Beer from '../assets/form/beer.svg';
import Wine from '../assets/form/wine.svg';
import '../style/animal-page/animal-page.css';

const AnimalPage = ({
  points, burger, setBurger,
  taco, setTaco, iceCream, setIceCream, 
  cookie, setCookie, beer, setBeer, wine, setWine 
}) => {
  const [hunger, setHunger] = useState(20);
  const [thirst, setThirst] = useState(20);
  const [isGameOver, setIsGameOver] = useState(false);
  const [foodVisible, setFoodVisible] = useState(null);

  const navigate = useNavigate();

  const useBurger = () => {
    if (hunger < 100 && burger > 0) {
      setHunger(hunger + 10);
      setBurger((prevBurger) => prevBurger - 1);
      setFoodVisible('burger'); 

      setTimeout(() => {
        setFoodVisible(null); 
      }, 2000);
    } else if (burger <= 0) {
      alert("No burgers left!");
    } else {
      alert("Not hungry");
    }
  };

  const useTaco = () => {
    if (hunger < 100 && taco > 0) {
      setHunger(hunger + 10);
      setTaco((prevTaco) => prevTaco - 1);
      setFoodVisible('taco'); 

      setTimeout(() => {
        setFoodVisible(null);
      }, 2000);
    } else if (taco <= 0) {
      alert("No tacos left!");
    } else {
      alert("Not hungry");
    }
  };

  const useIceCream = () => {
    if (hunger < 100 && iceCream > 0) {
      setHunger(hunger + 10);
      setIceCream((prevIceCream) => prevIceCream - 1);
      setFoodVisible('iceCream'); 

      setTimeout(() => {
        setFoodVisible(null); 
      }, 2000);
    } else if (iceCream <= 0) {
      alert("No ice creams left!");
    } else {
      alert("Not hungry");
    }
  };

  const useCookie = () => {
    if (hunger < 100 && cookie > 0) {
      setHunger(hunger + 10);
      setCookie((prevCookie) => prevCookie - 1);
      setFoodVisible('cookie'); 

      setTimeout(() => {
        setFoodVisible(null); 
      }, 2000);
    } else if (cookie <= 0) {
      alert("No cookies left!");
    } else {
      alert("Not hungry");
    }
  };

  const useBeer = () => {
    if (thirst < 100 && beer > 0) {
      setThirst(thirst + 10);
      setBeer((prevBeer) => prevBeer - 1);
      setFoodVisible('beer'); 

      setTimeout(() => {
        setFoodVisible(null); 
      }, 2000);
    } else if (beer <= 0) {
      alert("No beer left!");
    } else {
      alert("Not thirsty");
    }
  };


  const useWine = () => {
    if (thirst < 100 && wine > 0) {
      setThirst(thirst + 10);
      setWine((prevWine) => prevWine - 1);
      setFoodVisible('wine');  

      setTimeout(() => {
        setFoodVisible(null); 
      }, 2000);
    } else if (wine <= 0) {
      alert("No wine left!");
    } else {
      alert("Not thirsty");
    }
  };

  // Restart game
  const restartGame = () => {
    setHunger(30);
    setThirst(30);
    setBurger(3);
    setCookie(3);
    setIceCream(4);
    setTaco(4);
    setBeer(4);
    setWine(4);
    setIsGameOver(false);
  };

    // Hunger effect every 10 seconds
    useEffect(() => {
      if (hunger <= 0) {
        setIsGameOver(true);
      } else {
        const hungerInterval = setInterval(() => {
          setHunger((prevHunger) => prevHunger - 10);
        }, 7500);
        return () => clearInterval(hungerInterval);
      }
    }, [hunger]);
  
    // Thirst effect every 10 seconds
    useEffect(() => {
      if (thirst <= 0) {
        setIsGameOver(true);
      } else {
        const thirstInterval = setInterval(() => {
          setThirst((prevThirst) => prevThirst - 10);
        }, 10000);
        return () => clearInterval(thirstInterval);
      }
    }, [thirst]);

  useEffect(() => {
    if (hunger <= 0 || thirst <= 0) {
      setIsGameOver(true);
    }
  }, [hunger, thirst]);

  // Points update in Animal Page
  useEffect(() => {
    console.log("Points updated in AnimalPage:", points);
  }, [points]);

  useEffect(() => {
    console.log(foodVisible); // Log the current foodVisible state
  }, [foodVisible]);

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

          {/* Conditionally render food item on top of the cat */}
          {foodVisible && (
            <img
              src={foodVisible === 'burger' ? Burger :
                    foodVisible === 'taco' ? Taco :
                    foodVisible === 'iceCream' ? IceCream :
                    foodVisible === 'cookie' ? Cookie :
                    foodVisible === 'beer' ? Beer :
                    foodVisible === 'wine' ? Wine : null}
              alt={foodVisible}
              className="overlay-food"
            />
          )}
          
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
        <button className="btn-game" onClick={() => navigate('/play/food')}>Feed</button>
        <button className="btn-game" onClick={() => navigate('/play/drink')}>Hydrate</button>
        <button className="btn-game" onClick={() => navigate('/play/clothes')}>Dress</button>
        <button className="btn-game">Skin</button>
      </section>
    </section>
  );
};

export default AnimalPage;


