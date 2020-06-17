import { combineReducers } from "redux";

import SearchReducer from "./searchReducer";

export default combineReducers({
  search: SearchReducer,
});
