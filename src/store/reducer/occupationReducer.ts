// store/reducer/occupationReducer.ts
import {DropdownState} from '../../types/formTypes';
import {
  GET_PROFESSIONS_REQUEST,
  GET_PROFESSIONS_SUCCESS,
  GET_PROFESSIONS_FAILURE,
} from '../actions/actionTypes';

const initialState: DropdownState = {
  isLoading: false,
  data: [],
  error: null,
};

const occupationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PROFESSIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_PROFESSIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_PROFESSIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default occupationReducer;
