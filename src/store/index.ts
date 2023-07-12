// store/index.ts
import {combineReducers} from 'redux';
import authReducer from './reducer/reducer';
import registrationReducer from './reducer/formReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
