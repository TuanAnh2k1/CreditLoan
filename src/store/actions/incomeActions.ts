// store/actions/occupationActions.ts
import {Dispatch} from 'redux';
import {
  GET_INCOME_REQUEST,
  GET_INCOME_SUCCESS,
  GET_INCOME_FAILURE,
} from '../actions/actionTypes';
import {GET_INCOME} from '../../AppConstants/AppConstants';

// Action creators
const getIncomeRequest = () => ({
  type: GET_INCOME_REQUEST,
});

const getIncomeSuccess = (professions: any[]) => ({
  type: GET_INCOME_SUCCESS,
  payload: professions,
});

const getIncomeFailure = (error: string) => ({
  type: GET_INCOME_FAILURE,
  payload: error,
});

// Async action to fetch professions from API
export const getIncome = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getIncomeRequest());
    try {
      const response = await fetch(GET_INCOME, {
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
      dispatch(getIncomeSuccess(newArray));
    } catch (error) {
      dispatch(getIncomeFailure(error.message));
      console.log(12);
    }
  };
};
