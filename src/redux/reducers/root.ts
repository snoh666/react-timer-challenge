import { combineReducers } from 'redux';

import lapsReducer from '@redux/laps/reducer';

const rootReducer = combineReducers({
  laps: lapsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
