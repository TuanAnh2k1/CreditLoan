// store/actions/occupationActions.ts
import {Dispatch} from 'redux';
import {
  GET_CHANNEL_REQUEST,
  GET_CHANNEL_SUCCESS,
  GET_CHANNEL_FAILURE,
} from '../actions/actionTypes';
import {GET_CHANNEL} from '../../AppConstants/AppConstants';

// Action creators
const getChannelRequest = () => ({
  type: GET_CHANNEL_REQUEST,
});

const getChannelSuccess = (professions: any[]) => ({
  type: GET_CHANNEL_SUCCESS,
  payload: professions,
});

const getChannelFailure = (error: string) => ({
  type: GET_CHANNEL_FAILURE,
  payload: error,
});

// Async action to fetch professions from API
export const getChannel = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getChannelRequest());
    try {
      const response = await fetch(GET_CHANNEL, {
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
      dispatch(getChannelSuccess(newArray));
    } catch (error) {
      dispatch(getChannelFailure(error.message));
      console.log(12);
    }
  };
};
