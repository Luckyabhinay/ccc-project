import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

export default function OptimalPlan({ selectedSubjects }) {
  if (selectedSubjects.length === 0) {
    return (
      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm h-full">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BookOpen className="text-teal" />
          The Optimal Plan
        </h3>
        <p className="text-slate-500 italic">No subjects selected. Increase time budget or add subjects with fewer hours.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm h-full">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <BookOpen className="text-teal" />
        The Optimal Plan
      </h3>
      <div className="space-y-4">
        {selectedSubjects.map((sub, idx) => (
          <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal/30 hover:bg-teal/5 transition-colors">
            <CheckCircle className="text-teal shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-slate-800 font-bold text-lg">{sub.name}</h4>
              <p className="text-slate-500 text-sm font-medium">
                Study for {sub.hours}h • Expected Marks: <span className="text-teal-dark">{sub.marks}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
