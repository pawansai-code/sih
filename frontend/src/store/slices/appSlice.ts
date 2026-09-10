import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  activeSidebarItem: string;
  selectedFarm: string;
}

const initialState: AppState = {
  activeSidebarItem: 'Dashboard',
  selectedFarm: 'Green Valley Farm',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveSidebarItem: (state, action: PayloadAction<string>) => {
      state.activeSidebarItem = action.payload;
    },
    setSelectedFarm: (state, action: PayloadAction<string>) => {
      state.selectedFarm = action.payload;
    },
  },
});

export const { setActiveSidebarItem, setSelectedFarm } = appSlice.actions;
export default appSlice.reducer;
