import { infoConstant } from "./../constants";
import axios from "axios";

export const getAllInfo = (body) => {
  return async (dispatch) => {
    dispatch({ type: infoConstant.GET_INFO_REQUEST });
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_ROOT}/users/qr/read`,
        body
      );
      const { data } = result;
      dispatch({
        type: infoConstant.GET_INFO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: infoConstant.GET_INFO_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: infoConstant.CLEAR_ERRORS });
};

// Clearing Messages
export const clearMessages = () => async (dispatch) => {
  dispatch({ type: infoConstant.CLEAR_MESSAGES });
};
