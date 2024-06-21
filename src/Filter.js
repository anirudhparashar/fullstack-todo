// src/Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <label>Filter by status:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Filter;
