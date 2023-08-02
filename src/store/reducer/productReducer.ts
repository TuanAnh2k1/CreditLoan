// store/reducer/occupationReducer.ts
import {DropdownState} from '../../types/formTypes';
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/actionTypes';

const initialState: DropdownState = {
  isLoading: false,
  data: [],
  error: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
