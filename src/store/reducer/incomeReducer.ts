// store/reducer/occupationReducer.ts
import {DropdownState} from '../../types/formTypes';
import {
  GET_INCOME_REQUEST,
  GET_INCOME_SUCCESS,
  GET_INCOME_FAILURE,
} from '../actions/actionTypes';

const initialState: DropdownState = {
  isLoading: false,
  data: [],
  error: null,
};

const incomeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_INCOME_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_INCOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_INCOME_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default incomeReducer;
