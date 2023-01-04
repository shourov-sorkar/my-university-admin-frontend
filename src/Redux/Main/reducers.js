import { combineReducers } from "redux";
import types from "./types";

let dataState = {
  user: null,
};

const main = (state = dataState, action) => {
  switch (action.type) {
    case types.USER:
      return Object.assign({}, state, { user: action.payload.user });

    default:
      return state;
  }
};

const reducers = combineReducers({
  main,
});

export default reducers;
