import React, { useState } from 'react';
import TaskManager from './components/TaskManager';
import EventPlanner from './components/EventPlanner';
import BudgetTracker from './components/BudgetTracker';
import GoalTracker from './components/GoalTracker';
import MealPlanner from './components/MealPlanner';

export default function App() {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Our Family Hub</h1>
          <div className="mt-4 space-x-4">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-4 py-2 rounded ${activeTab === 'tasks' ? 'bg-pink-500 text-white' : 'bg-gray-100'}`}
            >
              Tasks
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 rounded ${activeTab === 'events' ? 'bg-pink-500 text-white' : 'bg-gray-100'}`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`px-4 py-2 rounded ${activeTab === 'budget' ? 'bg-pink-500 text-white' : 'bg-gray-100'}`}
            >
              Budget
            </button>
            <button
              onClick={() => setActiveTab('goals')}
              className={`px-4 py-2 rounded ${activeTab === 'goals' ? 'bg-pink-500 text-white' : 'bg-gray-100'}`}
            >
              Goals
            </button>
            <button
              onClick={() => setActiveTab('meals')}
              className={`px-4 py-2 rounded ${activeTab === 'meals' ? 'bg-pink-500 text-white' : 'bg-gray-100'}`}
            >
              Meal Plan
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'tasks' && <TaskManager />}
          {activeTab === 'events' && <EventPlanner />}
          {activeTab === 'budget' && <BudgetTracker />}
          {activeTab === 'goals' && <GoalTracker />}
          {activeTab === 'meals' && <MealPlanner />}
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-gray-600">Made on <a href="https://www.zapt.ai" className="text-pink-500 hover:text-pink-700">ZAPT</a></p>
        </div>
      </footer>
    </div>
  );
}