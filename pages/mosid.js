import React from 'react';
import Filters from './Filters';
import Stats from './Stats';
import EntryMethodsChart from './charts/EntryMethodsChart';
import AttritionRatesChart from './charts/AttritionRatesChart';
import Link from "next/link";
import RecruitmentVsAttritionChart from './charts/RecruitmentVsAttritionChart';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 overflow-hidden">
      <header className="mb-6">
      <Link href="/">
    <h1 className="text-2xl font-bold mb-4 cursor-pointer">
        VADI
    </h1>
    <p>MOSID Analysis - 00341 - SIG O</p>
</Link>

        <p className="text-sm text-gray-400">Last Updated: 2024.11.01 0732h EST</p>
      </header>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Section */}
        <Filters />

        {/* Main Section */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Stats />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded h-[300px]">
              <h2 className="text-lg font-semibold mb-4">2024 Entry Methods</h2>
              <div className="h-[calc(100%-40px)]">
                <EntryMethodsChart />
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded h-[300px]">
              <h2 className="text-lg font-semibold mb-4">2024 Attrition Rates</h2>
              <div className="h-[calc(100%-40px)]">
                <AttritionRatesChart />
              </div>
            </div>
          </div>

          {/* Bottom Chart */}
          <div className="bg-gray-800 p-4 rounded h-[400px]">
            <h2 className="text-lg font-semibold mb-4">
              23/24 Recruitment versus Attrition
            </h2>
            <div className="h-[calc(100%-40px)]">
              <RecruitmentVsAttritionChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
