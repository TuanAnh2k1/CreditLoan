// store/actions.ts
import {Dispatch} from 'redux';
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
} from './actionTypes';
import {REGISTER_URL} from '../../AppConstants/AppConstants';

export const registerRequest = () => ({
  type: FORM_SUBMIT_REQUEST,
});

export const registerSuccess = () => ({
  type: FORM_SUBMIT_SUCCESS,
});

export const registerFailure = (error: string) => ({
  type: FORM_SUBMIT_ERROR,
  payload: error,
});

export const register = (formData: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(registerRequest());

    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(registerSuccess());
      } else {
        dispatch(registerFailure(data.error));
      }
    } catch (error: any) {
      dispatch(registerFailure(error.message));
    }
  };
};
