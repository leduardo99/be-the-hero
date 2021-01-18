import { combineReducers } from "redux";

import { reducer as auth } from "./auth";
import { reducer as ong } from "./ong";
import { reducer as incidents } from "./incidents";

const reducers = combineReducers({
  auth,
  ong,
  incidents
});

export default reducers;
