// store/actions.ts
import {Dispatch} from 'redux';
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
} from './actionTypes';

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
      // Gọi API đăng ký
      const response = await fetch(
        'https://musicfivestar.onrender.com/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // Xử lý thành công
        dispatch(registerSuccess());
      } else {
        // Xử lý lỗi
        dispatch(registerFailure(data.error));
      }
    } catch (error: any) {
      // Xử lý lỗi kết nối
      dispatch(registerFailure(error.message));
    }
  };
};
