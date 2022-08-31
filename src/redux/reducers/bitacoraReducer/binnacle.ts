import { BinnacleState } from './binnacle.interfaces';
import { Binnacle } from '../../../common/interfaces/binnacle';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BinnacleState = {
  binnacleList: [],
  binnacleSelected: {} as Binnacle,
  isBinnacleLoading: false,
}

export const  binnacleSlice = createSlice({
  name: 'binnacle',
  initialState,
  reducers: {
    setBinnacleList: (state: BinnacleState, action: PayloadAction<Binnacle[]>) => {
      state.binnacleList = action.payload;
    },
    setBinnacleSelected: (state: BinnacleState, action: PayloadAction<Binnacle>) => {
      state.binnacleSelected = action.payload;
    },
    setIsBinnacleLoading: (state: BinnacleState, action: PayloadAction<boolean>) => {
      state.isBinnacleLoading = action.payload;
    },
  }
});

export const { setBinnacleList, setBinnacleSelected, setIsBinnacleLoading } = binnacleSlice.actions;
export default binnacleSlice.reducer;