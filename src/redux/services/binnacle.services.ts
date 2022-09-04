import axios from "axios";

import { BINNACLE_URL } from "../../common/config.api";
import { Binnacle } from "../../common/interfaces/binnacle";
import { setBinnacleList } from "../reducers/binnacleReducer/binnacle";

export const fetchBinnacles = () =>async (dispatch:Function) => {
  try {
    const response = await axios.get<Binnacle[]>(BINNACLE_URL);
    if (response.data) {
      dispatch(setBinnacleList(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export const createBinnacle = (data: Binnacle) =>async (dispatch:Function) => {
  try {
    const response = await axios.post(BINNACLE_URL, data);
    if (response.data) {
      console.log(response.data)
    }
  } catch (error) {
    console.log(error);
  }
}