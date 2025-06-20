import React, { useState } from 'react';

function List() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newDescription, setNewDescription] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleDescriptionChange(event) {
    setNewDescription(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "" || newDescription.trim() !== "") {
      setTasks(t => [...t, { title: newTask, description: newDescription }]);
      setNewTask("");
      setNewDescription("");
    }
  }

  return (
    <div className="to-do-list">
      <div className='inputs'>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <input
          type="text "
          placeholder="Enter a description..."
          value={newDescription}
          onChange={handleDescriptionChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
 
      <ol type='ABC'>
  {tasks.map((item, index) => (
    <li key={index}>
      <strong>{item.title}</strong>-{item.description}
    </li>
  ))}
    </ol>
    </div>
  );
}

export default List;