import React, { useEffect, useState } from "react";

const Tasks = ({ deleteTask, updateTask }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTasks = () => {
    try {
      fetch("https://node-js-todo-app.herokuapp.com/api/todo/", {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setData(data);
          setLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [data]);

  return (
    <div className='task-continer'>
      <h2> My Tasks</h2>
      {loading ? (
        <div className='loader'>
          <h3>Loading....</h3>
        </div>
      ) : (
        <>
          {data.map((task) => (
            <div key={task._id}>
              <label>Title</label>
              <p className='task'>{task.title}</p>
              <label>Description</label>
              <p className='task'>{task.description}</p>
              {task.createdAt && (
                <>
                  <label>CreatedAt</label>
                  <p className='task'>{task.createdAt.substr(0, 10)}</p>
                </>
              )}

              <div className='btn-container'>
                <button
                  className='btn'
                  onClick={() =>
                    updateTask(task._id, task.title, task.description)
                  }
                >
                  Edit
                </button>
                <button className='btn' onClick={() => deleteTask(task._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Tasks;
