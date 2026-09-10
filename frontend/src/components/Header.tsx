import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ChevronDown, Cloud, Bell, User } from 'lucide-react';

const Header = () => {
  const selectedFarm = useSelector((state: RootState) => state.app.selectedFarm);

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text-muted">Farm:</span>
          <button className="flex items-center gap-2 text-sm font-semibold bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-100 transition-colors">
            {selectedFarm}
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </div>
        <div className="h-4 w-px bg-gray-300"></div>
        <div className="text-sm font-medium text-text-main">
          Date: <span className="font-normal text-text-muted">04 Jun 2025, 10:30 AM</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full">
          <Cloud size={16} fill="currentColor" />
          Online
        </div>
        
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
          <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border-2 border-white">
            3
          </span>
        </div>

        <div className="h-8 w-px bg-gray-200"></div>

        <button className="flex items-center gap-3 hover:bg-gray-50 p-1 rounded-full transition-colors pr-3">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
            <User size={18} className="text-gray-500" />
          </div>
          <span className="text-sm font-medium">Ramesh</span>
          <ChevronDown size={16} className="text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;
