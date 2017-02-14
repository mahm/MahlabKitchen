import { combineReducers } from 'redux';

import routesReducer from './routes';

const reducers = combineReducers({
  routes: routesReducer,
});

export default reducers;
