import React from 'react';
import { Lightbulb, Info } from 'lucide-react';

export default function Explanation() {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-6 h-full">
      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
        <Lightbulb className="text-amber" />
        How it Works
      </h3>
      
      <div className="space-y-5 text-sm text-slate-600 leading-relaxed font-medium">
        <div>
          <h4 className="text-slate-900 font-bold mb-1 text-base">What is Dynamic Programming (DP)?</h4>
          <p>
            DP solves complex problems by breaking them into overlapping sub-problems. 
            Instead of recalculating, it stores the results of sub-problems in a table (memoization/tabulation).
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-inner">
          <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
            <Info size={16} className="text-violet" />
            Recurrence Relation
          </h4>
          <code className="block bg-white border border-slate-200 p-3 rounded-lg text-violet-dark font-mono text-center shadow-sm font-bold">
            dp[i][w] = max(dp[i-1][w], dp[i-1][w - h<sub className="text-[10px]">i</sub>] + m<sub className="text-[10px]">i</sub>)
          </code>
          <p className="mt-4 text-xs text-slate-500">
            For each subject <code className="text-slate-700 bg-slate-200 px-1 rounded">i</code> and time limit <code className="text-slate-700 bg-slate-200 px-1 rounded">w</code>, we choose the maximum between:
            <br /><span className="inline-block mt-1">1. Skipping the subject (value remains same as without it).</span>
            <br /><span className="inline-block mt-1">2. Including the subject (value of remaining time + subject marks).</span>
          </p>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-1 text-base">DP vs Greedy</h4>
          <p>
            A greedy approach (e.g., picking subjects with highest marks/hour first) might fail because it doesn't consider the exact fit of the remaining time. DP explores all valid combinations to guarantee the absolute maximum marks.
          </p>
        </div>
      </div>
    </div>
  );
}
