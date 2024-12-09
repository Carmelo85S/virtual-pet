import { useState, useEffect } from 'react';
import Star from '../assets/star.svg';
import Cat from '../assets/home-cat.svg';
import '../style/animal-page/animal-page.css';

const AnimalPage = () => {
  const [hunger, setHunger] = useState(30);
  const [thirst, setThirst] = useState(10);
  const [fun, setFun] = useState(10);

  // feed animal
  const feedAnimal = () => {
    if (hunger < 100) {
      setHunger((h) => h + 10);
    } else {
      alert("game over");
    }
  };

  // play function
  const playAnimal = () => {
    if (fun < 100) {
      setFun(fun + 10);
    }else {
      alert("It was so much fun! Thanks for playing with me");
    }
  };

  // hydrate function
  const hydrateAnimal = () => {
    if (thirst < 100) {
      setThirst(thirst + 10);
    }else {
      alert("Not thirsty");
    }
  };

  useEffect(() => {
    const hungerInterval = setInterval(() => {
      setHunger((hunger <= 10 ? alert("game over"):  hunger - 10));
    }, 2000);

      return () => clearInterval(hungerInterval);
  }, [hunger]);

  useEffect(() => {
    const thirstInterval = setInterval(() => {
      setThirst(prevThirst => prevThirst - 10);
    }, 10000);

    return () => clearInterval(thirstInterval);
  }, [thirst]);

  return (
    <section className="animal-page-container">
      <section className="point-container">
        <p className="star-point-number" d="star">100</p>
        <img src={Star} alt="star points" />
      </section>

      <section className="animal-status-container">
        <section className="animal-img">
          <img src={Cat} alt="cute cat" />
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

          <section className="needs">
            <div className="text-container">
              <p className="spec">Fun</p>
            </div>
            <div className="bar">
              <div className="color" style={{ width: `${fun}%`, backgroundColor: '#FB5D5D' }}></div>
            </div>
          </section>
        </section>
      </section>

      <section className="animal-page-btn">
        <button className="btn-game" onClick={feedAnimal}>Feed</button>
        <button className="btn-game" onClick={playAnimal}>Play</button>
        <button className="btn-game">Dress</button>
        <button className="btn-game" onClick={hydrateAnimal}>Hydrate</button>
      </section>
    </section>
  );
};

export default AnimalPage;
