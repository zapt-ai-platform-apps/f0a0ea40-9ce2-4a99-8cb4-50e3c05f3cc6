import React, { useState } from 'react';

export default function MealPlanner() {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({ name: '', description: '', date: '' });

  const addMeal = () => {
    if (newMeal.name.trim() && newMeal.date) {
      setMeals([...meals, { id: Date.now(), ...newMeal }]);
      setNewMeal({ name: '', description: '', date: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meal Planning</h2>
      <div className="grid gap-4 mb-4">
        <input
          type="text"
          value={newMeal.name}
          onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
          className="box-border border p-2 rounded"
          placeholder="Meal Name"
        />
        <input
          type="text"
          value={newMeal.description}
          onChange={(e) => setNewMeal({ ...newMeal, description: e.target.value })}
          className="box-border border p-2 rounded"
          placeholder="Description"
        />
        <input
          type="date"
          value={newMeal.date}
          onChange={(e) => setNewMeal({ ...newMeal, date: e.target.value })}
          className="box-border border p-2 rounded"
        />
        <button
          onClick={addMeal}
          className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-pink-600"
        >
          Add Meal
        </button>
      </div>
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.id} className="flex justify-between items-center p-2 border rounded">
            <div>
              <p className="font-medium">{meal.name}</p>
              <p className="text-sm text-gray-500">{meal.description}</p>
              <p className="text-sm text-gray-500">Date: {meal.date}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => setMeals(meals.filter((m) => m.id !== meal.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}