import React, { useState } from 'react';
import axios from 'axios';
import './newcontent.css';

const Newcontent = () => {
  const [information, setInformation] = useState({
    question: '',
    options: [],
    correctAnswer: '',
    timeLimit: '',
    formName: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === 'options') {
      const optionsArray = value.split(',').map((option) => option.trim());
      setInformation({ ...information, [name]: optionsArray });
    } else {
      setInformation({ ...information, [name]: value });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/questions', information)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        Question:{' '}
        <input
        className='inputText'
          placeholder="Your question here. Recall information with @"
          type="text"
          onChange={handleInput}
          name="question"
        ></input>
        Options:{' '}
        <input
         className='inputText'
          placeholder="Option 1, Option 2, ..."
          type="text"
          onChange={handleInput}
          name="options"
        ></input>
        Correct Answer:{' '}
        <select
          className='inputText'
          value={information.correctAnswer}
          onChange={handleInput}
          name="correctAnswer"
        >
          <option value="" disabled>Select correct answer</option>
          {information.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        Time Limit:{' '}
        <input
        className='inputText'
          placeholder="Your time limit"
          type="text"
          onChange={handleInput}
          name="timeLimit"
        ></input>
        Form Name:{' '}
        <input
        className='inputText'
          placeholder="Your form name"
          type="text"
          onChange={handleInput}
          name="formName"
        ></input>

        <button type="submit" className="button2">
          Create
        </button>
      </form>
    </div>
  );
};

export default Newcontent;
