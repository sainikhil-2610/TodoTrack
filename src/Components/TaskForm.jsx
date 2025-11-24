import React, { useState } from 'react'

export default function TaskForm({addTask}) {
    const [task, setTask] = useState('');// For Task Name
    const [priority, setPriority] = useState("Medium"); // For Task Priority
    const [category, setCategory] = useState("General");// Also In the <input> onChange we are used for continuous changing input to target that we use arrow function with parameter 'event' and calling 'setTask'-> methods to handled by the useStates 

   const handlesubmit = (e) => {
       e.preventDefault();
      if(task.trim()){
        addTask({text:task, priority, category, completed: false})
        // Here We are saving the Values in Key-Value Pair and  We are Passing the 
        //addTask to the App.jsx

        //Reset Form
        setTask(" ");
        setPriority("Medium");
        setCategory("General");
      }
       
   }

  return (
      <form className='task-form' onSubmit={handlesubmit}>
         <div id='inp'>
            <input 
            type="text" 
            placeholder='Enter Your Task'
            value={task}  
            onChange={(event) => setTask(event.target.value)}/>
            <span><button type='submit'>Add Task</button></span>
            {/* <h1>{task}  {priority}  {category}</h1> */}
         </div>


         <div id='btns'>
            <select value={priority} 
            onChange={(event)=>setPriority(event.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            
            <select value={category} onChange={(event)=>setCategory(event.target.value)}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
         </div>
      </form>
  )
}
