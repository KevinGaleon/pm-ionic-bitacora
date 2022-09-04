import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Binnacle } from '../../../common/interfaces/binnacle';

import { BinnacleState } from './binnacle.interfaces';

const initialState: BinnacleState = {
  binnacleList: [],
  binnacleSelected: {} as Binnacle,
  // binnacleSelected: {
  //   _id: '',
  //   binnacleGroupId: '15asf1e8asfas2g515464as',
  //   title: 'Animales',
  //   date: '04/09/2022',
  //   description: 'Ser orgánico que vive , siente y se mueve por propio impulso',
  //   comment: 'comentario sasfgasgasasg',
  //   photos: [
  //     'https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-P.png',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCworbnSkOl6alVIp-hzCxM8Pv3MbdCPJpMlnsTpgJqvIKBFN_Bw7umhWnT5_aNp7RFY&usqp=CAU',
  //   ],
  // },
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