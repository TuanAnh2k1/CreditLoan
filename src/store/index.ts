// store/index.ts
import {combineReducers} from 'redux';
import authReducer from './reducer/reducer';
import registrationReducer from './reducer/formReducer';
import occupationReducer from './reducer/occupationReducer';
import incomeReducer from './reducer/incomeReducer';
import productReducer from './reducer/productReducer';
import channelReducer from './reducer/channelReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  occupation: occupationReducer,
  income: incomeReducer,
  product: productReducer,
  channel: channelReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
