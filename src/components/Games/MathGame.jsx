import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import '../style/Animal-page/MathGame.css';

const MathGame = () => {
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(0);

    const generateQuestion = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setQuestion({ num1, num2, correctAnswer: num1 + num2 });
        setAnswer("");
      };

      const checkAnswer = () => {
        if (parseInt(answer, 10) === question.correctAnswer) {
          setFeedback("Correct! 🎉");
          setScore(prevScore => prevScore + 10);
        } else {
          setFeedback("Incorrect, try again! ❌");
        }
        setTimeout(() => {
          setFeedback("");
          generateQuestion();
        }, 1500);
      };
    
      useEffect(() => {
        generateQuestion();
      }, []);


      return (
        <div>
          <Navbar />
          <div className="math-game-container">
            <h2 className="math-game-title">Math Game</h2>
            <div className="math-game-score">
              Score: {score}
            </div>
            <div className="math-game-question-container">
              <p className="math-game-question">
                {question.num1} + {question.num2} = ?
              </p>
              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Your answer"
                className="math-game-input"
              />
              <button 
                onClick={checkAnswer}
                className="math-game-button"
              >
                Submit
              </button>
            </div>
            <p className={`math-game-feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
              {feedback}
            </p>
          </div>
        </div>
      );
    };
    
    export default MathGame;