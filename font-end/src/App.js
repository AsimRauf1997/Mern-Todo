import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
function App() {
  const [isUpdating, setIsUpdating] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [id, setId] = useState('')
  return (
    <div className='container'>
      <TaskForm 
      title={title} 
      setTitle={setTitle} 
      description={description} 
      setDescription={setDescription}
      isUpdating={isUpdating}
      setIsUpdating={setIsUpdating}
      id= {id}
      setId ={setId}
      />
    </div>
     
    
     
    
  );
}

export default App;
