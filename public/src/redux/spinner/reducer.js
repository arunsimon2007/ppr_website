import * as types from "./types";

const initialState = {
  displaySpinner: false
};

const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SPINNER:
      return {
        ...state,
        displaySpinner: true
      };
    case types.HIDE_SPINNER:
      return {
        ...state,
        displaySpinner: false
      };
    default:
      return state;
  }
};

export default spinnerReducer;
