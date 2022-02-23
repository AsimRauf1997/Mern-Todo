import React,{useEffect, useState} from 'react'

const Tasks = ({deleteTask, updateTask }) => {
  const [data, setData] = useState([])
  const getTasks = () => {
    try {
      fetch('http://localhost:8001/api/todo/', {
        method: 'GET',
      }).then(function(response) {
        return response.json();
      }).then(function(data){
        setData(data)

      })
    } catch (error) {
      alert(error)
      
    }
    
}

useEffect(()=>{
  getTasks()
},[data])

  return (
    <div className='task-continer'>
      <h2> My Tasks</h2>
      {data.map((task) => (
        <div  key={task._id}>
        <label>Title</label>
        <p className="task">{task.title}</p>
        <label>Description</label>
        <p className="task" >{task.description}</p>
        {task.createdAt && (
          <>
          <label>CreatedAt</label>
          <p className="task" >{task.createdAt.substr(0, 10)}</p>
          </>
        )}
        
        <div className='btn-container'>
        <button className='btn' onClick={()=> updateTask(task._id,task.title, task.description)}>Edit</button>
        <button className='btn' onClick={()=>deleteTask(task._id)}>Delete</button>
        </div>

        </div>
        
      ))}
    </div>
  )
}

export default Tasks