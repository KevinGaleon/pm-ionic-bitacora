import axios  from 'axios';

import { BinnaclesGroup } from '../../common/interfaces/binnaclesGroup';
import { BINNACLES_GROUP_URL } from '../../common/config.api';
import { setBinnacleGroupList } from '../reducers/binnaclesGroupReducer/binnaclesGroup';

export const fetchBinnaclesGroups = () => async (dispatch:Function) => {
  try {
    const response = await axios.get<BinnaclesGroup[]>(BINNACLES_GROUP_URL);
    if (response.data) {
      dispatch(setBinnacleGroupList(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export const createBinnaclesGroup = (data: BinnaclesGroup) =>async (dispatch:Function) => {
  try {
    const response = await axios.post(BINNACLES_GROUP_URL, data);
    if (response.data) {
      console.log(response.data)
    }
  } catch (error) {
    console.log(error);
  }
}