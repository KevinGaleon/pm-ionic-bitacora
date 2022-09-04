import { combineReducers } from '@reduxjs/toolkit';
import binnacleReducer from './binnacleReducer/binnacle';
import binnacleGroupReducer from './binnacleGroupReducer/binnacleGroup';
import appHeaderReducer from './appHeaderReducer/appHeader';

const rootReducer = combineReducers({
  appHeader: appHeaderReducer,
  binnacle: binnacleReducer,
  binnacleGroup: binnacleGroupReducer,
});

export default rootReducer;