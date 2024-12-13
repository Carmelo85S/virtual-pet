import React, { useState } from "react";
import "../../style/games/QuickQuiz.css";
import Cat from '../../assets/home-cat.svg';

const QuickQuiz = ({points, setPoints}) => {
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
    {
      question: "What color is the sky on a clear day?",
      options: ["Red", "Green", "Blue", "Yellow"],
      correct: "Blue"
    },
    {
      question: "What animal is known for saying 'meow'?",
      options: ["Dog", "Cat", "Cow", "Duck"],
      correct: "Cat"
    },
    {
      question: "Which fruit is yellow and is a monkey's favorite?",
      options: ["Apple", "Banana", "Grapes", "Orange"],
      correct: "Banana"
    },
    {
      question: "What do you call a baby dog?",
      options: ["Puppy", "Kitten", "Calf", "Cub"],
      correct: "Puppy"
    },
    {
      question: "What shape has 4 equal sides?",
      options: ["Circle", "Triangle", "Square", "Rectangle"],
      correct: "Square"
    },
    {
      question: "Which one of these animals can fly?",
      options: ["Lion", "Penguin", "Eagle", "Elephant"],
      correct: "Eagle"
    },
    {
      question: "What color are most grasshoppers?",
      options: ["Red", "Green", "Blue", "Yellow"],
      correct: "Green"
    },
    {
      question: "Which of these is a popular superhero with a red suit?",
      options: ["Iron Man", "Spider-Man", "Superman", "Batman"],
      correct: "Spider-Man"
    },
    {
      question: "What do you call the person who helps you when you're sick?",
      options: ["Teacher", "Doctor", "Baker", "Farmer"],
      correct: "Doctor"
    },
    {
      question: "Which animal has a long neck and is known for eating leaves from trees?",
      options: ["Elephant", "Giraffe", "Kangaroo", "Panda"],
      correct: "Giraffe"
    }
  ];

   //random question index
   const getRandomQuestion = () => {
    return Math.floor(Math.random() * triviaQuestions.length);
  }; 

  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
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

      //update points globally
      setPoints((prevPoints) => prevPoints + 10);
      
    } else {
      setFeedback(`Incorrect! The correct answer was ${correctAnswer}. ❌`);
    }

    setTimeout(() => {
      setFeedback("");
      setSelectedOption("");
      if (currentQuestion < triviaQuestions.length - 1) {
        
        //call getRandomQuestion for a new question
        setCurrentQuestion(getRandomQuestion);
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