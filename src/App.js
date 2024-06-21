// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Filter from './Filter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task) => {
    axios.post('http://localhost:5000/api/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
  };

  const updateTask = (id, updatedTask) => {
    axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask)
      .then(response => setTasks(tasks.map(task => task._id === id ? response.data : task)))
      .catch(error => console.error('Error updating task:', error));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const filteredTasks = tasks.filter(task => filter === 'All' || task.status === filter);

  return (
    <div>
      <TaskForm addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
