// store/reducer.ts
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHANGE_LANGUAGE,
} from '../actions/actionTypes';

interface AuthState {
  isLoading: boolean;
  user: any | null;
  error: string | null;
  language: string;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
  language: 'vn',
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
