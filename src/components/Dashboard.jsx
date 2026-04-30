import React from 'react';
import SummaryCards from './SummaryCards';
import OptimalPlan from './OptimalPlan';
import Explanation from './Explanation';
import DPTable from './DPTable';

export default function Dashboard({ subjects, totalTime, dpResult }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Top Metrics */}
      <SummaryCards totalTime={totalTime} dpResult={dpResult} />
      
      {/* Full Width DP Table */}
      <div className="w-full">
        <DPTable subjects={subjects} totalTime={totalTime} dpResult={dpResult} />
      </div>

      {/* Two-column layout for details below the table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <OptimalPlan selectedSubjects={dpResult.selectedSubjects} />
        <Explanation />
      </div>
    </div>
  );
}
