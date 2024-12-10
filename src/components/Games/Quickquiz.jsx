import React, { useState } from "react";
import "../../style/games/QuickQuiz.css";
import Cat from '../../assets/home-cat.svg';

const QuickQuiz = () => {
  const triviaQuestions = [
    {
      question: "How many legs does a spider have?",
      options: ["6", "8", "10", "12"],
      correct: "8",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
      correct: "Tokyo",
    },
    {
      question: "What do rabbits love to eat?",
      options: ["Carrots", "Fish", "Bread", "Berries"],
      correct: "Carrots",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const onPointsEarned = (points) => {
    setScore(score + points);
  };

  const handleAnswerSubmit = () => {
    const correctAnswer = triviaQuestions[currentQuestion].correct;

    if (selectedOption === correctAnswer) {
      setFeedback("Correct! 🎉");
      onPointsEarned(10);
    } else {
      setFeedback(`Incorrect! The correct answer was ${correctAnswer}. ❌`);
    }

    setTimeout(() => {
      setFeedback("");
      setSelectedOption("");
      if (currentQuestion < triviaQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFeedback("You’ve completed the quiz!");
      }
    }, 2000);
  };

  return (
    <div>
      <div className="game-frame">
        <h1 className="game-title">Let's Play!</h1>
      
      
      <div className="quiz-container">
        <h2 className="quiz-title">Quick Quiz Challenge</h2>
        <div className="quiz-score">
          Score: {score}
        </div>
        <div className="quiz-question-container">
          <p className="quiz-question">
            {triviaQuestions[currentQuestion].question}
          </p>
          <div className="quiz-options">
            {triviaQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`quiz-option-button ${selectedOption === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button 
            onClick={handleAnswerSubmit}
            className="quiz-submit-button"
          >
            Submit Answer
          </button>
        </div>
        <p className={`quiz-feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
          {feedback}
        </p>
      </div>
      <img src={Cat} alt="cute pixel cat" className="game-cat" />
      </div>
      
    </div>
  );
};

export default QuickQuiz;