// store/actions/occupationActions.ts
import {Dispatch} from 'redux';
import {
  GET_PROFESSIONS_REQUEST,
  GET_PROFESSIONS_SUCCESS,
  GET_PROFESSIONS_FAILURE,
} from '../actions/actionTypes';
import {GET_PROFESSIONS} from '../../AppConstants/AppConstants';

// Action creators
const getProfessionsRequest = () => ({
  type: GET_PROFESSIONS_REQUEST,
});

const getProfessionsSuccess = (professions: any[]) => ({
  type: GET_PROFESSIONS_SUCCESS,
  payload: professions,
});

const getProfessionsFailure = (error: string) => ({
  type: GET_PROFESSIONS_FAILURE,
  payload: error,
});

// Async action to fetch professions from API
export const getProfessions = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getProfessionsRequest());
    try {
      const response = await fetch(GET_PROFESSIONS, {
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
      dispatch(getProfessionsSuccess(newArray));
    } catch (error) {
      dispatch(getProfessionsFailure(error.message));
      console.log(12);
    }
  };
};
