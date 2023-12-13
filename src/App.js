
import './App.css';
import Button from "./components/Button";
import React, {useEffect, useState} from "react";
import Task from "./components/Task";
import {generateRandomTask} from "./api/TaskApi";
import CompletedTasks from "./components/completedTasks";
import ConfirmModal from "./components/ConfirmModal";

function App() {
  const [randomTask, setRandomTask] = useState({"id":Math.random(),"todo":"Organize pantry","completed":true,"userId":39})
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    localStorage.setItem('completed_tasks', JSON.stringify([]))
    generateRandomTask()
  }, [])

  return (
    <div className="App">
      <h5 className='title'>Generate new task</h5>
      <Button setRandomTask={setRandomTask}/>
      <Task setIsOpen={setIsOpen} setRandomTask={setRandomTask} randomTask={randomTask} />
      <CompletedTasks/>
      <ConfirmModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default App;
