import React from 'react';
import { MdDoneOutline } from "react-icons/md";
import {generateRandomTask} from "../api/TaskApi";
import './Styles.css'

const Task = ({randomTask, setRandomTask, setIsOpen}) => {
  const completed_tasks = JSON.parse(localStorage.getItem('completed_tasks'))

  const handleCompleteTask = () => {
    const completed_tasks = JSON.parse(localStorage.getItem('completed_tasks'))
    console.log('ddd')
    localStorage.setItem('completed_tasks', JSON.stringify([...completed_tasks, randomTask]))
    generateRandomTask(setRandomTask)
    setIsOpen(true)
  }

  return (
    <div className='task'>
      {randomTask?.todo}
      {
        !completed_tasks?.some(el => randomTask?.id === el?.id) && <MdDoneOutline style={{cursor: 'pointer'}} onClick={handleCompleteTask}/>
      }
    </div>
  );
};

export default Task;