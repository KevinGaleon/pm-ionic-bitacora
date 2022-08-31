import { combineReducers } from '@reduxjs/toolkit';
import binnacleReducer from './bitacoraReducer/binnacle';
import appHeaderReducer from './appHeaderReducer/appHeader';

const rootReducer = combineReducers({
  appHeader: appHeaderReducer,
  binnacle: binnacleReducer,
});

export default rootReducer;