import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import badge from "../../images/badge.jpg"
import './quiz.css';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { formName } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get(`/questions/form/${encodeURIComponent(formName)}`)
      .then((response) => setQuestions(response.data))
      .catch((err) => console.log(err));
  }, [formName]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
  };

  return (
    <div className="quizContainer">
      <Navbar />
      <div className="formContainer">
        {questions.length > 0 && currentQuestionIndex < questions.length && (
          <form className="quizForm ">
            <div className="formInfomation">
              <p className='qu'> {questions[currentQuestionIndex].question}</p>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <input
                    className='quizRadio'
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </div>
              ))}
              <button type="button" className="button1" onClick={handleNextQuestion}>
                Next
              </button>
            </div>
          </form>
        )}
        {currentQuestionIndex === questions.length && (
          <div className='quizText'>
            <p className='congratsText'>Congratulations you have unlocked a badge</p>
            <p>score: {score} out of {questions.length}</p>

            <div className="badge">
               <img className='pictur' src={badge} alt="network problem" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
