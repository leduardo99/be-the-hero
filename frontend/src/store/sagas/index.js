import { all } from "redux-saga/effects";

import auth from "./auth";
import incidents from "./incidents";

export default function* rootSaga() {
  return yield all([auth, incidents]);
}
