import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { calculateKnapsack } from './utils/knapsack';

const INITIAL_SUBJECTS = [
  { id: '1', name: 'OS', hours: 4, marks: 25 },
  { id: '2', name: 'Networks', hours: 3, marks: 18 },
  { id: '3', name: 'DSA', hours: 2, marks: 15 },
  { id: '4', name: 'DBMS', hours: 2, marks: 12 },
  { id: '5', name: 'AI', hours: 5, marks: 30 },
  { id: '6', name: 'Security', hours: 1, marks: 8 },
];

function App() {
  const [subjects, setSubjects] = useState(INITIAL_SUBJECTS);
  const [totalTime, setTotalTime] = useState(6);

  const dpResult = useMemo(() => {
    return calculateKnapsack(subjects, totalTime);
  }, [subjects, totalTime]);

  const addSubject = (newSubject) => {
    setSubjects([...subjects, { ...newSubject, id: Date.now().toString() }]);
  };

  const removeSubject = (id) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubject = (id, updatedSubject) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, ...updatedSubject } : s)));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-slate-800">
      {/* Main Dashboard (Now on the left) */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto h-auto md:h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="mb-8 border-b border-slate-200 pb-6">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet to-teal mb-2 tracking-tight">
              Study Schedule Optimizer
            </h1>
            <p className="text-slate-500 text-lg">
              Maximize your exam marks based on a time budget using a 0/1 Knapsack Dynamic Programming algorithm.
            </p>
          </header>

          <Dashboard subjects={subjects} totalTime={totalTime} dpResult={dpResult} />
        </div>
      </div>

      {/* Sidebar (Now on the right) */}
      <div className="w-full md:w-80 lg:w-96 shrink-0 bg-white border-l border-slate-200 shadow-sm z-10 p-6 flex flex-col h-auto md:h-screen sticky top-0 overflow-y-auto scrollbar-thin">
        <Sidebar
          subjects={subjects}
          totalTime={totalTime}
          setTotalTime={setTotalTime}
          addSubject={addSubject}
          removeSubject={removeSubject}
          updateSubject={updateSubject}
        />
      </div>
    </div>
  );
}

export default App;
