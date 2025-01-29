import React, { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task Management</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="box-border border p-2 rounded flex-grow"
          placeholder="Add new task"
        />
        <button
          onClick={addTask}
          className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-pink-600"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border rounded">
            <span>{task.text}</span>
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}