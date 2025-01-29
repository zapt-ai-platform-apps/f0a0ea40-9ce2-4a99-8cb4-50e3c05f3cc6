import React, { useState } from 'react';

export default function GoalTracker() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ title: '', description: '', deadline: '' });

  const addGoal = () => {
    if (newGoal.title.trim() && newGoal.deadline) {
      setGoals([...goals, { id: Date.now(), ...newGoal }]);
      setNewGoal({ title: '', description: '', deadline: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Goal Setting</h2>
      <div className="grid gap-4 mb-4">
        <input
          type="text"
          value={newGoal.title}
          onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
          className="box-border border p-2 rounded"
          placeholder="Goal Title"
        />
        <input
          type="text"
          value={newGoal.description}
          onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
          className="box-border border p-2 rounded"
          placeholder="Description"
        />
        <input
          type="date"
          value={newGoal.deadline}
          onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
          className="box-border border p-2 rounded"
        />
        <button
          onClick={addGoal}
          className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-pink-600"
        >
          Add Goal
        </button>
      </div>
      <ul className="space-y-2">
        {goals.map((goal) => (
          <li key={goal.id} className="flex justify-between items-center p-2 border rounded">
            <div>
              <p className="font-medium">{goal.title}</p>
              <p className="text-sm text-gray-500">{goal.description}</p>
              <p className="text-sm text-gray-500">Deadline: {goal.deadline}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => setGoals(goals.filter((g) => g.id !== goal.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}