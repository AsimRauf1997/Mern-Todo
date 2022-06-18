import React from "react";
import "../App.css";
import Tasks from "./Tasks";

const TaskForm = ({
  title,
  setTitle,
  description,
  setDescription,
  isUpdating,
  setIsUpdating,
  id,
  setId,
}) => {
  const addUpdateTask = () => {
    if (isUpdating === false) {
      fetch("http://localhost:8001/api/todo/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      })
        .then(function (response) {
          console.log("Response", response);
          setTitle("");
          setDescription("");
          return response.json();
        })
        .catch(function (err) {
          alert(err);
        });
    } else {
      fetch(`http://localhost:8001/api/todo/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      }).then(function (response) {
        setTitle("");
        setDescription("");
        setIsUpdating("");
        return response.json();
      });
    }
  };
  const deleteTask = (id) => {
    fetch(`http://localhost:8001/api/todo/${id}`, {
      method: "DELETE",
    }).then(function (response) {
      console.log("Response", response);
      return response.json();
    });
  };
  const updateTask = (id, title, description) => {
    setIsUpdating(true);
    setId(id);
    setTitle(title);
    setDescription(description);
  };
  return (
    <>
      <form className='form-container' action='/' onSubmit={addUpdateTask}>
        <h2> Add New Task</h2>
        <div className='form-control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Enter New Todo'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            placeholder='Enter New Todo'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className='btn-container'>
          <button className='btn' type='submit'>
            {isUpdating ? "Update" : "Add Task"}
          </button>
        </div>
      </form>
      <Tasks deleteTask={deleteTask} updateTask={updateTask} />
    </>
  );
};

export default TaskForm;
