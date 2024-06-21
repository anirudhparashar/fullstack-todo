// src/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem 
            key={task._id} 
            task={task} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
