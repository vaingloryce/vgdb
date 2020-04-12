import { combineReducers } from 'redux';

import heroes from './heroes/reducer';

const rootReducer = combineReducers({
  heroes,
});

export default rootReducer;
