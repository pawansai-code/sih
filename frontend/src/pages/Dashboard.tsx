import React from 'react';
import FieldMapCard from '../components/dashboard/FieldMapCard';
import DroneFeedCard from '../components/dashboard/DroneFeedCard';
import HeatMapCard from '../components/dashboard/HeatMapCard';
import WaterTankCard from '../components/dashboard/WaterTankCard';
import AlertsCard from '../components/dashboard/AlertsCard';
import MissionStatusCard from '../components/dashboard/MissionStatusCard';
import FieldOverviewCard from '../components/dashboard/FieldOverviewCard';
import EnvironmentCard from '../components/dashboard/EnvironmentCard';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 h-full w-full min-h-0">
      {/* Top Row - approx 60% height */}
      <div className="grid grid-cols-12 gap-4 flex-[6] min-h-0">
        <div className="col-span-12 xl:col-span-5 h-full min-h-0">
          <FieldMapCard />
        </div>
        <div className="col-span-12 xl:col-span-4 h-full min-h-0">
          <DroneFeedCard />
        </div>
        <div className="col-span-12 xl:col-span-3 flex flex-col gap-4 h-full min-h-0">
          <HeatMapCard />
          <WaterTankCard />
        </div>
      </div>

      {/* Bottom Row - approx 40% height */}
      <div className="grid grid-cols-12 gap-4 flex-[4] min-h-0">
        <div className="col-span-12 xl:col-span-3 h-full min-h-0">
          <AlertsCard />
        </div>
        <div className="col-span-12 xl:col-span-3 h-full min-h-0">
          <MissionStatusCard />
        </div>
        <div className="col-span-12 xl:col-span-3 h-full min-h-0">
          <FieldOverviewCard />
        </div>
        <div className="col-span-12 xl:col-span-3 h-full min-h-0">
          <EnvironmentCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
