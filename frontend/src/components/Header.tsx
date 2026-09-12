import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ChevronDown } from 'lucide-react';

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
    </header>
  );
};

export default Header;
