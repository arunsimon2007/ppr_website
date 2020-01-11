import { combineReducers } from "redux";

import { spinnerReducer } from "./spinner/index";

export default combineReducers({ spinner: spinnerReducer });
