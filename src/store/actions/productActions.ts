// store/actions/occupationActions.ts
import {Dispatch} from 'redux';
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/actionTypes';
import {GET_PRODUCT} from '../../AppConstants/AppConstants';

// Action creators
const getProductRequest = () => ({
  type: GET_PRODUCT_REQUEST,
});

const getProductSuccess = (professions: any[]) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: professions,
});

const getProductFailure = (error: string) => ({
  type: GET_PRODUCT_FAILURE,
  payload: error,
});

// Async action to fetch professions from API
export const getProduct = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getProductRequest());
    try {
      const response = await fetch(GET_PRODUCT, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const newArray = data.map(item => ({
        value: item.id.toString(),
        label: item.value,
      }));

      // Assuming the response data is an array of objects with 'id' and 'value' properties
      dispatch(getProductSuccess(newArray));
    } catch (error) {
      dispatch(getProductFailure(error.message));
      console.log(12);
    }
  };
};
