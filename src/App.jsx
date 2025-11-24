import React, { useEffect, useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
import './Style.css'

export default function App() {

  const[tasks, setTasks] = useState([]);
  
  // To Store in Local Storage

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=>{
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index)=>{
     const newtask = [...tasks];
     newtask[index] = updatedTask;
     setTasks(newtask);
  };

  const deleteTask = (index) => {
     setTasks(tasks.filter((_, i) => i != index)); // '_' is which is already a deleted task and 'i' is current task
  };

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div>
      <header>
         <h1>TodoTrack</h1>
           <p><i>Your Friendly Task Manager!</i></p>
     </header>
     <TaskForm addTask={addTask}/>
     <TaskList tasks = {tasks}
               updateTask = {updateTask}
               deleteTask = {deleteTask}/>
     <ProgressTracker tasks = {tasks}/>
     {tasks.length > 0 && (<button className='clear-btn' onClick={clearTasks}>Clear All Task</button>)}
    </div>
  )
}

