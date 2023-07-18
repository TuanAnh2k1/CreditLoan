// store/reducer.ts
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
} from '../actions/actionTypes';

interface RegistrationState {
  isLoading: boolean;
  error: string | null;
}

const initialState: RegistrationState = {
  isLoading: false,
  error: null,
};

const registrationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FORM_SUBMIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case FORM_SUBMIT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
