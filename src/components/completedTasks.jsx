import React from 'react';
import Task from "./Task";

const CompletedTasks = () => {
  const completed_tasks = JSON.parse(localStorage.getItem('completed_tasks'))

  return (
    <div className='completed_tasks'>
      <h5 className='title'>Completed tasks</h5>
      {
        completed_tasks?.map((el) => (
          <Task randomTask={el}/>
        ))
      }
    </div>
  );
};

export default CompletedTasks;