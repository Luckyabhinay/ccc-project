import React, { useState } from 'react';
import { Clock, Plus, Trash2, Edit2 } from 'lucide-react';

export default function Sidebar({ subjects, totalTime, setTotalTime, addSubject, removeSubject, updateSubject }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newSub, setNewSub] = useState({ name: '', hours: 1, marks: 10 });

  const handleAdd = (e) => {
    e.preventDefault();
    if (newSub.name && newSub.hours > 0 && newSub.marks > 0) {
      addSubject({ ...newSub, hours: Number(newSub.hours), marks: Number(newSub.marks) });
      setNewSub({ name: '', hours: 1, marks: 10 });
      setIsAdding(false);
    }
  };

  return (
    <div className="flex flex-col space-y-8">
      {/* Time Budget Setting */}
      <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-teal-dark">
          <Clock size={20} />
          Time Budget
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 font-medium">Available Time</span>
            <span className="text-2xl font-bold text-slate-900 bg-white px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
              {totalTime}h
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={totalTime}
            onChange={(e) => setTotalTime(Number(e.target.value))}
            className="w-full accent-teal h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </section>

      {/* Subjects List */}
      <section className="flex-1 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-violet-dark">Subjects</h2>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="p-2 bg-violet/10 text-violet-dark rounded-xl hover:bg-violet hover:text-white transition-colors shadow-sm"
            title="Add Subject"
          >
            <Plus size={20} />
          </button>
        </div>

        {isAdding && (
          <form onSubmit={handleAdd} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-4 space-y-4 shadow-inner">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Subject Name</label>
              <input
                type="text"
                placeholder="e.g., Physics"
                value={newSub.name}
                onChange={(e) => setNewSub({ ...newSub, name: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet/50 focus:border-violet transition-shadow"
                required
              />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Hours</label>
                <input
                  type="number"
                  min="1"
                  value={newSub.hours}
                  onChange={(e) => setNewSub({ ...newSub, hours: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet/50 focus:border-violet transition-shadow"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Marks</label>
                <input
                  type="number"
                  min="1"
                  value={newSub.marks}
                  onChange={(e) => setNewSub({ ...newSub, marks: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet/50 focus:border-violet transition-shadow"
                  required
                />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-violet text-white py-2 rounded-xl text-sm font-bold hover:bg-violet-dark hover:shadow-md transition-all"
              >
                Add Subject
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="flex-1 bg-white border border-slate-300 text-slate-600 py-2 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-slate-900 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="space-y-3 overflow-y-auto pr-2 scrollbar-thin">
          {subjects.map((sub) => (
            <div key={sub.id} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center group hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-slate-800">{sub.name}</h3>
                <p className="text-sm text-slate-500 font-medium">
                  {sub.hours}h • {sub.marks} marks
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => removeSubject(sub.id)}
                  className="p-2 text-rose hover:bg-rose/10 rounded-lg transition-colors"
                  title="Remove"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
