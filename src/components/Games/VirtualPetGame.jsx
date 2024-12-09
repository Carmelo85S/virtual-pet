import React, { useState } from "react";
import MathGame from "./MathGame";
import QuickQuiz from "./Quickquiz";
import '../style/Games/VirtualPetGame.css';

const VirtualPetGame = () => {
  const [playerPoints, setPlayerPoints] = useState(0);
  const [selectedGame, seetSelectedGame] = useState(null);

  const handlePointsEarned = (points) => {
    setPlayerPoints((prevPoints) => prevPoints + points);
  };

  const renderGameSelection = () => {
    return (
        <div className="game-selection">
            <h2>Choose a Game</h2>
            <div className="game-buttons">
                <button onClick={() => setSelectedGame("math")}>Math Game</button>
                <button onClick={() => setSelectedGame("quiz")}>Quick Quiz</button>
            </div>
        </div>
    );
  };

  const renderSelectedGame = () => {
    switch (selectedGame) {
      case "math":
        return <MathGame onPointsEarned={handlePointsEarned} />;
      case "quiz":
        return <QuickQuiz onPointsEarned={handlePointsEarned} />;
      default:
        return null;
    }
  };

  return (
    <div className="virtual-pet-game">
      <h1>Virtual Pet Game</h1>
      <p>Total Points: {playerPoints}</p>
      {selectedGame ? (
        <div>
            <button onClick={() => seetSelectedGame(null)} className="back-button">Back to Game Selection</button>
            {renderSelectedGame()}
        </div>
      ) : (
        renderGameSelection()
      )}
      </div>
  );
};

export default VirtualPetGame;
