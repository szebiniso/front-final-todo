import React from 'react';
import {generateRandomTask} from "../api/TaskApi";

const Button = ({setRandomTask}) => {
  const handleGenerateNewTask = () => {
    generateRandomTask(setRandomTask)
  }

  return (
    <button className='button' onClick={handleGenerateNewTask}>Generate new task</button>
  );
};

export default Button;