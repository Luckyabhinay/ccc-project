import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

export default function SummaryCards({ totalTime, dpResult }) {
  const { maxValue, timeUsed } = dpResult;
  const efficiency = timeUsed > 0 ? ((maxValue / timeUsed) * 100).toFixed(1) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-amber"></div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Total Marks</p>
            <h3 className="text-3xl font-extrabold text-slate-900">{maxValue}</h3>
          </div>
          <div className="p-3 bg-amber/10 text-amber-dark rounded-xl group-hover:scale-110 transition-transform">
            <Target size={24} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-teal"></div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Time Used</p>
            <h3 className="text-3xl font-extrabold text-slate-900">
              {timeUsed} <span className="text-lg text-slate-400 font-medium">/ {totalTime}h</span>
            </h3>
          </div>
          <div className="p-3 bg-teal/10 text-teal-dark rounded-xl group-hover:scale-110 transition-transform">
            <Clock size={24} strokeWidth={2.5} />
          </div>
        </div>
        <div className="mt-4 w-full bg-slate-100 rounded-full h-2">
          <div
            className="bg-teal h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(timeUsed / totalTime) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-violet"></div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Efficiency</p>
            <h3 className="text-3xl font-extrabold text-slate-900">{efficiency}<span className="text-xl">%</span></h3>
          </div>
          <div className="p-3 bg-violet/10 text-violet-dark rounded-xl group-hover:scale-110 transition-transform">
            <TrendingUp size={24} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
