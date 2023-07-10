// store/actions.ts
import {Dispatch} from 'redux';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes';

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

export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginRequest());

    try {
      // Gọi API đăng nhập

      const response = await fetch('https://musicfivestar.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });

      const data = await response.json();

      if (response.ok) {
        // Xử lý thành công
        dispatch(loginSuccess(data.user));
        console.log(data.user);
      } else {
        // Xử lý lỗi
        dispatch(loginFailure(data.error));
      }
    } catch (error) {
      // Xử lý lỗi kết nối
      dispatch(loginFailure(error.message));
    }
  };
};
