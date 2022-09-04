import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BinnaclesGroup } from '../../../common/interfaces/binnaclesGroup';

import { BinnacleGroupState } from './binnaclesGroup.interfaces';

const initialState: BinnacleGroupState = {
  binnacleGroupList: [],
  binnacleGroupSelected: {} as BinnaclesGroup,
  isBinnacleGroupLoading: false,
}

export const  binnacleGroupSlice = createSlice({
  name: 'binnacleGroup',
  initialState,
  reducers: {
    setBinnacleGroupList: (state: BinnacleGroupState, action: PayloadAction<BinnaclesGroup[]>) => {
      state.binnacleGroupList = action.payload;
    },
    setBinnacleGroupSelected: (state: BinnacleGroupState, action: PayloadAction<BinnaclesGroup>) => {
      state.binnacleGroupSelected = action.payload;
    },
    setIsBinnacleGroupLoading: (state: BinnacleGroupState, action: PayloadAction<boolean>) => {
      state.isBinnacleGroupLoading = action.payload;
    },
  }
});

export const { setBinnacleGroupList, setBinnacleGroupSelected, setIsBinnacleGroupLoading } = binnacleGroupSlice.actions;
export default binnacleGroupSlice.reducer;