// src/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  // Local state to store form input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }
    // Add new task using the addTask function passed as a prop
    addTask({ title, description, status });
    // Reset form fields
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
