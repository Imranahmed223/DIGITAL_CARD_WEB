import { combineReducers } from "redux";
import infoReducer from "./info.reducer";

const rootReducer = combineReducers({
  infoReducer,
});

export default rootReducer;
