import React from 'react';
import Filters from './Filters';
import Stats from './Stats';
import EntryMethodsChart from './charts/EntryMethodsChart';
import AttritionRatesChart from './charts/AttritionRatesChart';
import RecruitmentVsAttritionChart from './charts/RecruitmentVsAttritionChart';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-lg font-bold">VADI - MOSID Analysis - 00341 - SIG O</h1>
        <p className="text-sm text-gray-400">Last Updated: 2024.11.01 0732h EST</p>
      </header>

      <div className="grid grid-cols-4 gap-6">
        {/* Filters Section */}
        <Filters />

        {/* Main Section */}
        <div className="col-span-3 space-y-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <Stats />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded">
              <h2 className="text-lg font-semibold mb-4">2024 Entry Methods</h2>
              <EntryMethodsChart />
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h2 className="text-lg font-semibold mb-4">2024 Attrition Rates</h2>
              <AttritionRatesChart />
            </div>
          </div>

          {/* Bottom Chart */}
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-lg font-semibold mb-4">
              23/24 Recruitment versus Attrition
            </h2>
            <RecruitmentVsAttritionChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
