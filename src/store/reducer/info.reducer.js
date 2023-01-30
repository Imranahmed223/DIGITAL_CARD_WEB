import { infoConstant } from "./../constants";

const initialState = {
  info: [],
  errors: [],
  loading: false,
  message: "",
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case infoConstant.GET_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case infoConstant.GET_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case infoConstant.GET_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
      };
    default:
      return state;
  }
};

export default infoReducer;
