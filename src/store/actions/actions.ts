// store/actions.ts
import {Dispatch} from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHANGE_LANGUAGE,
} from './actionTypes';
import {LOGIN_URL} from '../../AppConstants/AppConstants';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const changeLanguage = (language: string) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginRequest());

    try {
      console.log(LOGIN_URL);

      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(loginSuccess(data.user));
        console.log(data.user);
      } else {
        dispatch(loginFailure(data.error));
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
};
