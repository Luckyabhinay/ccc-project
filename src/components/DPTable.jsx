import React, { useState } from 'react';
import { Database } from 'lucide-react';

export default function DPTable({ subjects, totalTime, dpResult }) {
  const { dpTable, optimalPath } = dpResult;
  const [hoveredCell, setHoveredCell] = useState(null);

  return (
    <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm flex flex-col w-full overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-2">
            <Database className="text-violet" />
            The DP Table ("The Brain")
          </h3>
          <p className="text-sm text-slate-500">
            Rows represent subjects considered, columns represent available time budget.
          </p>
        </div>
        
        {/* Tooltip Display Area */}
        <div className="w-full md:w-80 bg-slate-50 border border-slate-200 rounded-xl p-4 min-h-[80px] shadow-inner">
          {hoveredCell ? (
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {hoveredCell}
            </p>
          ) : (
            <p className="text-sm text-slate-400 italic flex items-center h-full">
              Hover over a cell to see the logic step...
            </p>
          )}
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-[600px] scrollbar-thin border border-slate-200 rounded-xl shadow-sm">
        <table className="w-full border-collapse text-center">
          <thead className="bg-slate-100 sticky top-0 z-20 shadow-sm">
            <tr>
              <th className="p-3 border-b border-r border-slate-200 text-slate-600 font-bold bg-slate-100 sticky left-0 z-30">
                Subjects / Time
              </th>
              {Array.from({ length: totalTime + 1 }).map((_, w) => (
                <th key={w} className="p-3 border-b border-slate-200 text-slate-600 font-bold min-w-[60px]">
                  {w}h
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dpTable.map((row, i) => (
              <tr key={i} className={`transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-slate-100`}>
                <th className={`p-3 border-b border-r border-slate-200 text-slate-700 font-medium text-left sticky left-0 z-10 whitespace-nowrap ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                  {i === 0 ? (
                    <span className="font-semibold">Base (0)</span>
                  ) : (
                    <div className="flex flex-col">
                      <span className="font-semibold">{subjects[i - 1].name}</span>
                      <span className="text-xs text-slate-500">({subjects[i - 1].hours}h, {subjects[i - 1].marks}m)</span>
                    </div>
                  )}
                </th>
                {row.map((cell, w) => {
                  const isOptimal = optimalPath.has(`${i}-${w}`);
                  const isFinal = i === subjects.length && w === totalTime;
                  
                  let cellClasses = "p-3 border-b border-slate-200/60 text-sm font-mono cursor-pointer transition-all duration-200 relative ";
                  
                  if (isFinal) {
                    cellClasses += "bg-amber text-white font-bold shadow-md transform scale-[1.02] z-10 border-amber-light rounded-sm";
                  } else if (isOptimal) {
                    cellClasses += "bg-teal/10 text-teal-dark font-bold border-teal/20 ";
                  } else {
                    cellClasses += "text-slate-600 hover:bg-violet/10 ";
                  }

                  return (
                    <td 
                      key={w} 
                      className={cellClasses}
                      onMouseEnter={() => setHoveredCell(`dp[${i}][${w}]: ${cell.explanation}`)}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      {cell.value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
