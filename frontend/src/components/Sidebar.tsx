import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setActiveSidebarItem } from '../store/slices/appSlice';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  Navigation, 
  Leaf, 
  Bell, 
  Droplet, 
  Database, 
  CloudSun, 
  FileText, 
  Settings,
  CloudRain,
  Wind,
  Droplets
} from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Map & Zones', icon: MapIcon },
  { name: 'Drone Monitor', icon: Navigation },
  { name: 'Crop Health', icon: Leaf },
  { name: 'Alerts', icon: Bell, badge: 6 },
  { name: 'Irrigation', icon: Droplet },
  { name: 'Water Tank', icon: Database },
  { name: 'Weather', icon: CloudSun },
  { name: 'Reports', icon: FileText },
  { name: 'Settings', icon: Settings },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector((state: RootState) => state.app.activeSidebarItem);

  return (
    <aside className="w-64 bg-sidebar border-r border-border flex flex-col h-full overflow-y-auto">
      <div className="p-4 flex items-center gap-3">
        <Leaf className="text-primary-500" size={24} />
        <span className="font-bold text-lg">Smart Farming Assistant</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <button
              key={item.name}
              onClick={() => dispatch(setActiveSidebarItem(item.name))}
              className={clsx(
                'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200',
                isActive
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-text-muted hover:bg-gray-50 hover:text-text-main'
              )}
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className={isActive ? 'text-primary-500' : 'text-gray-400'} />
                {item.name}
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Weather Widget */}
      <div className="p-4 m-4 bg-orange-50/50 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <CloudSun className="text-orange-400" size={32} />
          <div>
            <div className="text-2xl font-bold">32°C</div>
            <div className="text-xs text-text-muted">Partly Cloudy</div>
          </div>
        </div>
        
        <div className="space-y-3 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <Droplets size={14} className="text-blue-400" />
            <div className="flex-1">Humidity</div>
            <div className="font-semibold text-text-main">65%</div>
          </div>
          <div className="flex items-center gap-2">
            <Wind size={14} className="text-teal-400" />
            <div className="flex-1">Wind</div>
            <div className="font-semibold text-text-main">12 km/h</div>
          </div>
          <div className="flex items-center gap-2">
            <CloudRain size={14} className="text-indigo-400" />
            <div className="flex-1">Rainfall (Today)</div>
            <div className="font-semibold text-text-main">0 mm</div>
          </div>
        </div>
        <div className="mt-4 text-[10px] text-gray-400">Source: IMD</div>
      </div>
    </aside>
  );
};

export default Sidebar;
