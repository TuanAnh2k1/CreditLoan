// store/reducer/occupationReducer.ts
import {DropdownState} from '../../types/formTypes';
import {
  GET_CHANNEL_REQUEST,
  GET_CHANNEL_SUCCESS,
  GET_CHANNEL_FAILURE,
} from '../actions/actionTypes';

const initialState: DropdownState = {
  isLoading: false,
  data: [],
  error: null,
};

const channelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CHANNEL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_CHANNEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_CHANNEL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default channelReducer;
