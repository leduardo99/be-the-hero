import { combineReducers } from "redux";

import { reducer as auth } from "./auth";
import { reducer as ong } from "./ong";

const reducers = combineReducers({
  auth,
  ong
});

export default reducers;
