import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BinnacleGroup } from '../../../common/interfaces/binnacleGroup';

import { BinnacleGroupState } from './binnacleGroup.interfaces';

const initialState: BinnacleGroupState = {
  binnacleGroupList: [],
  binnacleGroupSelected: {} as BinnacleGroup,
  isBinnacleGroupLoading: false,
}

export const  binnacleGroupSlice = createSlice({
  name: 'binnacleGroup',
  initialState,
  reducers: {
    setBinnacleGroupList: (state: BinnacleGroupState, action: PayloadAction<BinnacleGroup[]>) => {
      state.binnacleGroupList = action.payload;
    },
    setBinnacleGroupSelected: (state: BinnacleGroupState, action: PayloadAction<BinnacleGroup>) => {
      state.binnacleGroupSelected = action.payload;
    },
    setIsBinnacleGroupLoading: (state: BinnacleGroupState, action: PayloadAction<boolean>) => {
      state.isBinnacleGroupLoading = action.payload;
    },
  }
});

export const { setBinnacleGroupList, setBinnacleGroupSelected, setIsBinnacleGroupLoading } = binnacleGroupSlice.actions;
export default binnacleGroupSlice.reducer;