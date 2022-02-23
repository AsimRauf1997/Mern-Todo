import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [update, setUpdate] = useState('')
  return (
    <div className='container'>
      <TaskForm 
      title={title} 
      setTitle={setTitle} 
      description={description} 
      setDescription={setDescription}
      update={update}
      setUpdate={setUpdate}
      />
    </div>
     
    
     
    
  );
}

export default App;
